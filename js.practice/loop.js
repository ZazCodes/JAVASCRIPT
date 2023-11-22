//? Write a JavaScript program that uses a for loop to print the even numbers from 1 to 10.

for ( let i = 0; i <=10; i++){
    if ( i % 2){
        continue;
    }else{
        console.log(i);
    }
}

// ! OR

for ( let i = 0; i <=10; i++){
    if ( i % 2 === 0){
        console.log(i);
    }
}