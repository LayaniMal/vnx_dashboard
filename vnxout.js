const router =  require('express').Router();
var DB = require('../DB/DBConnect').dbcon;  //connect database

router.route('/vnxinfo').get(async (req,res) =>
{
    //get vnx data from database
    var sql = "SELECT * FROM vnxdata";

    DB.query(sql,function(err,result,fields)
    {
        if(err)
        {
            res.status(400).json(`Error : ${err}`)
        }
        else
        {
            console.log(result);
            res.json(result);
        }
    });
});

module.exports = router;