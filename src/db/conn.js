const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Bhavik", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
.then(() => {
    console.log("DB connected successfully");
})
.catch((err) => {
    console.log("DB connection failed");
})