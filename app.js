const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//Main route
app.get('/', (req, res) => {
    res.send('Hello World');
});

//additional routes
app.get('/api/health', (req, res) => {
    res.json({status: 'OK', message: 'Server is running'});
});

//Start server if this file is running(not during testing)
if(require.main === module){
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log('Press Ctrl+C to stop the server');
    });
}

//Export the app
module.exports = app;