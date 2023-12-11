const fs = require("fs");

const quote2 = "Live More, Worry Less"

  for(let i = 1; i <= 10; i++ ) {
    fs.writeFile(`./backup/text-${i}.html`, quote2,(err)=>{
        console.log(`completed writing text-${i}.html`);
});
  }