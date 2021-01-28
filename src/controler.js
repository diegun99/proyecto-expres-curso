const controller ={};

controller.index =(req,res)=>{
   const data = {

    name : "jhon smith",
    age: 20,
    city : "london"
   } ;

   res.json(data);


}

module.export = controller;

