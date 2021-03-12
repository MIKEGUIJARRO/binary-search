const prompt = require('prompt-async');
const path = require("path");

const { readFile } = require("./helpers/file");
const { sequentialBinarySearchRecursive, sequentialSearchRecursive } = require("./algos/sequentialSearch");
const { parse } = require('path');


/*
    Nombre: Miguel Alejandro Guijarro Martinez
    Matricula: A01612042

    Sidenote: Place the test files inside the data folder
    before running the script.
    Place the file name directily to the command line 
    ex. node index.js t1.txt
*/

const run = async () => {
    prompt.start();
    const myArgs = process.argv.slice(2);
    try {
        //Read input
        const fileName = myArgs[0];

        //Read file
        const arrayData = await readFile(path.join("./data", fileName), (dataRaw) => {
            return dataRaw.split("\n").map((item) => {
                return parseInt(item);
            });
        });
        console.log("Data:");
        console.log(arrayData);

        const { number } = await prompt.get(["number"]);
        const numb = parseInt(number);

        const startTime = Date.now();
        //const result = await sequentialSearch(arrayData, numb);
        const result = await sequentialBinarySearchRecursive(arrayData, numb);
        const endTime = Date.now();
        console.log("\nResult Search:", result);

        //Date is measured in ms
        const timeDif = (endTime - startTime);
        console.log("\nTime elapsed:", timeDif);
    } catch (e) {
        console.log("Error. ", e)
    };
}

//Main handler
run();

