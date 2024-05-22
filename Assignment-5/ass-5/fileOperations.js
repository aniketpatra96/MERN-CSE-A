//21BCSE30 | ANIKET PATRA
import fs from "fs";

class FileOperations {
  constructor(filePath) {
    this.filePath = filePath;
  }

  readFile() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filePath, "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  writeFile(content) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.filePath, content, "utf8", (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("File written successfully");
        }
      });
    });
  }

  appendFile(content) {
    return new Promise((resolve, reject) => {
      fs.appendFile(this.filePath, content, "utf8", (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Content appended successfully");
        }
      });
    });
  }

  deleteFile() {
    return new Promise((resolve, reject) => {
      fs.unlink(this.filePath, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("File deleted successfully");
        }
      });
    });
  }
}

export default FileOperations;