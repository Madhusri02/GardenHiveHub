const moong =require('mongoose');

const connecto_data = async() => {
    try{
    await moong.connect(process.env.DATABASE_URL)   
    .then(()=> console.log("Database connected !"))  
    
    }
    catch(error){
        console.log("error : ",error)
    }
}

module.exports = connecto_data;
