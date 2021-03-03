import Sequelize, { Model } from 'sequelize';

class Follower extends Model {
    static init(sequelize) {
        super.init({},{sequelize,});

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'follower_user' });
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

export default Follower;
