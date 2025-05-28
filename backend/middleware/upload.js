const multer = require('multer');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.mimetype)) {
        return cb(new Error('Only JPEG, PNG, GIF, and WebP images are allowed'), false);
    }
    cb(null, true);
};

// Single image upload middleware
const uploadSingle = multer({
    storage,
    limits: {
        fileSize: 15 * 1024 * 1024,
        files: 1
    },
    fileFilter
}).single('image');

// Multiple image upload middleware
const uploadMultiple = multer({
    storage,
    limits: {
        fileSize: 15 * 1024 * 1024,
        files: 10 // Limit to 10 files at once
    },
    fileFilter
}).array('images', 10); // 'images' is the field name, 10 is max number of files

const singleUploadMiddleware = (req, res, next) => {
    uploadSingle(req, res, (err) => {
        if (err) {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({
                    success: false,
                    message: err.code === 'LIMIT_FILE_SIZE' 
                        ? 'File too large. Maximum size is 15MB.' 
                        : err.message
                });
            }
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }
        next();
    });
};

const multipleUploadMiddleware = (req, res, next) => {
    uploadMultiple(req, res, (err) => {
        if (err) {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({
                    success: false,
                    message: err.code === 'LIMIT_FILE_SIZE' 
                        ? 'File too large. Maximum size is 15MB.' 
                        : err.code === 'LIMIT_FILE_COUNT'
                        ? 'Too many files. Maximum is 10 files.'
                        : err.message
                });
            }
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }
        next();
    });
};

module.exports = {
    singleUploadMiddleware,
    multipleUploadMiddleware
};