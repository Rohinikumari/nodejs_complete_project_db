const person = {
    name: `Rohini`,
    age: 27,
    greet() {
        console.log(`My name is ${this.name}`)
    }
}
const printName = ({ name }) => { console.log(name) }

const { name, age } = person
console.log(name, age)
printName(person)

const hobbies = [`Badminton`, `Cricket`]
const [hobby1, hobby2] = hobbies
console.log(hobby1, hobby2)