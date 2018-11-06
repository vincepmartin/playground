'use strict'
let BinarySearchTree = require('binary-search-tree').BinarySearchTree

module.exports = (logSources, printer) => {
	console.log(`# of log sources: ${logSources.length}`)		
	
	// Insert all values into a BST.
	let workingTree = new BinarySearchTree()
	var activeLogSources = 0 // # of logSources not returning false.

	logSources.forEach( (logSource, index) => {
		let currentLog = logSource.pop()
		if(currentLog !== false) {
			workingTree.insert(currentLog.date.getTime(), {sourceIndex: index, log: currentLog})
			activeLogSources++
		}
	})

	// Runtime: ? activeLogSources will drop over time... O(activeLogSources)?
	// We have an initial sorted array, now lets keep processing.
	while(activeLogSources > 0) {
		var loggersToPoll = []

		// Print out the oldest logs found in the tree.
		var oldestLogs = workingTree.search(workingTree.getMinKey()) // Runtime: O(logn)

		// Runtime: O(oldestLogs * logn)
		oldestLogs.forEach( (logContainer) => {
			printer.print(logContainer.log)
			loggersToPoll.push(logContainer.sourceIndex)
		})

		// Runtime: O(logn)
		// Delete the logs that were printed.
		oldestLogs.forEach( logContainer => {
			workingTree.delete(logContainer.log.date.getTime()) 
		})	

		// Runtime: O( loggersToPoll * log(n))
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
