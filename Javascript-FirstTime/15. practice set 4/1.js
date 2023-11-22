let runAgain = true;

let canDrive = (age) =>{
    return age>18? true : false;
}

while(runAgain){

    let a = prompt("what is your age?");
a = Number.parseInt(a);

    if(canDrive(a)){
    alert("yes you can drive");
}
else{
    alert("no you cannot drive");
}

   runAgain = confirm("do you want to run again?");
}