// Javascript Array 

let a = [1, 'one', 2, 'two', 3, 'three',4,'four'];   // array creating
// console.log(typeof a);
// console.log(a);

// a.push(5,'five'); // adding elements at the end
// console.log(a);

// console.log(a.length); // checking the size

// a.pop();  // remove the elements at the end
// console.log(a);

// a.unshift(0,'zero'); // adding element at the begining
// console.log(a);

a.unshift();    // removing elements at the begining
console.log(a);

a.splice(2,2);     // removing from a particular position
console.log(a);

//  a = [];            // empty an array
//  a.length = 0;
//  console.log(a);

/*
 let p = a.indexOf('three');                   //check the position of elements
 console.log(p);

  let b;
 console.log(Array.isArray(b ));     // to check weather array or not


 let o = "Welcome to Javascript";       // string split into array
 let ao = o.split(' ');
 console.log(ao);

 let aoo = o.split('o');
 console.log(aoo);

let aa = [1,2,3,4,5,6,7,8,9];
console.log(typeof aa);
console.log(aa);

 let ja = aa.join('-');         // array into string
 console.log(typeof ja);
 console.log(ja);


 // array joining
 let aq = [1];
 let az = [2];
 let ax = [3];

 let av = aq.concat(az,ax);
console.log(av);

// multi dimensional array

let arr = [[1,'one'],
[2,'two'],
[3,'three'],
[4,'four']];
console.log(typeof arr);
console.log(arr);
console.log(arr[1][1]);
*/
// for-of loop

let ap = ['A','B','C','D'];

for (elements of ap){
    console.log(elements);
    console.log(`Elements of the array are [i]`);
}

for ( let i = 0; i <= ap.length - 1; i++){
    console.log(`Elements ${i} is ${ap[i]}`);

}


// forEach function
ap.forEach(myfunction);

function myfunction(value){
        console.log(value);
}

