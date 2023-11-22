let name = [1,2,3,4,5];

// for each
name.forEach((element) => {
    console.log(element * element)
});

// for in
for (const i in name) {
   console.log(name[i])
}

// for of loop
for (const i of name) {
    console.log(i);
}

