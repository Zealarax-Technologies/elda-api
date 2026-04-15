const imageRemover = require("./imageRemover");

function removeUploadedFiles(files) {
    if(files.image)
    {
        imageRemover('publication/' + files.image[0].filename);
    }

    if(files.file)
    {
        imageRemover('publication/' + files.file[0].filename);
    }
}

module.exports = removeUploadedFiles;