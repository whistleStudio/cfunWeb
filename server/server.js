const express = require("express")
const app = express()
const PORT = 8088
const staticPath = __dirname
let path = require('path')
const docApi = require("./core/api/docApi")

console.log(path.join(staticPath, 'public/docs/img'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(staticPath, '')))
app.use(express.static(path.join(staticPath, 'public/docs/img')))

app.get("/", (req, res) => {
  res.sendFile(`${staticPath}/dist/index.html`)
})
app.use('/api/doc', docApi)


app.listen(PORT, () => {
  console.log(`server works on port:${PORT}`)
})