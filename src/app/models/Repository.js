import Sequelize, { Model } from 'sequelize';

class Repository extends Model {
    static init(sequelize) {
        super.init({
            user_id: Sequelize.INTEGER,
            nome: Sequelize.STRING,
            description: Sequelize.STRING,
            public: Sequelize.BOOLEAN,
            slug: Sequelize.STRING,
        },
        {
            sequelize,
        });
        
        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
}

export default Repository;
