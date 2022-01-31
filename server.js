const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors())
app.use(express.json())

app.post('/api/register', (req, res)=>{
    console.log(req.body)
    res.json({status: 'OKOKOK'})
})
app.get('/api/register', (req, res)=>{
    res.send('User new form')
})


app.listen(1000, ()=>{
    console.log('server started on 1000')
})


/*app.get("/api/data", (req,res)=>{
    const customers = [
        {id: 1, firstname: 'Alek', lastName: 'Klobuk'},
        {id: 1, firstname: 'Kocz', lastName: 'Pocz'},
        {id: 1, firstname: 'Ktil', lastName: 'Fluk'},
    ];
    res.json(customers);
});
*/

