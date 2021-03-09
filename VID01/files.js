// needed module to interact with the file system:
const fs = require('fs');

//reading file:
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err)
        console.log(err);
    //console.log(data);
    else
        console.log(data.toString());
});

console.log('EOF');

// writing files:
fs.writeFile('./docs/blog2.txt', 'Wa 3alaykoum hello', () => {
    console.log('file created and written in.')
});

// directories:
const pathDir = './assets';
if (!fs.existsSync(pathDir))
{
    fs.mkdir(pathDir, err => {
        if (err)
            console.log(err);
        else
            console.log(pathDir + ' created');
    });
}
else
{
    fs.rmdir(pathDir, err => {
        if (err)
            console.log(err);
        else
            console.log(pathDir + ' deleted');
    })
}

// deleting files:
if (fs.existsSync('./docs/deleteme.txt'))
{
    fs.unlink('./docs/deleteme.txt', err => {
        if (err)
            console.log(err);
        else
            console.log('./docs/deleteme.txt deleted');
    })
}