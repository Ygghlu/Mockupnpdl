import mysql from 'mysql2'



export default defineEventHandler(() => {
    const db = mysql.createConnection({
        host: '192.168.0.70',
        user: 'demo',
        password: 'demo1234',
        database: 'npdl'
    });

    db.query("SELECT * FROM `SaleOrder` Limit 0,10", (err, rows) => {
       // console.log(rows)
        const table = JSON.stringify(rows)
        console.log(table)
        return {
            table
        }
    });


})