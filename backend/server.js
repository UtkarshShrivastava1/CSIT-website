require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const errorHandler = require('./middleware/errorHandler');
const mongoose = require("mongoose")
require("colors"); 

const app = express();

const isProduction = process.env.NODE_ENV === "production";
const mongoURI = isProduction
  ? process.env.MONGO_ATLAS_URI
  : process.env.MONGO_LOCAL_URI;

  // Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(
      `Successfully connected to MongoDB (${process.env.NODE_ENV})`
        .brightMagenta.bold.italic
    );
    console.log(`MongoDB URI:`.blue + ` ${mongoURI}`.brightMagenta.bold.italic);
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB".red, err);
    process.exit(1);
  });




// Database Connection
// connectDB();

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/AuthRoutes"));
app.use("/api/gallery", require("./routes/galleryRoutes"));

// Error Handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));