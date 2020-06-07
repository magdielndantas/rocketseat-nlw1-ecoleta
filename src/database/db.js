const sqlite3 = require("sqlite3").verbose();

//db object
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

/* db.serialize(() => {
    
    //create Table
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `);

    //insert data
    const query = `
        INSERT INTO places(
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES(?,?,?,?,?,?,?);`
    
    const values = [
        "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "Papersider",
        "Guilheme Gemballa, Jardim América",
        "Nº 240",
        "Santa Catarina",
        "Rio do Sul",
        "Papéis e Papelão"
    ];

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("Cadastro feito com sucesso.")
        console.log(this)     
    }

    db.run(query, values, afterInsertData);

    //consult data
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }

        console.log("Registros encontrados:")
        console.log(rows)
    });

    //delete data
    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
        if(err){
            return console.log(err)
        }

        console.log("Registro deletado com sucesso");
    });
}); */