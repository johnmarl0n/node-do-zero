import { sql } from './db.js'

sql `
    ALTER TABLE video DROP COLUMN title;
`.then(() => {
    console.log('Alteração concluída!')
})