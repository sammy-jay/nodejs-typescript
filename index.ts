import * as fs from 'fs';
import * as util from 'util';

// using callbacks
fs.writeFile('file.txt', 'hello, world.', (err) => {
	if(err){
		console.log(err);
	}else{
		console.log('File created successfully');
	}
})

const writeFile = util.promisify(fs.writeFile);

writeFile('new-file.txt', 'hello, world again.')
	.then(() => console.log('Success'))
	.catch(error => console.log(error))