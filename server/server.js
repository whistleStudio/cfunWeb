const express = require("express")
const app = express()
const PORT = 8087
const staticPath = __dirname
let path = require('path')
require("./core/db/connect")
const docApi = require("./core/api/docApi")
const queApi = require("./core/api/queApi")
const creativeApi = require("./core/api/creativeApi")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(staticPath, '')))
// app.use(express.static(path.join(staticPath, 'public/docs/img')))

app.get("/", (req, res) => {
  res.sendFile(`${staticPath}/dist/index.html`)
})
app.use('/api/doc', docApi)
app.use('/api/que', queApi)
app.use('/api/creative', creativeApi)


app.listen(PORT, () => {
  console.log(`server works on port:${PORT}`)
})