
/**
 * IMPLEMENTATION OF MAP
 */
const arrMap = [1,2,3,4]

/* expected behavior to match */
//const map1 = arrMap.map(x=> x*2)
//console.log(map1)

Array.prototype.myMap = function(cb){
    let newArr = []
    for(let i = 0; i< this.length; i++){
        newArr.push(cb(this[i]))
    }
    return newArr
}

const map2 = arrMap.myMap(x=> x*2)
//console.log(map2)

/**
 * IMPLEMENTATION OF FILTER
 */

const words = ['spray', 'limit','elite','exuberant']

/** expected behavior to match */
const result = words.filter(word => word.length >6)
//console.log(result)

Array.prototype.myFilter = function(cb){
    let filteredWord = []

    for(let i =0; i< this.length; i++){
        if(cb(this[i])) {
            filteredWord.push(this[i])
        }
    }
    return filteredWord;
}

const result2 = words.myFilter(word => word.length >6)
//console.log(result2)

/**
 * REDUCE IMPLEMENTATION
 */

const arrRed = [15,16,17,18,19]
/** behavior to follow */

const myReduce = function(array,cb,accumulator){
   
  
    for(let i = 0; i < array.length; i++){
        accumulator = cb(accumulator, array[i])
    }

    return accumulator
}

let result3 = myReduce(arrRed,(accumulator, currentValue)=>accumulator+currentValue,10)

console.log(result3)