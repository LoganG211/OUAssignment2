const fs = require('fs');
const site = fs.readFileSync('./index.html');

console.log("LG");

fs.readFile('./favs.json', 'utf-8', (err, data) => {
    if(err){
        console.log("Error", err);
    } else {
        console.log("favs.json parsed!");
        var obj = JSON.parse(data);
        console.log(obj[0].id);
        //document.write(obj[0].id);
    }
});

const elementID = document.getElementById('button');
elementID.addEventListener("click", () => {
    console.log("Test");
    test();
});

//app.listen(3000, () => console.log("Listening to port 3000..."));

/*function displayIDs(){
    var print = document.getElementById("idDisplay");
    print.innerHTML = "The first ID is: " + obj[0].id;
    //document.write(obj[0].id);
};*/

function test() {
    document.getElementById("demo").innerHTML = "Hello World";
    //document.write("Hello World");
};
