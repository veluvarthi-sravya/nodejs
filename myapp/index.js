const express = require('express')
const {open} = require('sqlite3')
const path = require('path')
const app = express()
const dbpath = path.join(__dirname, 'goodreads.db')
let db = null
const instalizerDBAndServer = async () => {
  try {
    db = await open({
      filename: dbpath,
      driver: sqlite3.Database,
    })
    app.listen(3000, () => {
      console.log('server running at http://localhost:3000/')
    })
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1)
  }
}
instalizerDBAndServer()
