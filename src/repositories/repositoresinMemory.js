const { users } = require('../infra/database')


class RepositoriesInMemory {

    getUsers (){
        return users;
    };

    findUser(e_mail){
        const encontraUsuario = users.find((user) => user.e_mail === e_mail) || null;

        return encontraUsuario;
    }

}

module.exports = { RepositoriesInMemory }