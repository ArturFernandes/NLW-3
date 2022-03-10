const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    //insert data in table
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6455874",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "1274182741",
        images: [
            "https://images.unsplash.com/photo-1576024267168-6be5e4eabcf4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1601037948602-28fcba00f676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência pra dar",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "0"
    })

    // check for table's data 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // check only 1 orphanage by it's id 
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    //console.log(orphanage)

    // remove table's data 
    //await db.run("DELETE FROM orphanages" )
})