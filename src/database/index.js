import Sequelize from 'sequelize';
import User from '../app/models/User';
import Student from '../app/models/Students';
import databaseConfig from '../config/database';

const models = [User, Student];

class Database {
  constructor() {
    this.init();
  }

  init() {
    const connection = new Sequelize(databaseConfig);
    models.map(model => model.init(connection));
  }
}

export default new Database();
