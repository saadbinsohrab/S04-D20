function sumOfArray (ar){
    let sum = 0;
    for(const num of ar){
       sum = sum + num;
    }
    return sum;
 }
 
 const arrr = [45, 5, 20, 15];
 console.log(sumOfArray(arrr));    //cl= 85