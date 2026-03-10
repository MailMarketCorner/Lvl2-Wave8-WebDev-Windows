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
    {name: "Melanie" , phone: 9233343254 , isFavorite: true},
    {name: "Victor" , phone: 9231234253 , isFavorite: true},
    {name: "Casey" , phone: 9261839454 , isFavorite: false},
    {name: "Jocelin" , phone: 9231234234 , isFavorite: true},
    {name: "Josue" , phone: 9231142452 , isFavorite: false},
];

console.log(contacts.length);
console.log(contacts[0]["name"]);

contacts[3].isFavorite = false;
contacts[5] = {name: "Maya" , phone: 922328239 , isFavorite: false};
console.log(contacts);
