const express = require('express');
const app = express();

// app.get();
// app.post();
// app.put();
// app.delete();
// '/' is the root directory
app.use(express.json());
app.get('/', (req, res)=>{ 
    res.send('hello world');
});

app.get('/api/courses', (req, res)=>{ 
    res.send('courses');
});

app.listen(3000,()=>console.log('listening on http://localhost:3000'));
y