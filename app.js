/**
 * Created by Lily on 28.09.2015.
 */


var express = require('express')
    , app = module.exports = express();

// Using the .html extension instead of
// having to name the views as *.ejs
app.engine('.html', require('ejs').__express);

// Set the folder where the pages are kept
app.set('views', __dirname + '/views');

// This avoids having to provide the
// extension to res.render()
app.set('view engine', 'html');

// Serve the index page
app.get('/', function(req, res){
    res.render('index', {
        // PLACEHOLDER
        pageTitle: 'EJS Demo'
    });
});

if (!module.parent) {
    app.listen(8080);
    console.log('EJS Demo server started on port 8080');
}