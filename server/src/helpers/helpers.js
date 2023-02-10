function validateId(id){
    const idRegex = /[0-9]+/;
    return idRegex.test(id);
}

module.exports = {
    validateId
}