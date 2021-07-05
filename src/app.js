import  express  from 'express';
import morgan from 'morgan';
import info from '../package.json'

const app = express()
app.use(morgan('dev'))

app.set('info',info)

app.get('/',(req,res)=>{
    res.json({
        name: info.name,
        author: info.author,
        description : info.description,
        version: info.version
    })
})

export default app