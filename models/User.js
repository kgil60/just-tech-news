const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create user model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // define id column
        id: {
            // special sequelize datatypes object
            type: DataTypes.INTEGER,
            // not null
            allowNull: false,
            // primary key
            primaryKey: true,
            // auto increment
            autoIncrement: true
        },
        // define username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // no duplicates
            unique: true,
            // if allowNull false, run data thru validators
            validate: {
                isEmail: true
            }
        },
        // define password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // password must be at least 4 characters long
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS

        // pass in imported sequeliize connection
        sequelize,
        // dont automatically create timestamp fields
        timestamps: false,
        // dont pluralize name of db table
        freezeTableName: true,
        // use underscores instead of camel-casing
        underscored: true,
        // model name stays lower casein db
        modelName: 'user'
    }
);

module.exports = User;