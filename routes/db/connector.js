var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var util = require("util")
var EventEmitter = require('events').EventEmitter;

class DbConnector{
    constructor(user,pwd,dbname){
        let ip = "xxxxxx";
        let port = xxxx;
        this.url = util.format("mongodb://%s:%s@%s:%s/%s", user, pwd, ip, port, dbname);
        this.connectEvent = new EventEmitter();
        this.connectEvent.on('connected_db', connectDispatch);
        connect();
    }

    connectDispatch(){
        DbConnector.connectListener.forEach((listener, index)=>{
            listener();
        });
    }

    getUrl(){
        return this.url;
    }   

    connect(){
        mongoose.connect(url);
        mongoose.connection.on('connected', ()=>{
            connected_suc = true;
            this.connectEvent.emit('connected_db');
            console.log('connect successful!');
        });

        mongoose.connection.ong('disconnected', ()=>{
            connected_suc = false;
            console.log('disconnected');
        });

        mongoose.connection.on('error', err => {
            connected_suc = false;
            console.log('error : ' + err);
        });
    }

    checkConnected(){
        return DbConnector.connected_suc;
    }

    static addConnectedListener(listener){
        DbConnector.connectListener.push(listener);
    }
}

DbConnector.connectListener = [];
DbConnector.connected_suc = false;

module.exports = {
   "connector":DbConnector,
   "mongoose":mongoose
};
