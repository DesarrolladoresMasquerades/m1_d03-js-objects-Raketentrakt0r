const ironhacker = {
    firstName: 'Tio',
    age: 39,
    favoriteLanguage: 'JavaScript',
    isSatisfied: true,
    worksAt: 'Google',
    isRemote: false
}

// 1: update favoriteLanguage to 'React' 
// ... your code here
console.log("Ironhacker", ironhacker);

ironhacker.favoriteLanguage = "react";
console.log(ironhacker)

// 2: Update ironhacker's age to 29
// ... your code here
ironhacker.age = "29"

// 3: Remove the 'isRemote' property
// ... your code here

delete ironhacker.isRemote;  //delete ironhacker("isRemote");
console.log(ironhacker);

// 4: Add a new property: 'didGraduate' and set it to a valid boolean value
// ... your code here
ironhacker.didGraduate = true;
console.log(ironhacker)

// 5: list all keys of the ironhacker object
// ... your code here
for (let key in ironhacker){
    console.log(key)
}

// 6: check if ironhacker has property 'worksAt'
// ... your code here

console.log("worksAt" in ironhacker); // console.log(ironhacker["worksAt"], ironhacker.hasOwnProperty("worksAt"), !!ironhacker.worksAt)
