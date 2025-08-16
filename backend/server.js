import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('dist')); // Serve static files from the 'dist' directory
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });


//get a list of 5 jokes array containing id,title and content
app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: 'Joke 1', content: 'Why did the scarecrow win an award? Because he was outstanding in his field!' },
        { id: 2, title: 'Joke 2', content: 'I told my wife she was drawing her eyebrows too high. She looked surprised!' },
        { id: 3, title: 'Joke 3', content: 'I threw a boomerang a few years ago. I know liars who can throw it better!' },
        { id: 4, title: 'Joke 4', content: 'Why don’t skeletons fight each other? They don’t have the guts!' },
    ]
    res.send(jokes);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
