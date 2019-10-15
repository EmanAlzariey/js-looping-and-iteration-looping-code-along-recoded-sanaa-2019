// Code your solutions in this file


// const name = ["Ada", "Brendan", "Ali"];
// const event = ["birthday"];

function writeCards(name , event) {

      let thankYou =[] //Collect the messages in an array

  for (let i = 0; i < name.length; i++) {
    // console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift! `);  // dont have to display
    thankYou.push(`Thank you, ${name[i]}, for the wonderful ${event} gift! `); // push to the new array that is been display
  }


  return thankYou; //and and returning the new array.
}
