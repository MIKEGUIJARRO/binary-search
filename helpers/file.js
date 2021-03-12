const fs = require("fs");

const readFile = async (path, cb) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                console.log("Error!");
                reject(err);
            }
            const response = cb(data);
            resolve(response);
        });
    });
};

module.exports = { readFile };