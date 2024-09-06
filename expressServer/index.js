const express = require("express")

const port = 8082

let app = express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
	return res.render('index')
})

app.get('/home',(req,res)=>{
	return res.render('home')
})

app.listen(port,(err)=>{
	if (err) {
		console.log("server is not started ")
		return false
	}
	console.log("server is started on port :" + port)	
})