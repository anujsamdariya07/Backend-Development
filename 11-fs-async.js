const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt','utf8' , (err, result) => {
    if (err) {
        console.log('ERROR: ', err)
        return;
    }
    // console.log('RESULT: ', result)
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log('ERROR: ', err)
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log('ERROR: ', err)
                return;
            }
            console.log('done with this task')
        })
    })
})
console.log('startif witht the new task')
// Messy code
