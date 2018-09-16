'use strict'
let BinarySearchTree = require('binary-search-tree').BinarySearchTree


module.exports = (logSources, printer) => {
	let workingTree = new BinarySearchTree()
	let logRowPromises = []
	let logSourcesToPollNext = []

	let activeLogSources = 0

	// Initial polling of all log sources.
	logSources.forEach( (logSource, index) => {
		logRowPromises.push(logSource.popAsync())
	})

	Promise.all(logRowPromises).then((results) => {
		// Process the logs here...
		console.log(`Processing all of the logRowPromises`)
		results.forEach( (log) => processLog(log))
		printOldestLogs()
	}).catch( (error) => {console.log(error)})


	function processLog(log) {
		if(log !== false) {
			workingTree.insert(log.date.getTime(), log)
		} else {
			console.log(`log source ${log} is drained!`)
			// I should probably do something here?
		}
	}

	function printOldestLogs() {
		let oldestLogs = workingTree.search(workingTree.getMinKey())
		oldestLogs.forEach( (log) => {
			printer.print(log)
		})

		// Once we print we don't need them anymore.
		oldestLogs.forEach( (log) => {workingTree.delete(log.date.getTime())})
	}
}


/*
	console.log(`# of log sources: ${logSources.length}`)		
	
	// Insert all values into a BST.
	let workingTree = new BinarySearchTree()
	var activeLogSources = 0 // # of logSources not returning false.
	let logRowPromises = [];
	
	// Populate our BST with initial values from the loggers.
	logSources.forEach( (logSource, index) => {
		logRowPromises.push(logSource.popAsync().then(currentLog => {
			if(currentLog !== false) {
				workingTree.insert(currentLog.date.getTime(), {sourceIndex: index, log: currentLog})
				activeLogSources++
			}
		}))
	});
	Promise.all(logRowPromises).then(()=> {
    
	})

	// Process all of the logs in the log sources until they are all inactive.
	while(activeLogSources > 0) {
		var loggersToPoll = []

		// Print out the oldest logs found in the tree.
		var oldestLogs = workingTree.search(workingTree.getMinKey())

		oldestLogs.forEach( (logContainer) => {
			printer.print(logContainer.log)
			loggersToPoll.push(logContainer.sourceIndex)
		})

		// Delete the logs from our BST that were printed.
		oldestLogs.forEach( logContainer => {
			workingTree.delete(logContainer.log.date.getTime()) 
		})	

		// Pop new logs off of the sources that were just used into our BST and then update the activeLogSources count as needed.
		loggersToPoll.forEach( logSourceIndex => {
			let log = logSources[logSourceIndex].pop()
			if(log === false) {
				activeLogSources--
			} else {
				workingTree.insert(log.date.getTime(), {sourceIndex: logSourceIndex, log: log})
			}
		})
	}
	printer.done()
}
*/