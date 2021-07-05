import  express  from 'express';
import morgan from 'morgan';
import cfdiRoutes from './routes/cfdi.routes'
import info from '../package.json'

const app = express()
app.use(morgan('dev'))

app.set('info',info)


//routes

//home
app.get('/',(req,res)=>{
    res.json({
        name: info.name,
        author: info.author,
        description : info.description,
        version: info.version
    })
})

//CFDI ROUTES
app.use('/api',cfdiRoutes)
//USER ROUTES

//AUTH ROUTES

export default app