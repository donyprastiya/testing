function requireHTTPS(req, res, next) {
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('hosts') + req.url)
    }
    next()
}

const express = require('express')
const app = express()

app.use(requireHTTPS)
app.use(express.static('./dist/testing'))

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/testing/' })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Example app listeing at http://localhost:${port}`)
})