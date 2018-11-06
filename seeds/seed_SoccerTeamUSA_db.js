//Import Database Models
//--------------------------------------------
const db = require('../models');

// Syncing our sequelize models 
db.sequelize.sync().then(function() {
    db.SoccerTeamUSA.bulkCreate([{
            first_name: 'Brad',
            last_name: 'Cuzan',
            age: 34,
            jersey_number: 1,
            soccer_club: 'Atlanta United',
            position_played: 'GK'
        },
        {
            first_name: 'Ethan',
            last_name: 'Horvath',
            age: 23,
            jersey_number: 18,
            soccer_club: 'Club Brugge',
            position_played: 'GK'
        },
        {
            first_name: 'DeAndre',
            last_name: 'Yedlin',
            age: 25,
            jersey_number: 2,
            soccer_club: 'Newcastle United',
            position_played: 'DF'
        },
        {
            first_name: 'Matt',
            last_name: 'Miazga',
            age: 23,
            jersey_number: 3,
            soccer_club: 'Nantes',
            position_played: 'DF'
        },
        {
            first_name: 'Cameron',
            last_name: 'Carter-Vickers',
            age: 20,
            jersey_number: 5,
            soccer_club: 'Swansea City',
            position_played: 'DF'
        },
        {
            first_name: 'John',
            last_name: 'Brooks',
            age: 25,
            jersey_number: 6,
            soccer_club: 'Vfl Wolfsburg',
            position_played: 'DF'
        }, {
            first_name: 'Antonee',
            last_name: 'Robinson',
            age: 21,
            jersey_number: 17,
            soccer_club: 'Wigan Athletic',
            position_played: 'DF'
        },
        {
            first_name: 'Reggie',
            last_name: 'Cannon',
            age: 20,
            jersey_number: 12,
            soccer_club: 'FC Dallas',
            position_played: 'DF'
        },
        {
            first_name: 'Ben',
            last_name: 'Sweat',
            age: 27,
            jersey_number: 19,
            soccer_club: 'New York City',
            position_played: 'DF'
        },
        {
            first_name: 'Aaron',
            last_name: 'Long',
            age: 26,
            jersey_number: 21,
            soccer_club: 'New York Red Bulls',
            position_played: 'DF'
        },
        {
            first_name: 'Michael',
            last_name: 'Bradley',
            age: 31,
            jersey_number: 4,
            soccer_club: 'Toronto FC',
            position_played: 'MF'
        },
        {
            first_name: 'Marky',
            last_name: 'Delgado',
            age: 23,
            jersey_number: 8,
            soccer_club: 'Toronto FC',
            position_played: 'MF'
        },
        {
            first_name: 'Timothy',
            last_name: 'Weah',
            age: 18,
            jersey_number: 11,
            soccer_club: 'Paris Saint-Germain',
            position_played: 'MF'
        },
        {
            first_name: 'Julian',
            last_name: 'Green',
            age: 27,
            jersey_number: 16,
            soccer_club: 'Greuther Furth',
            position_played: 'MF'
        },
        {
            first_name: 'Fafa',
            last_name: 'Picault',
            age: 27,
            jersey_number: 14,
            soccer_club: 'Philadelphia Union',
            position_played: 'MF'
        },
        {
            first_name: 'Wil',
            last_name: 'Trapp',
            age: 25,
            jersey_number: 20,
            soccer_club: 'Columbus Crew',
            position_played: 'MF'
        },
        {
            first_name: 'Kellyn',
            last_name: 'Acosta',
            age: 23,
            jersey_number: 23,
            soccer_club: 'Colorado Rapids',
            position_played: 'MF'
        },
        {
            first_name: 'Jonathon',
            last_name: 'Amon',
            age: 19,
            jersey_number: 24,
            soccer_club: 'Nordsjaelland',
            position_played: 'MF'
        },
        {
            first_name: 'Bobby',
            last_name: 'Wood',
            age: 25,
            jersey_number: 7,
            soccer_club: 'Hannover 96',
            position_played: 'FW'
        },
        {
            first_name: 'Josh',
            last_name: 'Sargent',
            age: 18,
            jersey_number: 13,
            soccer_club: 'Werder Bremen',
            position_played: 'FW'
        }
    ]).then(function(response) {
        console.log('Data successfully added!');
    }).catch(function(error) {
        console.log('Error', error);
    });
});