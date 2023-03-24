module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      username: { type: DataTypes.STRING,  },
      email: { type: DataTypes.STRING,  },
      password: { type: DataTypes.STRING,  },
      token: { type: DataTypes.STRING,  },
    },
    { timestamps: true }
  );
  Users.associate = function (models) {
    // associations can be defined here
  };
  return Users;
};
