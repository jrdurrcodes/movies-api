const express = require('express')
const router = express.Router()
const axios = require('axios')

let count 

axios.get('https://api.sampleapis.com/movies/family')
.then(res => count = res.data.length)

// Localhost:3000
router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/movies/family'

    axios. get(url).then(resp => {
        res.render('pages/family', {
            title: 'Family',
            name: 'Family',
            path: 'family',
            data: resp.data
            
        })

    })
})

module.exports = router