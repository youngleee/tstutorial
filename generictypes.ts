/* function getIndexOfArrayItem<T>(array: T[], arrayItem: T) {
    return array.findIndex((item) => item === arrayItem);
}

const arr =[55,99,77]
getIndexOfArrayItem(arr, 77);

// generics specify the relationship between parameters

*/

// function createArrayPair<T,K>(input1: T, input2: K): [T,K] {
    // return [input1, input2];
// }

const createArrayPair = <T,K>(input1:T, input2: K): [T,K] => {
    return [input1, input2];
};

createArrayPair("hello", 10);