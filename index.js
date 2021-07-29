let express = require('express');
let exphbs  = require('express-handlebars');
let bodyParser = require('body-parser');
let CalculateBillsSettings = require('./settings-bill');
let app = express();


const settingsBill = CalculateBillsSettings();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: false}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index', { settings: {
        callCost: settingsBill.getCallCost().toFixed(2),
        smsCost: settingsBill.getSmsCost().toFixed(2),
        warningLevel: settingsBill.getWarningLevel().toFixed(2),
        criticalLevel: settingsBill.getCriticalLevel().toFixed(2)
    }});
});

app.post('/settings', function(req, res){
    
    settingsBill.setCallCost(req.body.callCost);
    settingsBill.setSmsCost(req.body.smsCost);
    settingsBill.setWarningLevel(req.body.warningLevel);
    settingsBill.setCriticalLevel(req.body.criticalLevel);
    //console.log(settingsBill.getCallCost());
   
    res.redirect('/');
});

app.post('/action', function(){

});

app.get('/actions', function(){

});

app.get('actions/:type', function(){

});

let PORT = process.env.PORT || 3009;

app.listen(PORT, function(){
    console.log('App started on port: ', PORT);
});