import express from 'express'
import { resolve } from 'path'

import routes from './routes'

const app = express()

app.set('view engine', 'pug')
app.set('views', resolve(__dirname, 'views'))
app.use(express.static(resolve(__dirname, '..', 'public')))
app.use(routes)

app.listen(process.env.PORT)
