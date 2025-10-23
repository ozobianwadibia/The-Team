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
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 18
            }
        },
        jersey_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1
            }
        },
        soccer_club: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [[
                    'Los Angeles FC',
                    'Inter Miami CF',
                    'Columbus Crew',
                    'Philadelphia Union',
                    'Seattle Sounders FC',
                    'FC Cincinnati',
                    'Orlando City SC',
                    'Minnesota United FC',
                    'New York City FC',
                    'Nashville SC',
                    'New York Red Bulls',
                    'LA Galaxy',
                    'FC Dallas',
                    'Real Salt Lake',
                    'Portland Timbers',
                    'Chicago Fire FC',
                    'Houston Dynamo FC',
                    'New England Revolution',
                    'Sporting Kansas City',
                    'Austin FC'
                ]]
            }
        },
        position_played: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 2],
                isUppercase: true,
                isIn: [['GK', 'DF', 'MF', 'FW']]
            }
        },
    });
    return SoccerTeamUSA;
};