const mangoose = require("mangoose");
const { default: mongoose } = require("mongoose");

let connectToMDB = async()=>{

    try{
        await mongoose.connect("mongodb+srv://lakshmansinganamala9703:9703926768@cluster0.xkuag1p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.log("Succesfully conncted to mongooes")

    }catch(err){
        console.log("Unable to connect mangoose")

    }


   
}

connectToMDB();

