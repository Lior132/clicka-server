const test = (req, res) =>{
    console.log("🔥 A request hit the /test route!");
    console.log("sddasdasdaSD");
    console.log(req.method);
    res.status(200).json('test is work yes yes');
}

// const dsf = (req, res) =>{

// }
module.exports = {
    test
};