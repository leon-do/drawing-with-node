// Require library
var gd = require('node-gd');
var fs = require('fs')
var postNumber;

////////////////////////////////////////////////////////


fs.readFile('number.txt', 'utf8', function(error,data){
    postNumber = parseInt(data)
    postNumber++;

    //update number
    fs.writeFile('number.txt', postNumber, 'utf8')

    // Create blank new image in memory
    var img = gd.createSync(1080, 1080);

    // Set background color
    var randomRGB = Math.floor(Math.random()*100)
    img.colorAllocate(randomRGB, randomRGB, randomRGB);

    // Set text color
    var txtColor = img.colorAllocate(255, 255, 255);

    // Set full path to font file
    var fontPath = './Economica-Regular.ttf';

    // Render string in image   size, angle, left, top
    img.stringFT(txtColor, fontPath,150, 0, 100, 560, String(postNumber));

    // Write image buffer to disk
    img.savePng('output.jpg', 1, function(err) {
        if(err) {
          throw err;
        } else{
            console.log("image generated")
        }
    });

}) //readfile
