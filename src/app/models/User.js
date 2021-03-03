import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            email: Sequelize.STRING,
            localizacao: Sequelize.STRING,
            avatar: Sequelize.STRING,
            username: Sequelize.STRING,
            bio: Sequelize.STRING,
        },
        {
            sequelize,
        });
    }
}

export default User;
