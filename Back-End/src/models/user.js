const database = require('../config/database');

class User {
    constructor() {
        this.model = database.define('users', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            fullName: {
                type: database.Sequelize.STRING,
                allowNull: false
            },
            areaOfExpertise: {
                type: database.Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: database.Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: database.Sequelize.STRING,
                allowNull: false
            },
        }, {
            timestamps: true
        });
    }
}

module.exports = (new User).model;