module.exports = function(sequelize, DataTypes) {
    const SoccerTeamUSA = sequelize.define('SoccerTeamUSA', {
        // Giving the SoccerTeamUSA model a name of type STRING
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER
        },
        jersey_number: {
            type: DataTypes.INTEGER
        },
        soccer_club: {
            type: DataTypes.STRING
        },
        position_played: {
            type: DataTypes.STRING
        },
    });
    return SoccerTeamUSA;
};