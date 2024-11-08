const express = require('express')
const router = express.Router()

const employeeController = require('../controller/employeeController')
const upload = require('../middleware/upload')
const auth = require('../middleware/auth')

router.get('/register',  employeeController.loadRegister)
router.post('/register', upload.single('avatar'), employeeController.register)
router.get('/login',  employeeController.loadLogin)
router.post('/login', employeeController.login)
router.get('/', auth, employeeController.loadIndex)
router.post('/', auth, employeeController.index)
router.post('/:name', auth, employeeController.crushUser)
router.get('/employee/:name',auth, employeeController.search)
router.get('/logout',auth, employeeController.logout)

module.exports = router

