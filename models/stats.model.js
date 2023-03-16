module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("stats", {
        UserID: {
            type: Sequelize.INT
        },
        date: {
            type: Sequelize.DATETIME(6)
        },
        score: {
            type: Sequelize.INT
        }
    }, { timestamps: true });

    return Stats;
};