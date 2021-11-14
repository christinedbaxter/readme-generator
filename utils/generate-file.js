const fs = require("fs");
const path = require("path");

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile(
            path.join("./", "output", "README.md"),
            fileContent,
            (err) => {            
                if (err) {
                    reject(err);
                    // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                    return;
                }
            
                resolve({
                    ok: true,
                    message: "File created!"
                });
            }
        );
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./src/style.css", "./dist/style.css", err => {
            // if there's an error, reject the Promise and send the error to the Promise's '.catch()' method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: "Stylesheet created!"
            });
        });
    });
};

module.exports = { writeToFile };
