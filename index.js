const express = require('express');
const router = require('./router/router');
const app = express();
const cors = require('cors')
app.use(express.urlencoded({ extended : true}))

app.use(cors())
app.use(router)

app.listen(1201, () => {
    console.log("welcom to the 1201 port... ")
})