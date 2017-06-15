/*
 * This file handle the API implementation for Histoire (GET/ POST / PUT / DELETE / PATCH)
 * Creation date : 29/05/2017
 * Last modification date : 29/05/2017
 * Author : c.gerard (Heliex)
 */

'use strict';

var mongoose = require('mongoose');

var Histoire = mongoose.model('Histoire');

// Retrieves all history in DB from Url : /histoires
exports.getAllHistoires = function(req,res){
    console.log("JE RECUPERE TOUTES LES HISTOIRES ?");
    Histoire.find({},function(err,histoire){
        if(err)
            res.send(err);
       res.json(histoire) ;
    });
};

// Create an history from body content from url : /histoires
exports.createHistoire = function(req,res){
 
    var newHistoire = new Histoire(req.body);
    
    newHistoire.save(function(err,histoire){
        if(err)
            res.send(err);
        res.json(histoire);
    });
};

// Retrieves one history from his id from url : /histoires/{id}
exports.readHistoire = function(req,res){
    Histoire.findById(req.params.histoireId, function(err,histoire){
        
        if(err)
            res.send(err);
        res.json(histoire);
    });
};

// Update one history from his Id from url : /histoires/{id}
exports.updateHistoire = function(req,res){
    
    Histoire.findOneAndUpdate(req.params.histoireId, req.body, {new : true}, function(err,histoire){
        
        if(err)
            res.send(err);
        res.json(histoire);
    });
};

// Delete one history from his Id from url : /histoires/{id}
exports.deleteHistoire = function(req,res){
    
    Histoire.remove(
        {_id : req.params.id} , function(err,histoire){
            
            if(err)
                res.send(err);
            res.send("Successfully deleted the Histoire with Id : " + req.params.id);
        });
};