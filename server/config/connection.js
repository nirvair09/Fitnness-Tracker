const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const uri = process.env.MONGODB_URI;

console.log("MongoDB URI:", uri); // Debugging: Print the URI to check

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!');
});

module.exports = mongoose.connection;
