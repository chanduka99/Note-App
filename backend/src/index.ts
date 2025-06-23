import bodyParser from "body-parser"
import { Request, Response } from "express"
import router from "./routes/router"

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.use(bodyParser.json());
app.use('/note-app', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})