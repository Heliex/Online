/*
 * This files handle the urls send by the client and match the controller to set the good function
 * Creation date : 29/05/2017
 * Last modification date : 29/05/2017
 * Author : c.gerard(Heliex)
 */

'use strict';

module.exports = function(app){
    
    // get the controller for these urls
    var histoireList = require('../controllers/histoireController');
    
    // Foreach routes, match the url with the good controller function
    console.log("Je passe dans le routeur de Histoire");
    app.route('/histoires')
        .get(histoireList.getAllHistoires)
        .post(histoireList.createHistoire);
    
    app.route('histoires/:histoireId')
        .get(histoireList.readHistoire)
        .put(histoireList.updateHistoire)
        .delete(histoireList.deleteHistoire);
};