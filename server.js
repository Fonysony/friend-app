const express = require('express');
const app = express();

const connectExpress = function(port) {
    app.listen(port, () => {
        console.log(`Express listening on port ${port}`);
    });
}
connectExpress(5000);

app.get('/customers', (req, res) => {
    const customers = [
        { id: 1, firstName: 'John', lastName: 'Doe' }, 
        { id: 2, firstName: 'Steve', lastName: 'Smith' }, 
        { id: 3, firstName: 'William', lastName: 'Santos' }, 
    ];
    res.json(customers);
});