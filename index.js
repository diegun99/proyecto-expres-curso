const  express = require('express');
const app = express();

app.use(express.json());

app.all('/user', (req,res, next)=>{
    console.log('por aqui paso');
    next();
})


app.get('/user',(req,res) => {
    res.json({
        username : 'Cameron',
        lastname : 'Howe'
    });
});

app.post('/user/:id',(req,res)=>{
    console.log(req.body);// recibe los datos que envia el cliente
    console.log(req.params);
    res.send('post request recibido');//responde algo
});

app.put('/user/:id',(req,res)=>{
    console.log(req.body);
    res.send(`User ${req.params.id} ha sido actualizado`);
});

app.delete('/user/:userId',(req,res)=>{
    res.send(`User ${req.params.userId} ha sido eliminado`);
});


app.listen(4000, () => {
    console.log("server on port 3000");
})





