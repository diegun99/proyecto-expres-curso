const express = require('express');

const app = express();

//settings
app.set('port',process.env.PORT || 3000);


//middlewares

app.use(express.json());

app.use('/', (req,res)=> {
    res.send('hello world');
});

app.listen(app.get('port'),()=>{
    console.log("start server on port "+ app.get('port') );

});