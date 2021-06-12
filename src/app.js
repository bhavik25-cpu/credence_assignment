const express = require('express');
const app = express();

const port = process.env.PORT || 8000;
const moviesRouter = require('./routers/movies');

app.use(express.json());
app.use(moviesRouter);

app.listen(port, () => {
    console.log(`Server is listing at port ${port}`);
})