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
                if(err) throw err;
                return res.status(200).send("Note Added!");
            });
        });
    });

    app.delete("/api/notes/:id", (req,res) => {
        let currentNote = req.params.id;
        fs.readFile("../db/db.json", "utf-8", (err,data) => {
            if (err){
                console.log(err);
            }
            let oldDB = JSON.parse(data);
            let updateNotes = oldDB.filter(x => {
                return x.id != currentNote;
            });
            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(updateNotes),(err) => {
                if(err) throw err;
                return res.status(200).send("Note Deleted!");
            });
        });
    });
};

