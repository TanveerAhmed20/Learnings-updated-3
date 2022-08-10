const luft = {
    airline: 'luft',
    iatacode : 'LM',
    bookings :[],
    book(flightNum,name) {
        console.log(`${name} booked a seat on ${this.airline}
        flight ${this.iatacode} ${flightNum}`);
    }
}

luft.book(239,'jonas');

const eurowings = {
airline : 'Eurowings',
iatacode : 'EW',
bookings: []
};

const booknew = luft.book; // this keyword will be undefined for this function call

// book(129,'tanveer');// this wont work ***

booknew.call(luft,129,'tanveer');

// using call keyword to reference this keyword of eurowings 

booknew.call(eurowings,111,'rishab');


// BIND METHOD 

const bookBind = booknew.bind(luft);

bookBind(1234,'bishwaraj');




