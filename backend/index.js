const moong =require('mongoose');
const ex = require('express');
const body_parser = require('body-parser')
const cor = require('cors')
const connecto_data = require("./config/db.js")
const {post_detail} = require('./modals-Schema/post.js')
const {user_detail} = require('./modals-Schema/user.js')
const dotenv = require('dotenv');
const multer  = require('multer');
const path = require('path');
const { post } = require('./routes/user.js');
// const upload = multer({ dest: 'uploads/' })

dotenv.config();
const run = ex()
run.use(ex.json());
run.use(cor());
run.use(body_parser.json());
run.use('/upload', ex.static(path.join(__dirname, 'uploads')));

connecto_data()
const port = process.env.PORT  || 8000
    run.listen(port , function(){
        // console.log("1")
        console.log("listening at",port , " !")
        })


run.use("/api" , require("./routes/user.js"))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

run.post('/upload', upload.single('image'), (req, res) => {
    console.log("inside the ")
    const { username , title , description  } = req.body;
    console.log('File uploaded:', req.file.filename);
    post_detail.create({ username , title , description , image: req.file.filename })
        .then(result => res.json(result))
        .catch(err => console.log(err));
});




run.get('/get-post' , async function(request , response){
    try{
        const exp_data = await post_detail.find()
        response.status(200).json(exp_data)
        console.log("done everything !")
        }
        catch(error) {
            response.status(500).json({
                "status" : "not connected" ,
                "context" : "entry not available !"
            })
        }
})

run.get('/get-post/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await post_detail.findById(postId);

        if (!post) {
            return res.status(404).json({
                status: 'failure',
                content: 'Post not found'
            });
        }

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({
            status: 'failure',
            content: 'corrupted',
            error: error.message
        });
    }
});

run.patch('/update-post/:id' , async function(request , response){
    try{
        const new_data = post_detail.findById(request.body.id)
        try{
            if(new_data){
                await new_data.updateOne({
                    
                    "comment" : request.body.comment
                })
                response.status(200).json({
                    "status" : "updated !"
                })
            }
        }
        catch(error){
            response.status(500).json({
                "status" : "error4" , 
                "error" : error 
            })
        }
    }
    catch(error){
        response.status(500).json({
            "status" : "error !" , 
            "error" : error
        })
    }
})





run.post('/create-user' , async function(request , response){
    try{
        console.log("15")
        await user_detail.create({
            "username" : request.body.username,
            "password" : request.body.password ,
            "email" : request.body.email
        })
        response.status(200).json({
            "status" : "success" ,
            "content" : "created"
        })
    }
    catch(er){
        response.status(500).json({
            "status" : "failure" , 
            "content" : "corrupted" ,
            "error" : er
        })
    }
})

run.get('/get-user' , async function(request , response){
    try{
        const exp_data = await user_detail.find()
        response.status(200).json(exp_data)
        console.log("done everything !")
        }
        catch(error) {
            response.status(500).json({
                "status" : "not connected" ,
                "context" : "entry not available !"
            })
        }
})