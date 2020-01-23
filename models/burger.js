module.exports = function(sequelize, DataTypes) {
     
     var Burger = sequelize.define("Burger", {
       name: {
         type: DataTypes.STRING,
         allowNull: false
       },

       devour: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         defaultValue: true
       }
     });

     return Burger;
};