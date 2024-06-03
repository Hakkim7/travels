// const app = express();

// app.post('/login',async(res,req)=>{
//     try{
//         const{username,pasword};
//         const user  = await user.findOne({ where: { username } });
//         if(!user){
//             return res.status(401).json({message:"invlaid username or password"})
//         }

//         const isvalidpassword = await bcrypt.compare(pasword , user.password)
//         if(!isvalidpassword){
//             return res.status(401).json({message:"invlaid username or password"})
        
//         }
//         const token = jwt.sign({id:user.id,username })  
//     }
// })