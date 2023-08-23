const User = require("../models/user.model");

//create and save a new user
exports.create=(req,res)=>{
    //validate request
    if (!req.body){
        req.status(400).send({
            message:"content cannot be empty"
        });
    }
//create a user
const{id,email,phone_number}=req.body;
const user=new User(id,email,phone_number);

//save user in db
User.create(user,(err,data)=>{
    if (err)
    res.status(500).send({
        message:
        err.message||"Some error occurred while creating user"
    });
    else res.send(data);
});
};

//retrieve all users from db
exports.findAll=(req,res)=>{
    User.getAll((err,data)=>{
    if (err)
    res.status(500).send({
        message:
        err.message||"Some error occurred while creating user"
    });
    else res.send(data);
});
};


//retrieve one user by id
exports.findOne=(req,res)=>{
    User.findById(Number(req.params.id),(err,data)=>{
    if (err){
        if(err.kind==="not_found"){
    res.status(404).send({
        message:`not found user with id ${req.params.id}.`
    });
}else{ 
    res.status(500).send({
        message:"error retrieving user with id "+req.params.id
    });
}
    }else res.send(data);
});
}

//update a user identified by the id in the request
exports.update=(req,res)=>{
    //Validate request
    if(!req.body){
        res.status(500).send({
        message:"content can't be empty"
    });
}
const { id, email, phone_number } = req.body;
User.updateById(
    Number(req.params.id),
    new User(id,email,phone_number),(err,data)=>{
    if (err){
        if(err.kind==="not_found"){
    res.status(404).send({
        message:`not found user with id ${req.params.id}.`
    });
}else{ 
    res.status(500).send({
        message:"error updating user with id "+req.params.id
    });
}
    }else res.send(data);
}
);
};

//delete a user with specific id
exports.delete = (req, res) => {
  User.delete(
    Number(req.params.id),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `not found user with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message: "could not delete user with id " + req.params.id,
          });
        }
      } else res.send({message:'user deleted successfully'});
    }
  );
};