const fs = require("fs");
const { resolve } = require("path");

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            //if error reject promise and send error to catch function
            if (err) {
                reject(err);
                //return so it doesn't accidently run resolve
                return;
            }
            resolve({
                ok: true,
                message: "File created!"
            })
        })
    });
};

const copyFile = () => {
    return new Promise ((resolve, reject) => {
        fs.copyFile("./src/style.css", "./dist/style.css", err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File copied!"
            })
        });
    })
} 

/*module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
}*/
//ES6 shorthand property names
module.exports = { writeFile, copyFile };