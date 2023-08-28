const fs = require("fs");
const worldList = document.getElementById("worlds")
fs.readdirSync("../saves/").forEach(e=>{
    worldList.innerText += e
})

