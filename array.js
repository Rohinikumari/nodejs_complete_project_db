const name = `Rohini`
let age = 27
const hasHobbies = true 

age = 28

const summerizeUser = (userName, userAge, userhasHobbies) => {
return (
    `Name is ${userName}, age is ${userAge} and the user has a hobbies : ${userhasHobbies}`
)
}

const add = (a,b) => a+b

const add1 = a => a+1
console.log(add1(1))
console.log(add(1,2))
console.log(summerizeUser(name, age, hasHobbies))
