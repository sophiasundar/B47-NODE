const fs = require("fs");

const quotes = [
    "Be yourself; everyone else is already taken.-Oscar Wilde",
    "Be the change that you wish to see in the world.-Mahatma Gandhi",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.-Mahatma Gandhi",
    "We accept the love we think we deserve.-Stephen Chbosky",
    "Without music, life would be a mistake.-Friedrich Nietzsche",
    "We are all in the gutter, but some of us are looking at the stars.-Oscar Wilde",
    "I have not failed. I've just found 10,000 ways that won't work.-Thomas A. Edison",
    "It is never too late to be what you might have been.-George Eliot",
    "Everything you can imagine is real.-Pablo Picasso",
    "Life isn't about finding yourself. Life is about creating yourself.-George Bernard Shaw"
]

const [, , noOfFiles] = process.argv;
console.log(noOfFiles);

for (let i = 0; i < noOfFiles; i++){
    

    const file = `./activity_3/note${i+1}.txt`;
     const text = quotes[i];

    fs.writeFile(file,text,(err)=>{
        if(err){
        
            console.log(`Error writing to ${file}:`, err);
        } else{
        console.log(`Completed Writing-${file} `);
        }
    })

   }