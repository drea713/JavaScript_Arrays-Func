//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

let given_arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]
console.log(given_arr)

function replaceEvens(arr) {
    //code goes here
    console.log(given_arr)

    let pos = 1
    let n = 2

    let removedItems = given_arr.splice(pos, n)
    console.log(given_arr)

    console.log(removedItems)
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]