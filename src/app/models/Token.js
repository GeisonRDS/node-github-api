import Sequelize, { Model } from 'sequelize';

class Token extends Model {
    static init(sequelize) {
        super.init({
            user_id: Sequelize.INTEGER,
            date: Sequelize.DATE,
        },
        {
            sequelize,
        });
    }
}

export default Token;