const express = require('express')
const router = express.Router()

const employeeController = require('../controller/employeeController')
const upload = require('../middleware/upload')
const auth = require('../middleware/auth')

router.get('/register', auth.isLogout, employeeController.loadRegister)
router.post('/register', upload.single('avatar'), employeeController.register)
router.get('/login', auth.isLogout, employeeController.loadLogin)
router.post('/login', employeeController.login)
router.get('/', auth.isLogin, employeeController.loadIndex)
router.post('/', auth.isLogin, employeeController.index)
router.post('/:name', auth.isLogin, employeeController.crushUser)
router.get('/employee/:name',auth.isLogin, employeeController.search)
router.get('/logout',auth.isLogin, employeeController.logout)

module.exports = router

