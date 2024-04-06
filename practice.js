console.log("hello world");
/*
let favorite_fruits: string[] = ["banana", "apple", "mango"];

if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}

if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
} else {
    console.log("You don't seem to like oranges as much.");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
} else {
    console.log("You don't seem to like strawberries as much.");
}
*/
var guestList1 = [
    "Muhammad Farooq",
    "Azam Khan",
    "Hamza Javed"
];
/*
// Function to print invitation message for each person
function printInvitations1(guestList1: string[]): void {
  guestList.forEach(person => {
      console.log(`Dear ${person},\n\nYou are  invited for dinner at my place. It would be an honor to have you join us.\n\nBest regards,\n[Rab Nawaz]`);
      console.log("-----------------------------------");
  });
}

// Print invitations for each person
printInvitations1(guestList1);


// initial invitation list

//original guest list
let guestList: string[] = [
    "Muhammad Kamran ",
    "Eijaz Ahmed",
    "Hassan Nawaz"
];

// Function to print invitation message for each person
function printInvitations(guestList: string[]): void {
    guestList.forEach(person => {
        console.log(`Dear ${person},\n\nYou are  invited to dinner at my home. It would be an honor to have you join us. \n\nPlease let me know if you can attend.\n\nBest regards,\n[Rab Nawaz]`);
        console.log("-----------------------------------");
    });
}

// Printing initial invitations
console.log("Initial Invitations:");
console.log("=====================");
printInvitations(guestList);    // invoking function

// Changing guest list as one guest can't make it
const unableToAttend = "Eijaz Ahmed";
const newGuest = "Saleem Raza";

guestList = guestList.filter(person => person !== unableToAttend);
guestList.push(newGuest);

// Printing updated invitations
console.log("\nUpdated Invitations:");
console.log("=====================");
printInvitations(guestList);

*/
var favorite_fruits = ["banana", "apple", "mango"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
else {
    console.log("You don't seem to like oranges as much.");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
else {
    console.log("You don't seem to like strawberries as much.");
}
