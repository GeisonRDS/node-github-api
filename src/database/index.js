import Sequelize from 'sequelize';

import User from '../app/models/User';
import Follower from '../app/models/Follower';
import Following from '../app/models/Following';
import Repository from '../app/models/Repository';
import RepositoryStars from '../app/models/RepositoryStars';
import Token from '../app/models/Token';

import databaseConfig from '../config/database';

const models = [User, Follower, Following, Repository, RepositoryStars, Token];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection));
    }
}

export default new Database();