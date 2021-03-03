import Sequelize, { Model } from 'sequelize';

class Following extends Model {
    static init(sequelize) {
        super.init({},{sequelize,});

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'following_user' });
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

export default Following;
