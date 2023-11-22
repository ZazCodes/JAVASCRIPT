function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = function() {
        console.log("loaded script with src " + src);
        callback(null, src);
    };
    script.onerror = function() {
        console.log("error loading script with src " + src);
        callback(new Error("src got some error"));
    };

    document.body.appendChild(script);
}

function hello(error, src) {
    console.log("hello morning " + src);
}

function night(error, src) {
    console.log("hello night " + src);
}

loadScript("https://example.com/some-script.js", hello); // Pass `hello` as a callback
loadScript("https://example.com/another-script.js", night); // Pass `night` as a callback
