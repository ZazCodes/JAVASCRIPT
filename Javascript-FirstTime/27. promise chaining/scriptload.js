const loadscript = (src) => {
    return new Promise((resolve , reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);

        script.onload = (script) => {
            resolve("script has been loaded bro!");
        }

        script.onerror = () => {
            reject(0);
        };
    });
};

let p1 = loadscript("https://cdnjs.js");

p1.then((value) => {
    console.log(value)

    return loadscript("https://cdnjs.js");
}).then((value) => {
    console.log("secong sript ready");
}).catch((error) => {
    console.log("we are sorry , but we are having problems loading the script")
});