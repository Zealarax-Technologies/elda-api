// // const sharp = require("sharp");
// const path = require('path');
// const fs = require('fs');

// function convertWebp(relativePath){
// //    const rootDir = path.join(__dirname, '../../public');
// //    const originalImagePath = path.join(rootDir, relativePath);

// //    if (path.extname(relativePath).toLowerCase() === ".webp") {
// //         if (!fs.existsSync(originalImagePath)) {
// //             throw new Error("WebP image not found.");
// //         }
// //         return relativePath;
// //     }

// //     const webpImagePath = path.join(
// //         path.dirname(originalImagePath),
// //         `${path.parse(relativePath).name}.webp`
// //     );

// //     if (!fs.existsSync(originalImagePath)) {
// //         throw new Error('Original image not found.');
// //     }

// //     if (!fs.existsSync(webpImagePath)) {
// //         sharp(originalImagePath)
// //             .webp({ quality: 80 })
// //             .toFile(webpImagePath)
// //             .then(() => {
// //                 console.log('Image converted to WebP successfully.');
// //             })
// //             .catch((error) => {
// //                 console.error('Error converting image to WebP:', error);
// //             });
// //     }

// //     return path.join(path.dirname(relativePath), `${path.parse(relativePath).name}.webp`);
// }

// module.exports = convertWebp;