const express = require('express');
const path = require('path');
const app= express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/carrello', function(req, res){
    res.sendFile(path.join(__dirname, 'carrello.html'));
});

app.get('/cd', function (req, res) {
    res.sendFile(path.join(__dirname, 'cd.html'));

});

app.get('/pagamento', function(req, res){
    res.sendFile(path.join(__dirname, 'pagamento.html'));
});

app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/vinili', function(req, res){
    res.sendFile(path.join(__dirname, 'vinili.html'));
});

app.get('/bestseller', function(req, res){
    res.sendFile(path.join(__dirname, 'bestseller.html'));
});

app.get('/contatti', function(req, res){
    res.sendFile(path.join(__dirname, 'contatti.html'));
});

// Cambia la porta da 3000 a 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});