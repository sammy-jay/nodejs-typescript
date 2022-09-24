import * as EventEmitter from 'events'

const eventEmitter = new EventEmitter()

function listener (data: object) {
	console.log(data)
}

function listener2 () {
	console.log("Listener two")
}

eventEmitter.on('event', listener)
eventEmitter.once('event2', listener2)

eventEmitter.emit('event', { name: 'Tolu' })
eventEmitter.emit('event', { name: 'Tolu' })
eventEmitter.emit('event', { name: 'Tolu' })

eventEmitter.removeAllListeners('event')

eventEmitter.emit('event', { name: 'Tolu' })

eventEmitter.emit('event2')
eventEmitter.emit('event2')
eventEmitter.emit('event2')