import Sequelize, { Model } from 'sequelize';

class RepositoryId extends Model {
    static init(sequelize) {
        super.init({},{sequelize,});

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id' });
        this.belongsTo(models.Repository, { foreignKey: 'repository_id' });
    }
}

export default RepositoryId;
