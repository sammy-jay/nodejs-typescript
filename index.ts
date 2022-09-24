import { StringDecoder } from 'string_decoder';
import * as fs from 'fs';
import * as util from 'util'
 
const readFile = util.promisify(fs.readFile);
const decoder = new StringDecoder('utf8');

const buffer = Buffer.alloc(5)

buffer[0] = 123
buffer[1] = 0
buffer[2] = 1000000
buffer[3] = -10000000011
buffer[4] = 256

console.log(buffer)


const buffer2 = Buffer.alloc(5, 1)
console.log(buffer2)

const buffer3 = Buffer.from([4,5,10])
console.log(buffer3)


const strBuffer = Buffer.from("Let's rock 🚀")
console.log(strBuffer)
console.log(strBuffer.toString())


 
const buffers = [
  Buffer.from('Hello '),
  Buffer.from([0b11110000, 0b10011111]),
  Buffer.from([0b10001100, 0b10001110]),
  Buffer.from(' world!'),
];
 
const result = buffers.reduce((result, buffer) => (
  `${result}${decoder.write(buffer)}`
), '');
 
console.log(result); 


 
readFile('package.json')
  .then((content) => {
    console.log(content instanceof Buffer); // true
    console.log(content.toString())
  })
  .catch(error => console.log(error));