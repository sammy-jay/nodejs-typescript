import * as fs from 'fs'

const stream = fs.createReadStream('./package.json', { encoding: 'utf-8' })

stream.on('data', (chunk) => {
	console.log('New chunk of data:', chunk)
})

stream.on('error', (err) => {
	console.log('Error', err.toString())
})

stream.on('end', () => {
	console.log('Operation ended')
})
