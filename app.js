const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({extended:true}))

const users = []

app.get('/', (req,res)=> {
    
    res.render("index",{users})
})

app.get('/add-user', (req,res)=> {
    res.render("addUser")
    
})


app.post('/data', (req,res)=> {

    console.log(req.body)

    let {name , email, img} = req.body;
    let user_info = {
        name : name,
        email: email,
        img: img
    }

    users.push(user_info)
    res.redirect('/')
})


app.post('/delete', (req,res)=> {
    let {userId} = req.body;
    users.splice(userId, 1);
    res.redirect('/')
    
})

app.post('/edit', (req,res)=> {
    let {userId} = req.body;
    let user = users[userId];
    res.render('edit', {user})
    
    
})


app.post('/edit-data', (req,res)=> {
    let {userId, name, email, img} = req.body;
    users.splice(userId, 1, {name: name, email: email, img: img});
    res.redirect('/')
    
})




app.listen(8000,()=> {
    console.log("server started successfully...")
})