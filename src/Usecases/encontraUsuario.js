const { RepositoriesInMemory } = require('../repositories/repositoresinMemory')

function execute(e_mail){
    const repositoresinMemory = new RepositoriesInMemory()
    return repositoresinMemory.findUser(e_mail)
}
module.exports = { execute }