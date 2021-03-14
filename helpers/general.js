
function search (item) {
    return Object.keys(this).every((key) =>
    item[key] == this[key]
    );
}


module.exports = {
    search
}