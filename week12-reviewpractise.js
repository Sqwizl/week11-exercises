function shouldBringSnacks(isLongTrip, childIsHungry, justAteLunch) {
    if ((isLongTrip && childIsHungry) && !justAteLunch) { // Creating the conditions for the parameters to be either true or false.
        return ("True"); // If all conditions are true, return a "True" result.
    } else {
        return ("False"); // If any of the conditions are false, return a "False" result.
    }
}

console.log(shouldBringSnacks(true, true, false));// true: short trip, didnt just eat.
console.log(shouldBringSnacks(false, true, false));// true: child is hungry, didnt just eat.
console.log(shouldBringSnacks(true, true, true));// false: just ate lunch, no snacks needed.
console.log(shouldBringSnacks(false, false, false));// false: short trip, not hungry.

// Firstly, writing a fucntion that takes in three boolean parameters.
// The function dhould return true if its a long trip, and the child id hunrgy, and that the child didn't just eat lunch.
// If any of those conditions are false, the function should return false.
// The if condition first checks if its a long trip trip OR if the child is hungry.
// Then it checks if the child didnt just eat lunch. This is represented by the NOT operator (!).
// If all those conditions are true, the function returns "Bring snacks!".
// If any of those conditions are false, the function returns "Don't bring snacks.".


function needsExtraBlanket(childFeelsCold, busHasAC) {
    if (childFeelsCold || busHasAC) { //Parameter checks if either condition is true
        return ("True"); // If either condition is true, return a "True" result.
    } else {
        return ("False"); // If conditions are false, return a "False" result.
    }
}
 console.log(needsExtraBlanket(true, true)); // True: Child feels cold and bus has AC.
 console.log(needsExtraBlanket(true, false)); // True: Child feels cold and bus has AC.
 console.log(needsExtraBlanket(false, true)); // True: Child feels cold and bus has AC.
 console.log(needsExtraBlanket(false, false)); // false: Child does not feel cold and bus does not have AC.

 // Firstlt, writing a function that takes in two boolean poaramaters.
  // The if condition checks if either condition is true using the OR operator (||).
  // This makes sure the function returns true if either the child feels cold or the bus has AC.
 // If either condition is true, the function returns "True"
 // If both conditions are false, the function returns "False".

 function canBringToy (toyType, busRoute) {
    const bannedToys = ["noisy", "messy", "sharp"]; // List of Banned Toy Types.
    const bannedBusRoutes = ["express", "shuttle"]; // List of Banned Bus Routes.
    if (bannedToys.includes(toyType) || bannedBusRoutes.includes(busRoute)) {
        return ("False"); // If either condition is true, then "False" will be returned.
    } else {
        return ("True"); // If both conditions are false, then "True" will be returned.
    }
}
console.log(canBringToy("quiet", "local"));     // True: Allowed toy, allowed route
console.log(canBringToy("noisy", "local"));     // False: Banned toy
console.log(canBringToy("book", "express"));    // False: Route doesn’t allow toys
console.log(canBringToy("messy", "shuttle"));   // False: Banned toy, no-toy route
console.log(canBringToy("puzzle", "regional")); // True: Allowed toy, allowed route)
console.log(canBringToy("sharp", "intercity")); // False: Banned toy)

// Firstly, writing a function that takes in two parameters: toyType and busRoute.
// I created two arrays: bannedToys and bannedBusRoutes.
// This allows the function to work more efficeitnly, as the fucntion can check if the parameters are within the banned arrays.
// using the .includes() method helps check if the parameters exist within those arrays.
// If either parameter is found in the banned arrays, the function returns "False", that you will not be able to bring toys.
// If both parameters are not found in the banned arrays, the function returns "True", that you will be allowed to bring toys.