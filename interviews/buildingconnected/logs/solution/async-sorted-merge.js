'use strict'
let BinarySearchTree = require('binary-search-tree').BinarySearchTree


module.exports = (logSources, printer) => {
	let workingTree = new BinarySearchTree()
	let logSourcePromises = []
	
	popLogSources()	

	// Take latest logs from all of our logSources.
	function popLogSources() {
		logSourcePromises = []
		logSources.forEach(logSource => {logSourcePromises.push(logSource.popAsync().then(_ => processLog(_)))})

		Promise.all(logSourcePromises).then(() => {
			// Printing 0 log sources means we are done.	
			if(printOldestLogs() === 0) {
				printer.done()
				return
			} 
			
			// Otherwise keep going.
			popLogSources()
		}).catch( (error) => {console.log(error)})
	}	

	// If we have a log, add it to our temporary working tree.
	function processLog(log) {
		if(log !== false)	
			workingTree.insert(log.date.getTime(), log)	
	}		

	// Print the oldest logs in our working tree, then delete as needed.
	// Returns the number of lots printed.
	function printOldestLogs() {
		let oldestKey = workingTree.getMinKey()
		let oldestLogs = workingTree.search(oldestKey)

		oldestLogs.forEach( log => {printer.print(log)})
		workingTree.delete(oldestKey)

		// Return logs processed.
		return oldestLogs.length
	}
}