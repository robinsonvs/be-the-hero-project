const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.json({
        event: 'OmniStack 11',
        user: 'Robinson Severo'
    });
});

app.listen(3333);