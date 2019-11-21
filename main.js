var easyDB = require('easydb-io');

const db = easyDB({
    database: 'ccb32cb7-b6f4-4d47-95e6-093191095550',
    token: 'fae6cfb1-9aeb-419a-bd68-6b3a4028caf4'
})

// Generate a random number
const rand = Math.random() * 99;

// Use a callback to store value
db.Put('key', {val: rand.toFixed(2)}, (value, err) => {
    console.log(`Debug: db.Put(), value: ${rand}, error: ${err}`)
})

// Retrieve value
db.Get('key', (value, err) => {
    const data = JSON.stringify(value)
    console.log(`Debug: db.Get(), value: ${data}, error: ${err}`)
})

// Listing value(s)
db.List((value, err) => {
    const data = JSON.stringify(value);
    console.log(`Debug: db.List(), value: ${data}, error: ${err}`)
})

// Deleting value
// db.Delete('key', (value, err) => {
//     const msg = JSON.stringify(value)
//     console.log(`Debug: db.Delete(), value: ${msg}, error: ${err}`)
// })