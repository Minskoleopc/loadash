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


let e1 = _.range(10)
console.log(e1)

let e2 = _.range(1,10)
console.log(e2)

let e3 = _.range(2,22,2)
console.log(e3)

// numbers

let numberss =  [33,44,-44,-66,77,88,99,100,110,900]
console.log(numberss)
console.log(_.max(numberss))
console.log(_.min(numberss))
console.log(_.min(_.range(2,20)))

let obj  = [
    {age:2},
    {age:3},
    {age:2},
    {age:2}
]

console.log(_.maxBy(obj,'age'))
console.log(_.minBy(obj,'age'))

let values = [11,22,33,34,45,66,777]
console.log(_.sum(values))
console.log(_.sumBy(obj,'age'))


let k = [33,44,55,66,77,88,99,55,66]
let e4 = _.filter(k,function(el){
    return el > 300
})
console.log(e4)


let firstName = [
    {name:"chinmay" ,age:34},
    {name:"sarika",age:24},
    {name:"poorva",age:14},
    {name:"mayuri",age:24}
]

let e5 = _.find(firstName,{name:"sarika"})
console.log(e5)

let e6 = _.filter(firstName,function(el){
    return el.age > 20
})
console.log(e6)



let ll = [33,44,55,66,33,45,66,77,3,545,66,77,88,33,55,66]
console.log(_.pull(ll,33,44))
//console.log(_.pull(firstName,'{age:24}'))
// let a = [22,33,44,5555,66,77,888,921,444,55,66,77,888]
// a.sort()
// console.log(a)

let num = [44,55,66,77,88,99]
console.log(_.take(num,3))
//_.takeRight
console.log(_.takeRight(num,3))

console.log(_.takeWhile(num ,function(n){
    return n < 60
}))
console.log(_.takeRightWhile(num ,function(n){
    return n > 60
}))

// partition
let numbersB = [55,66,77,88,55,66,77,-55,22,-66,-77,-88,-99,22]
let [negative,positive] = _.partition(numbersB,function(n){
    return n < 0
})
console.log(negative)
console.log(positive)

// reduce

let r = 2==2 || 0
console.log(r)


let numberC = [44,55,66,77]


let q  = _.reduce(numberC,function(acc,el){
    return acc + el
},90)
console.log(q)

let colors = ["red","green","green","black","green","black"]
let ra = {}

for(let i = 0 ; i < colors.length ; i++){
    ra[colors[i]] = (ra[colors[i]]||0)+1
}
console.log(ra)

let r22 = _.reduce(colors,function(acc,el){
    acc[el] = (acc[el]||0) + 1
    return acc
},{})
console.log(r22)


// ---------------- reduce --------------------------

let users = 
[
    {
        fullName:"chinmay deshpande",
        job:"tester"
    },
    {
        fullName:"poorva vyas",
        job:"developer"
    },
    {
        fullName:"amol rao",
        job:"admin"
    },
    {
        fullName:"mayuri rao",
        job:"admin"
    },
    {
        fullName:"satendra rai",
        job:"developer"
    },
    {
        fullName:"ayush jain",
        job:"developer"
    }

]

// 
// {
//     tester:[
//         {
//             fullName:"chinmay deshpande",job:"tester"
//         }

//     ]
// }

let namesC = ["ram","laxman rao","satish"]
// console.log(_.map(namesC,function(el){
//     return el.toUpperCase()
// }))
console.log(_.map(namesC,_.upperCase))
console.log(_.map(namesC,_.lowerCase))
console.log(_.map(namesC,_.camelCase))
console.log(_.map(namesC,_.capitalize))








































