// Put your code here

console.log("Do you believe in magic?")
console.log("-------------")

const magicSpells = [
    {
        name: "Turn enemy into a newt",
        IsEvil: true,
        EnergyReqired: 5.1
    },
    {
        name: "Conjure some gold for a local charity",
        IsEvil: false,
        EnergyReqired: 2.99
    },
    {
        name: "Give a deaf person the ability to hear",
        IsEvil: false,
        EnergyReqired: 12.2
    },
    {
        name: "Make yourself emperor of the universe",
        IsEvil: true,
        EnergyReqired: 100.0
    },
    {
        name: "Convince your relatives your political views are correct",
        IsEvil: false,
        EnergyReqired: 8888.8
    }
]

const getSpells = () => {
    for (let spell of magicSpells){
        if(spell.IsEvil){
            console.log(`Evil Book: ${spell.name}`)
        } else {
            console.log(`Good Book: ${spell.name}`)
        }
    }
}

console.log("One Way:"); getSpells();

const getGoodBooks = () => {

    for (let spell of magicSpells) {
        if (spell.IsEvil === false) {

            console.log(`${spell.name}`)
        }

    };
}

const getEvilBooks = () => {
    for (let spell of magicSpells) {
        if (spell.IsEvil === true) {
            console.log(`${spell.name}`)
        }
    }
}

console.log("-------")
console.log("Probably a Better Way --")
console.log("Good Book:"); getGoodBooks();
console.log("Bad Book:"); getEvilBooks();