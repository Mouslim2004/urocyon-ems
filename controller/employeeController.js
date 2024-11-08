const Employee = require('../model/employee')
const Admin = require('../model/admin')

const loadRegister = async (req,res) => {
  res.render('register')
}

const register = async (req,res) => {
  try{
    const admin = new Admin({
      email: req.body.email,
      avatar: 'upload/' + req.file.filename,
      password: req.body.password
    })
    await admin.save()
    res.redirect('/login')
    // res.render('login', 'Your registration has been completed')
  }catch(error){
    console.log(error.message)
  }
}

const loadLogin = async (req,res) => {
  res.render('login')
}

const login = async (req,res) => {
  try{
    const email = req.body.email
    const password = req.body.password

    const check = await Admin.findOne({email: email})

    if(check && check.password === password){
      req.session.user = { id: check._id.toString(), email: check.email };
      res.redirect('/')
    } else {
      res.render('login', {message: 'Invalid email or password'})
    }
  }catch(error){
    console.log(error.message)
    res.render('login', {message: 'Email and Password are required'})
  }
}

const loadIndex = async (req,res) => {
  const show = await Employee.find()
  res.render('index', {show: show})
}

const index = async (req,res) => {
  let data = {
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    contact: req.body.contact,
    salary: req.body.salary,
    address: req.body.address,
    date: req.body.date
  }
   if(data.name == "" || data.lastname == "" ||
    data.email == "" || data.contact == "" ||
    data.salary == "" || data.address == "" ||
    data.date == ""
   ) {
    req.flash('error','Please! Fill the form')
    return res.redirect('/')
   } else {
    Employee.insertMany([data])

    res.render('index')
    console.log(data)
   }
}

const crushUser = async (req,res) => {
  try{
    let destroy = await Employee.deleteMany({ name: req.params.name  })
    if(destroy.deletedCount === 1){
      console.log(`Successfully deleted one document with the name: ${req.params.name}`);
    } else {
      console.log('No document found with that name');
    }
    console.log(destroy)
  } catch(error){
    console.error(error)
  }
}


const search = async (req,res) => {
  try {
    const employee = await Employee.findOne({ name: req.params.name });
    if (employee) {
      return res.json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

const logout = async(req,res) => {
  try{
    req.session.destroy()
    res.redirect('/login')
 }catch(error){
   console.log(error.message)
 }
}

module.exports = {
  loadRegister,
  register,
  loadLogin,
  login,
  loadIndex,
  index,
  crushUser,
  search,
  logout
}