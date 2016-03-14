var fs = require('fs');

process.on('exit',() => console.log('Bye'));
setTimeout(()=> console.log("timeout"));
fs.readFile('file.zip',(err, data) => console.log(data.length));
process.nextTick(() => console.log(process.pid, process.title));
process.nextTick(() => console.log(process.env));
console.log(new Date());