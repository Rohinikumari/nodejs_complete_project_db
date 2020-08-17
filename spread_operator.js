const person = {
    name:`Rohini`,
    age: 27,
    greet(){
        console.log(`My name is ${this.name}`)
    }
}

const copiedPerson = {...person}
console.log(copiedPerson)

const hobbies = [`Badminton`,`Cricket`]

const copiedArray = [...hobbies]
console.log(copiedArray)