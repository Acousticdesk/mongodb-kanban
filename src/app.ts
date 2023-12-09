import express, { Request, Response } from 'express'
import fs from 'fs'
import 'dotenv/config'

const app = express()
const port = 3000

app.get('/api/version', (req: Request, res: Response) => {
  const { version } = JSON.parse(fs.readFileSync('package.json').toString())
  
  res.send(version)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})