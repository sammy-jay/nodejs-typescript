import * as fs from 'fs';
import * as util from 'util';

const writeFile = util.promisify(fs.writeFile);

function touch(path: string) {
	writeFile(path, '')
		.then(() => console.log('Success'))
		.catch(err => console.log(err))
}

export default touch;
