const express = require('express')
const { INTEGER } = require('sequelize/types')
// const { NUMBER, INTEGER } = require('sequelize/types')
const {sequelize, User} = require('./models')
const user = require('./models/user')

const app = express()
app.use(express.json())

app.post('/Users', async(req, res) => {
    const {name, email, role} = req.body
    
    try{
        const user = await User.create({name, email, role}) 
        return res.json(user)
    } catch(err) {
        console.log(err)
        return res.status(500).json(err)
    }
})



// app.delete('/Users', async(req, res) => {
//     const userD = await User.destroy({
//         // truncate: true
//         where: {
//             id: req.params.id
//         }
//       })
//         .then(function (deletedRecord){
//             if(deletedRecord == 1){
//                 res.status(200).json({message: 'Deleted success'})
//             }else{
//                 res.status(404).json({message: 'Delete unsuccessfull'})
//             }
//         })
//         .catch(function (err){
//             console.log(err)
//             return res.json(userD)
//         })
// })

app.listen({ port: 5000 }, async() => {
    console.log('Server up on the port 5000')
    await sequelize.sync({force: true})
    console.log('Database synced')
})

