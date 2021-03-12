const sequentialSearch = async (array = [], value) => {
    if (array.length === 0) {
        return -1;
    }
    return new Promise((resolve, reject) => {
        console.log("value", value);
        for (let i = 0; i < array.length; i++) {

            if (array[i] === value) {

                return resolve(i);
            }
        }
        return resolve(-1);
    });
}

const sequentialBinarySearchRecursive = async (array = [], value) => {
    if (array.length === 0) {
        return -1;
    }
    let response = await recursiveHandler(array, value, 0, array.length);
    //To avoid stack overflow we simulate the recursive call with
    //an elastic fn call.
    while (typeof response === "function") {
        response = await response();
    }
    return response;
};

const recursiveHandler = async (array, value, left, right) => {
    return new Promise((resolve, reject) => {
        if (left > right) {
            resolve(-1);
        }

        const mid = Math.floor((left + right) / 2);
        if (array[mid] == value) {
            resolve(mid);
        } else if (value < array[mid]) {
            resolve(recursiveHandler.bind(this, array, value, left, mid - 1));
        } else {
            resolve(recursiveHandler.bind(this, array, value, mid + 1, right));
        }
    });

};

module.exports = { sequentialSearch, sequentialBinarySearchRecursive };