// const square = function (x) {
//     return x * x
// }

//Simple arrow function
// const square = (x) => {
//     return x*x
// }

// const square = (x) => x * x

// console.log(square(2))

const event = {
    name:'Birthday Pary',
    guestList: ['Naoki', 'Chenxun', 'JZ'],
    printGuestList () {

        // Passing reference this to that, so this.guestList can access the that
        // reference to the event properties.
        // const that = this

        console.log('Guest List for ' + this.name)

        //Arrow function access the this property which they were created
        //If we just pass the this reference to console.log then it wont have
        //access to the original printGuestList for this.

        this.guestList.forEach((guest) => {
            console.log(guest + ' going to ' + this.name)
        })
    }
}

//Arrow functions don't bind this value
//It needs the function to put the value in there
event.printGuestList()