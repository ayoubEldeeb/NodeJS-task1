exports.SignUp = (req , res) => {
    const UserName = req.body.UserName
    const password = req.body.password
    const email = req.body.email
    const phone = req.body.phone
    if (UserName.trim() === "" || password.trim() === "" || email.trim() === "" || phone.trim() === "") {
        res.json({
            msg : "sorry...pleas enter data",
            state : 0
        })
    }
    if (!UserName || !password || !email || !phone) {
        res.json({
            msg : "sorry...pleas enter data",
            state : 0
        })
    }
    res.json({
        msg : "data entered successfully",
        state : 1
    })
}

exports.login = (req , res) => {
    const UserName = req.body.UserName
    const password = req.body.password

    if (UserName == "" || password == "") {
       return res.json({
        msg : "please enter your data",
        state  : 0
       }) 
    }
    if (UserName == "Ayoub Eldeeb" && password == "123456") {
        res.json({
            msg : 'Hello mr.' + req.body.UserName,
            state : 1
        })
    }
    res.json({
        msg : "UserName or password is incorrect",
        state : 0
    })
}