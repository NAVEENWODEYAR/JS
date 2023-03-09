// Concatenation
/*
let a = 'hello';
let b = "world";
let c = "JAVASCRIPT";
console.log(a +" "+ b);
console.log(a +" "+ b +" "+ "welcome to" + `${c}`);


a = 5;
b = 5;
console.log((a == b));
console.log((a === b));
*/

/*// Conditional statements
age = 20;
hasVcard = "N";

if (age >= 20 && hasVcard == "Y"){
    console.log('You can Vote');
}
else if(age >= 20 && hasVcard == "N"){ 
    console.log('Download ur Vid');
}
else {
    console.log('You can go to school');
}

// ternery operator

let salary = 75000;

let me = salary >= 7500 ?  "You can Marry": "Yo can't marry";

console.log(me);

// nulliscolis operator
let name;
//user = 'myName'; 
console.log(name ?? "NewUser");

*/


// Switch statement

/*
let input = "no";

if (input === 1 || input === "y" || input === "yes"){
    console.log("Continue");
}
else if (input === 0 || input === "n" || input === "no"){
    console.log("End")
}
*/

/*
let input;
switch (input) {
    case 1 : 
            console.log('Continue');
            break;

    case "y" :
            console.log("Continue");
            break;
    
    case "yes" :
            console.log("Continue");
            break ;

    case 0 :
            console.log("End");
            break ;
    
    case "n" :
            console.log("End");
            break ;
            
    case "no" :
        console.log("End");
        break ;

    default :
        console.log ("Check");
}
*/
let day;

switch (day) {

        case "Monday" :
            console.log ("First day");
            break;

        case "Tuesday" :
                console.log ("Second day");
                break;

        case "Wednesday" :
            console.log ("Third day");
            break;

        case "Thursday" :
            console.log ("Fourth day");
            break;

        case "Friday" :
            console.log ("Fifth day");
            break;

        case "Saturday" :
            console.log ("Sixth day");
            break;
            
        case "Sunday" :
            console.log ("Seventh day");
            break;
            
        default :
            console.log ("Select proper day");
            break;
}