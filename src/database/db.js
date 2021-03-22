//Database é um objeto
const Database = require('sqlite-async');


function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

//cria o arquivo do banco de dados se ele nao exstir dirname (diretorio que este arquivo esta) + o restante do caminho com o nome 
//e ja executa ele logo apos, ou executa se ela ja estiver criado
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)

