// HOMEWORK — SIMPLE CONTACT CARD
// -----------------------------------------------

// STEP 1: Create an array called contacts.
//         It should contain at least 2 objects.

// STEP 2: Each contact object needs:
//         name (string)
//         phone (string or number)
//         isFavorite (boolean)

// STEP 3: Log the total number of contacts.

// STEP 4: Log the name of the first contact.

// STEP 5: Update one contact’s isFavorite value.

// STEP 6: Add (push) a new contact object.

// STEP 7: Log the updated contacts array.


let contacts = [
    {name: "Andrew" , phone: 987654321 , isFavourite: false},
    {name: "Melanie" , phone: 387234462 , isFavourite: true},
    {name: "Jason" , phone: 2323193231 , isFavourite: false},
    {name: "Gabriela" , phone: 6453244265 , isFavourite: true},
    {name: "Ella" , phone: 753548734 , isFavourite: false},
];

console.log("Contacts saved: ", contacts.length);
console.log("1st contact name: ", contacts[0]["name"]);

contacts[2].isFavourite = true
console.log("STEP 5: ", contacts);

contacts.push({name: "Femi", phone: 930374629, isFavourite: false});
console.log(contacts);