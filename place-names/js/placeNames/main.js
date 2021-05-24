// Put your code here
//create the array of objects
const places = [ "Nashville", "Hong Kong", "The back yard", "Earth", "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

//some text. 
console.log("All Place Names")

//iterates over every object in the array
for (let place of places) {
    console.log (place)
}

//add a space for the next part
console.log(" ")

//filtering the list to print a new list that only contains places that start with "the"

const thePlaces = places.filter(place => place.includes("The") === true)
console.log("'The' Place Names")
for (let thePlace of thePlaces) {
    console.log(thePlace)
}