const csv = require('csv-parser');
const fs = require('fs');

const data = [];

fs.createReadStream('test.csv')
    .pipe(csv())
    .on('data', (row) => {
        data.push(row);
    })
    .on('end', () => {
        fs.writeFile ("test.json", JSON.stringify(data), function(err) {
            if (err) throw err;
            console.log('complete');
            }
        );
        console.log('CSV file successfully processed');
    });