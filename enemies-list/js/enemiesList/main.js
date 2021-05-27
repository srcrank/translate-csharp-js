// Put your code here

console.log("My Enemies List!")
console.log(" ")

//function which retrieves all enemies
const GetEnemies = () => {
    const enemies = [
        {
            FirstName: "Joshua",
            LastName: "Flowers",
            Offenses: [
                "Being a jerk to me in elementary school",
                "Not being nice to me in elementary school"
            ],
            IsReallyHated: true
        },
         {
            FirstName: "Darth",
            LastName: "Vader",
            Offenses: [
                "Cut off Luke's hand",
                "Murdered all those kids",
                "Unkind management practices"
            ],
            IsReallyHated: false
        },
        {
            FirstName: "Betty",
            LastName: "Rudelady",
            Offenses: [
                "Phone calls in the theater",
                "Phone calls on the bus",
                "Phone calls in line at the grocery store",
                "Poor conversationalist"
            ],
            IsReallyHated: true
        },
       {
            FirstName: "Leon",
            LastName: "Peck",
            Offenses: [
                "Keeps giving me a hotplate"
            ],
            IsReallyHated: false
       }
    ]

    return enemies;
}

//define enemies
const enemies = GetEnemies();

for (enemy of enemies) {
    if (enemy.IsReallyHated) {
        console.log(`I really don't like ${enemy.FirstName} ${enemy.LastName}`)
    } else {
        console.log(`I feel meh about ${enemy.FirstName} ${enemy.LastName}`)
    }
}