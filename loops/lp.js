// while loop to count the sum of even numbers in a given range
/*
let i = 1;
let sum = 0;
while ( i <= 100) {
    if ( i % 2 == 0) {
        sum = sum + i;
    }
    i++;
}
console.log(sum);
*/
// for loop
outer :for (let i = 1; i <= 100; i++){

        if ( i == 20) {
            console.log('********');
            break outer;
        }

        console.log(i);
        console.log('<br>');
        //document.write(i);
        //document.write('<br>');


}
