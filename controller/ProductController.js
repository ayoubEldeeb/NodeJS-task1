exports.addProduct = (req , res) => {
    const name = req.body.name
    const category = req.body.category
    const price = req.body.price
    
    if (name === "" || category === "" || price === "") {
        res.json({
            msg : "please enter product info",
            state : 0
        })
    }
    if (!name || !category || !price) {
        res.json({
            msg : "please enter product info",
            state : 0
        })
    }


    res.json({
        msg : "product has entered",
        state : 1,
        name : req.body.name,
        category : req.body.category,
        price : req.body.price
    })
}