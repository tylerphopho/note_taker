const fs = require("fs");
const path = require("path");

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../db/db.json"));
    });

    app.post("/api/notes", function(req,res){
        let newNotes = req.body;
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err,data) => {
            if(err) throw err;
            let db = JSON.parse(data);
            db.push(newNotes)

            let id = 1;
            for(let i = 0; i < id.length; i++){
                db[i].id = id++
            }

            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(db),(err) => {

            })
        });
    })

}

