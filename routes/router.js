const express = require('express')
const axios = require('axios')
const router = express.Router()


router.use(express.static('public'))

const family = require('./api/familyRoutes')
router.use ('/family', family)




//Home Page
//Localhost: 3000

router.get('/', (req, res)=> {
            res.render('pages/home', {
                title: 'Movies',
                name: 'Movies'
            })
})

module.exports = router