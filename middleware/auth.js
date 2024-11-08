const isLogin = async (req,res, next) => {
  try{
     if(req.session.user){ } 
     else{
        res.redirect('/login')
     }
     next()
  }catch(error){
   console.log(error.message)
  }
}

const isLogout = async (req,res, next) => {
 try{
    if(req.session.user){
     res.redirect('/')
    } 
    next()
 }catch(error){
  console.log(error.message)
 }
}

module.exports = {
 isLogin, isLogout
}

// module.exports = (req,res,next) => {
//   if(req.session && req.session.user){
//     next()
//   } else {
//     res.redirect('/login')
//   }
// }