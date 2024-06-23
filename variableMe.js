/* string = string
boolean = boolean
number = int & float
*/
// number
var userId = 334455;
// it's very obvious that userId is a number so it's not really necessary to infer type as a number
// boolean
var isLoggedIn = false;
// any isn't really good practice, any disables further type checking
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
