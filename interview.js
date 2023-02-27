// ARRAY MANIPULATION
let array1 = [1,2]
let array2 = [1,2]
let counter = 0;

array1.map( (a1) => {
    array2.map((a2) => {
        console.log(a1,a2)
        counter ++
    })
})

console.log(counter)

// ASSIGNMENT OPERATORS

let a = 0
let c = 0
c = a++ ? 10 : 100
console.log('First',c)
c = !a ? 10 : 100
console.log('second' ,c)

// CALCULATE LENGTH OF STRING WITHOUT USING LENGTH FUNCTION 

function getStringLength(strvalue) {
    let count = 0 
    while(strvalue[count] !== undefined){
        count++
    }
    return console.log(count)
}
let mystring = 'Helloworld'
getStringLength(mystring)



for (let i = 0 ; i < 5 ; i++)
    for (let i = 0 ; i < 4 ; i++ )
        console.log('Hello' )
        console.log('world')


function getArr() {
    let a = [1,2,3,4,5]
    let b = []
//     expected OUTPUT [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ], [ 5 ] ]
    for (var i = 0 ; i < a.length  ; i++){
        b.push([a[i], a[i + 1]])
    }
    console.log(b)
}
getArr()
