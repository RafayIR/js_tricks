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


let a = 0
let c = 0
c = a++ ? 10 : 100
console.log('First',c)
c = !a ? 10 : 100
console.log('second' ,c)
