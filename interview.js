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


// LEETCODE SEARCH INSERT POSITION 

var searchInsert = function(nums, target) {
    let left = 0 ; 
    let right = nums.length - 1
    
    while (left <= right){
        let mid = Math.floor((left + right) / 2)
        if(nums[mid] == target){
            return mid
        }else if (nums[mid] < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return left
}; 
const nums = [ 1, 3, 5, 6 ]
const target = 5

const result = searchInsert(nums,target)
console.log(result)


// LEETCODE FIND THE LENGTH OF LAST WORD IN GIVEN SENTENCE

var lengthOfLastWord = function(s) {
  let result = s.trim().split(' ');
  a = result[result.length-1].length
  return console.log(a)
};


let ss = 'this is a new game'
lengthOfLastWord(ss)

// LEETCODE ANAGRAM PROBLEM

var isAnagram = function (s, t) {
    a = s.split('').sort()
    b = t.split('').sort()
    if( a.length !== b.length ) {
        return false
    }
    for(var i = 0 ; i < s.length ; i++)
       if( a[i] !== b[i]){
           return false
       }
    return console.log('is anagram')
}
let aa = 'var'
let b = 'rav'
isAnagram(aa, b)


// LEETCODE TO CHECK PANGRAM 

var isPangram = function(sentence){
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for (var i = 0 ; i < alpha.length ; i++){
        if(sentence.indexOf(alpha[i]) === -1){
            return console.log('is not pangram')
        }
    }
    return console.log('is pangram')
}
isPangram('thequickbrownfoxjumpsoverthelazydog')

// function to Get maximum length of sentences

var mostWords = function(sentences) {
    let max = 0
    for (let sentences of sentences) {
        let words = sentence.split(' ')
        max = Math.max(max , words.length)
    }
    return max;
}

// REMOVE VOWEL FROM STRING

function remVowel(str) {
    let a1 = ['a' , 'e' , 'i' , 'o' , 'u']
    let result = ''
    for (let i = 0 ; i < a1.length ; i++) {
        if ( !a1.includes(str[i])) {
            result += str[i]
        }
    }       
    return console.log(result)
}
let str = "Geeks for geek"
remVowel(str)

// RETURN 1st REPEATING CHARACTER FOUND

function repStr(str){
    var a = str.split('') 
    for (var i = 0 ; i < a.length ; i++) {
        for (var j = i+1 ;  j < a.length ; j++) {
            if (str[j] == str[i]) {
                a = str[j]
                return console.log(`repeating chracter '${a}'`)
            }
        }    
    }
    return console.log('string has no repeating chracter')
}
var a = 'heloe'
repStr(a)




    // SORT AN ARRAY

let a = [5, 2, 7, 1, 0]

function BubbleSort (a) {
    for (let i = 0 ; i < a.length -1 ; i ++) {
        let swapped = false 
        for (let j = 0 ; j < a.length -i -1 ; j++) {
                if (a[j] > a[j + 1]){
                    let temp = a[j]
                    a[j] = a[j + 1]
                    a[j + 1] = temp
                    swapped = true
            }
        }   
    }
    return a
}

console.log('Before Sorting' , a)
console.log('After Sorting' , BubbleSort(a))




