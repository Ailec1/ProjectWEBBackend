module.exports = (sequelize, DataTypes) => {
    const Scores = sequelize.define(
        "Scores",
        {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        score: { type: DataTypes.INTEGER,  },
        user_id: { type: DataTypes.INTEGER,  },
        },
        { timestamps: true }
    );
    Scores.associate = function (models) {
        // associations can be defined here
    };
    return Scores;
    }