const fs = require("fs");

// fs.writeFile("message.txt","Hello from NodeJs",(err)=>{
//     if(err){
//         console.log("There is an error");
//     }
//     console.log("file is created successfully");
// });

fs.readFile('./message.txt',"utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
    var result = data.replace('Hello from node js', 'hello nitesh');
  
    fs.writeFile('./message.txt', result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  }); 

//   fs.readFile('./message.txt',"utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });


// fs.readFile(someFile, 'utf8', function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
//     var result = data.replace(/string to be replaced/g, 'replacement');
  
//     fs.writeFile(someFile, result, 'utf8', function (err) {
//        if (err) return console.log(err);
//     });
//   });