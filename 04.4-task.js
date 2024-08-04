// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

const binary = '10011000100111';
function zero(binary){
    let zeeero = [];
    for(let i = 0;i < binary.length; i++){
        if(binary[i]==0){
            zeeero.push(binary[i])
        }
    }
    return zeeero.length;
}
const task4 = zero(binary);
console.log(task4);            //cl= 7