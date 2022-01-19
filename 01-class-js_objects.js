// Class code examples

const person1 = {
    firstName: "Chee Kean",
    weigth: 231,
    heigth: 1.7}

const person2 = {
        firstName: "Marco Santo",
        weigth: 231,
        heigth: 1.7
    }

/*
let firstName = "Carlos Max"
let weigth= 231
let heigth = 1.7

let firstName = "Coroluna"
let weigth= 231
let heigth = 1.7
*/
// accessing a property with dot notation

console.log(person1.firstName,
person1.weigth)


// accessing to a property with bracket notation (indirect acces, or dinamic)
console.log(person1["weigth"])


const personKey = ["firstName","weight", "heigth"]
for(key of personKey){
   console.log(`person1 ${key}:`, person1[key])
}

// Adding a property
person1.nationality = "Italian";

console.log(person1.favFood) // gives undefined 'cause it does not exist

person1["favFood"] = "Pizza";

const newKey = `favBook` // makes a new key
person1[newKey] = "guide to galaxy" // makes a new value
 console.log("person1: ", person1);

 for (key in person1) console.log(person1[key])

 // Object.keys(person1)

 for (key of Object.keys(person1)) 

 console.log(person1[key]);

 console.log("accessing a number",person1[1]) // gives undefined

 console.log("reading index from keys", Object.keys(person1)[1])
 console.log("object length", person1.length) // gives undefined

 // even if they have the same properties, they are different objects
 const tween1 = {
     name:"Carlos",
     age:24
 }

 const tween2 = {
    name:"Carol",
    age:24
}
console.log(tween1 === tween2) // gives false
console.log(
    tween1 === tween2,       // gives false
    "Carlos" === "Carlos"   //gives true
)
