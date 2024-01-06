import { sql } from './db.js'

sql `
    DROP TABLE videos;  
`.then(() => {
    console.log('Exclusão concluída!')
})