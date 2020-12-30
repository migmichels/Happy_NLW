const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // inserir dados na tabela
    // await saveOrphanage(db, {
    //     lat: '-28.2181585',
    //     lng: '-48.7051225',
    //     name: 'Local de terror',
    //     about: 'Metemos o louco a todo custo',
    //     whatsapp: '(48) 99866-8194',
    //     images: [
    //         'https://images.unsplash.com/photo-1604359027655-a448ee29c6f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080', 
            
    //         'https://images.unsplash.com/photo-1603138461809-50ff754bc5ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080' 
    //     ].toString(),
    //     instructions: 'Venha pelado',
    //     opening_hours: 'Horário de visitas ás 0hrs',
    //     open_on_weekends: '1'
    // })

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // deletar dado da tabela
    // await db.run("DELETE FROM orphanage;")


})
