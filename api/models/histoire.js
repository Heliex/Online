/*
 * This file is the representation of the Histoire object in Database (MongoDB)
 * Creation date : 29/05/2017
 * Last modification date : 29/05/2017
 * Author : c.gerard(Heliex)
 */
'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var histoireSchema = new Schema(

     {
         name : {
             type : String
         },
         
         type : {
             type : String
         },
         createdDate: {
            type: Date,
            default: Date.now
         }
     }
);

module.exports = mongoose.model('Histoire',histoireSchema);