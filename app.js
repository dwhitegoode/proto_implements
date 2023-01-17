
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
console.log(result2)

/**
 * REDUCE IMPLEMENTATION
 */

const arrRed = [1,2,3,4]
/** behavior to follow */
const initialValue = 0;
Array.prototype.myReduce = function(cb){
    let result;
    for(let i = 0; i<this.length;i++){
        
    }

    return result
}

const result3 = arrRed.myReduce((accumulator, currentValue)=>{
    accumulator+currentValue+initialValue;
})