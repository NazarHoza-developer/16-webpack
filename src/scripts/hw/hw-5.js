export function getRandomArray(length, min, max){
    const arr = new Array(length).fill(0);
     return arr.map(() => Math.floor(Math.random() * (max - min) + min));
}
console.log(getRandomArray(10, 2, 87));
