//21BCSE30 | ANIKET PATRA
import FileOperations from './fileOperations.js';

const filePath = 'testFile.txt';
const fileOps = new FileOperations(filePath);

fileOps.readFile()
  .then(data => {
    console.log('File content:');
    console.log(data);
  })
  .catch(err => console.error('Error reading file:', err));

const contentToWrite = 'Hello, world!\n';
fileOps.writeFile(contentToWrite)
  .then(result => console.log(result))
  .catch(err => console.error('Error writing to file:', err));

const contentToAppend = 'This is appended content.\n';
fileOps.appendFile(contentToAppend)
  .then(result => console.log(result))
  .catch(err => console.error('Error appending to file:', err));

fileOps.deleteFile()
  .then(result => console.log(result))
  .catch(err => console.error('Error deleting file:', err));
