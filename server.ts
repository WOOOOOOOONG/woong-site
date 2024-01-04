import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'public/index.html');
    res.sendFile(indexPath);
});

app.listen(port, () => {
    console.log('servier running');
});