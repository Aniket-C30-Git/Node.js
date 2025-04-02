// const mongoose = require("mongoose");
// const connect_to_db = ()=>{
//     mongoose
//     .connect(process.env.DB_URL)
//     .then(()=>{
//         console.log("connected to databse");
//     })
//     .catch(()=>{
//         console.log(" not connected to databse");
//     })
// }
// module.exports = connect_to_db;

const mongoose = require("mongoose");
require("dotenv").config();

const connect_to_db = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
};

module.exports = connect_to_db;
