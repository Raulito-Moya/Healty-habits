const express = require('express')
require('dotenv').config();
const cors = require('cors');
const path = require('path')

const { dbConnection } = require('./config/config.js');

const app = express()

app.use(
  cors({
    origin: "*"
  })
)
app.use( express.json() )

//CORS
app.use(cors()) //aqui ya configuro el CORDS mas facil



app.use(express.static('public') )

dbConnection()


const authRouters = require('./routes/auth.js')
const usersRouters = require('./routes/users.js')
const articlesRouters = require('./routes/articles.js');
const LikesRouters = require('./routes/likes.js')
const CommentsRouter = require('./routes/comments.js')


/*app.get( '*' , (req,res) => {
  
    res.sendFile(path.join(__dirname, 'Frontend','public','index.html'))
  } )*/

app.use('/api/auth',authRouters )
app.use('/api/users',usersRouters )
app.use('/api/articles',articlesRouters )
app.use('/api/likes',LikesRouters )
app.use('/api/comments',CommentsRouter )

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});