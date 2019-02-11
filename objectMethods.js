let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        //this refers to the object on which the method is called
        // console.log(this) outputs the object with all its properties
        let seatLeft = this.guestCapacity - this.guestCount
        return partySize <= seatLeft
    },
    seatParty: function (partySize) { //methods are properties of obj whose value is function
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))

restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))