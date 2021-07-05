import  express  from 'express';
import morgan from 'morgan';
import info from '../package.json'
import cfdiRoutes from './routes/cfdi.routes'
import authRoutes from './routes/auth.routes'

const app = express()

app.use(express.json())
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
app.use('/api/auth',authRoutes)



export default app