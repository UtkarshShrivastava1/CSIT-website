const cloudinary = require("cloudinary").v2;
require("colors");

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  timeout: 60000,
});

// Test Cloudinary Configuration
const testCloudinaryConfig = async () => {
  try {
    console.log("Testing Cloudinary configuration...".yellow);
    console.log("Config values:".cyan, {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY ? "****" : "missing",
      api_secret: process.env.CLOUDINARY_API_SECRET ? "****" : "missing",
    });

    const result = await cloudinary.api.ping();
    console.log("✅ Cloudinary configuration is valid:".green, result);
    return true;
  } catch (error) {
    console.error("❌ Cloudinary configuration error:".red, error.message);
    if (error.message.includes("api_key")) {
      console.error("API Key issue detected - Check CLOUDINARY_API_KEY".red);
    } else if (error.message.includes("cloud_name")) {
      console.error(
        "Cloud Name issue detected - Check CLOUDINARY_CLOUD_NAME".red
      );
    } else if (error.message.includes("api_secret")) {
      console.error(
        "API Secret issue detected - Check CLOUDINARY_API_SECRET".red
      );
    }
    return false;
  }
};

// Enhanced upload function with retries
const uploadWithRetry = async (file, options = {}, maxRetries = 3) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Upload attempt ${attempt}/${maxRetries}...`.yellow);
      const result = await cloudinary.uploader.upload(file, {
        timeout: 30000,
        ...options,
      });
      console.log("Upload successful".green);
      return result;
    } catch (error) {
      console.error(`Upload attempt ${attempt} failed:`.red, error.message);
      if (attempt === maxRetries) throw error;
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2s between retries
    }
  }
};

// Initialize Cloudinary
(async () => {
  const isValid = await testCloudinaryConfig();
  if (!isValid) {
    console.error("Cloudinary initialization failed".red);
  }
})();

module.exports = {
  cloudinary,
  uploadWithRetry,
  testCloudinaryConfig,
};
