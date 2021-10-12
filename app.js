// SECTION array methods
//#region
let cats = [{
  name: 'garfield',
  age: 30
}, {
  name: 'felix',
  age: 50
}, {
  name: 'patches',
  age: 3
}, {
  name: 'nermal',
  age: 4
}, {
  name: 'Mr. Snibbley',
  age: 403
}]

// loops
// For
for (let i = 0; i < cats.length; i++) {
  const cat = cats[i]
  // console.log(cat)
}

function printCat(cat) {
  // console.log(cat)
}

// forEach Iterates over entire array, passing each element to a function 
// cats.forEach(function(cat) {
//   console.log(cat)
// })
// cats.forEach(printCat)
cats.forEach(cat => {
  console.log(cat)
})



// FIND search an array for an element
// with a for loop
// let found;
// for (let i = 0; i < cats.length; i++) {
//   const cat = cats[i]
//   if (cat.name === 'patches') {
//     found = cat
//     break
//   }
// }
// with find method
// returned value , array.find(element => evaluation for truth (if true the current element is returned))
let found = cats.find(cat => cat.name === 'patches')


// FIND INDEX
// with a for loop
// let foundIndex = -1
// for (let i = 0; i < cats.length; i++) {
//   const cat = cats[i]
//   if (cat.name === 'mittens') {
//     foundIndex = i
//     break
//   }
// }
// with FindIndex
let foundIndex = cats.findIndex(cat => cat.name === 'patches')


// pre-reqs
// add to array: arr.push(elem)
// with a for loop
// let youngCats = []
// for (let i = 0; i < cats.length; i++) {
//   const cat = cats[i]
//   if (cat.age < 30) {
//     youngCats.push(cat)
//   }
// }
// with for each
// let youngCats = []
// cats.forEach(cat => {
//   if (cat.age < 30) {
//     cat.push(youngCats)
//   }
// })
// With Array Method Filter
let youngCats = cats.filter(cat => cat.age < 30)


// sort
let simple = ['b', 'c', 'd', 'a', 'g', 'r', 'c', 'j']
simple.sort()

let simpleNumbers = [1, 8, 2, 3, 4, 5, 7, 4, 2, 19, 0]
// this doesn't work , numbers get sorted by character instead of value
// simpleNumbers.sort()
simpleNumbers.sort((a, b) => {
  return b - a
})

// complex sort
let cats2 = [{
  name: 'garfield',
  age: 30
}, {
  name: 'felix',
  age: 50
}, {
  name: 'patches',
  age: 3
}, {
  name: 'nermal',
  age: 4
}, {
  name: 'Mr. Snibbley',
  age: 403
}]

//   // sort by youngest first
// cats2.sort((a, b) => {
//   return a.age - b.age
// })

// cats2.sort((a, b) => {
//   // sort by name
//   if (a.name.toLowerCase() > b.name.toLowerCase()) {
//     return 1
//   }
//   if (a.name.toLowerCase() < b.name.toLowerCase()) {
//     return -1
//   }
//   return 0
// })


// map
// iterate over an array and create a new array of each element having been manipulated
// let doubled = []
// for (let i = 0; i < simpleNumbers.length; i++) {
//   const num = simpleNumbers[i]
//   doubled.push(num * 2)
// }
// simpleNumbers.forEach(num => doubled.push(num * 2))

let doubled = simpleNumbers.map(num => num * 2)

let capsCats = cats2.map(cat => {
  return {
    name: cat.name.toUpperCase(),
    status: 'Feisty'
  }
})
//#endregion

// OBJECTS
// POJO (Plain old javascript object)
var superman = {
  name: 'Clark Kent',
  age: 29,
  powers: ['Heat Vision', 'Super Strong', 'Fly', 'BulletProof'],
  relationships: {
    wife: 'Lois Lane',
    bestBuddy: batman,
    boss: 'Perry White',
    mom: 'Martha Kent',
    dad: 'John Kent'
  }
}

var batman = {
  name: 'Bruce Wayne',
  age: 29,
  powers: ['Rich', 'Gagets']
}

let heros = [superman, batman]
// access nested properties safely in case a property doesnt exist use '?'
// Optional Chaining, Elvis Operator, Null Coalesing operator
heros.forEach(hero => {
  let buddy = hero.relationships?.bestBuddy?.name
  if (buddy) {
    console.log(buddy)
  } else {
    console.log("this hero has no friends")
  }
})

// FOR IN 
// iterates over objects
// key of the object in the iteration
let batString = ''
// iterates over the keys of the object, saving them to the 'let key' value for that iteration
for (let key in batman) {
  debugger
  // capture the value off the object
  let value = batman[key]

  // check if the value is an array
  if (Array.isArray(value)) {
    // convert array to string
    value = value.join(", ")
  }
  // add key and value to string output
  batString += `${key}: ${value}; `
}



let peopleAges = {
  joe: 32,
  meg: 34,
  mick: 13,
  justin: 8,
  jake: 50,
  zach: 45
}

// find oldest person
let oldest = ''
let oldestAge = 0
for (let name in peopleAges) {
  debugger
  let age = peopleAges[name]
  if (age > oldestAge) {
    oldest = name
    oldestAge = age
  }
}
