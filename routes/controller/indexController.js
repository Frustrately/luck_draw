var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '134.175.150.45',
  user     : 'luckdraw',
  password : 'luckdraw123',
  database : 'luck_draw'
});	
connection.connect();
var  sql_get_draw = 'SELECT draw_name,create_time,award FROM draw';
function get_draw(err, result){
	if(err){
	  console.log('[SELECT ERROR] - ',err.message);
	  return;
	}
	router.get('/get_draw_message',function (req, res) {
            res.send(result);
			
    })
	
}
connection.query(sql_get_draw,get_draw);
connection.end();
module.exports = router;
