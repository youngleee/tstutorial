/* string = string
boolean = boolean
number = int & float
*/


// number
let userId: number = 334455;
// it's very obvious that userId is a number so it's not really necessary to infer type as a number

// boolean

let isLoggedIn: boolean = false;

// any isn't really good practice, any disables further type checking

let hero;

function getHero(){
    return "thor";
}

hero = getHero();