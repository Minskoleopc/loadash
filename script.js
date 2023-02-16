let _ = require('lodash');


let words = ["bat", "cat", "dog", "good"]
console.log(_.first(words))
console.log(_.last(words))
console.log(_.nth(words, 2))

let numbers = [11, 22, 33, 44, 5, 66, 77, 88, 99]
console.log(_.chunk(numbers, 2))
console.log(_.slice(numbers, 2))
console.log(_.slice(numbers, 2, 5))
console.log(_.random(1, 100))
console.log(_.sample(numbers))
console.log(_.shuffle(numbers))
// _.times(4,function(){
//     console.log("hello")
// })


// part B 
function message() {
    console.log("Happy Mahashivratri !")
}

//message()

_.delay(message, 4000)
console.log("Hello")


let h = ["chinmay", 123, ["python", "java", "javascript"], true ,{"age":30}]

h.forEach(function (el) {
    if (_.isString(el)) {
        console.log('Element is string data type')
    }
    else if (_.isNumber(el)) {
        console.log('Element is number data type')
    }
    else if (_.isArray(el)) {
        console.log('Element is array data type')
    }
    else if (_.isObject(el)) {
        console.log('Element is object data type')
    }

    else if (_.isBoolean(el)) {
        console.log('Element is boolean data type')
    }
})


//["chinmay", 123, ["pyhton", "java", "javascript"], true ,{"age":30}]





// let names =["chinmay","ram","sham"]
// let a = _.first(names)
// console.log(a)

// let b = _.last(names)
// console.log(b)

// //             0  1  2  3  4  5  6  7
// let numbers = [11,22,33,44,55,66,77,88]
// let c = _.slice(numbers,0,5)
// console.log(c)

// let d = _.random(2,6)
// let e = _.random(10)
// console.log(d)
// console.log(e)

// let f = _.shuffle(numbers)
// console.log(f)
// console.log(numbers)

// _.times(4,function(){
//     console.log('ram')
// })






