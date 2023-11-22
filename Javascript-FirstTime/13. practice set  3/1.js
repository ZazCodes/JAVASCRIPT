// guess the number game

let number = 22;

for( let chance = 0; chance<=100; chance++){
    let a = prompt("enter the number");

    if ( a == 22){
        console.log("you have entered the correct number");
        console.log("your score is", 100 - chance);
    }
    
    else{
        console.log("try again");
        console.log("chance remaining", 99 - chance);
        }
}

 


