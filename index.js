const  express = require('express');
const app = express();


app.get('/',(req,res) => {
    res.send('Peticion get recibido');
});

app.post('/about',(req,res)=>{
    res.send('post request recibido');
});

app.put('/about',(req,res)=>{
    res.send('update request recibido');
});

app.delete('/about',(req,res)=>{
    res.send('<h1>Delete request<h1>');
});


app.listen(3000, () => {
    console.log("server on port 3000");
})





