'use strict'

module.exports = (logSources, printer) => {
	console.log(`# of log sources: ${logSources.length}`)		
	
	logSources.forEach( logSource => {
		let currentLog = logSource.pop()	
		if(currentLog !== false)
			console.log(currentLog)
	})	
	
	printer.done()

	// throw new Error('Not implemented yet!  That part is up to you!')
}