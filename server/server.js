const express = require("express")
const app = express()
const PORT = 8087
const staticPath = __dirname
let path = require('path')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(staticPath, '')))

app.get("/", (req, res) => {
  res.sendFile(`${staticPath}/dist/index.html`)
})



app.listen(PORT, () => {
  console.log(`server works on port:${PORT}`)
})