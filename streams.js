const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
// 	console.log('------------ read new chunk -------------');
// 	console.log(chunk);
// 	writeStream.write('\nWRITE NEW CHUNK\n');
// 	writeStream.write(chunk);
// });

// piping
readStream.pipe(writeStream);