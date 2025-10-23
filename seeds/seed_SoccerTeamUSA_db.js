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
            soccer_club: 'Los Angeles FC',
            position_played: 'GK'
        },
        {
            first_name: 'Ethan',
            last_name: 'Horvath',
            age: 23,
            jersey_number: 18,
            soccer_club: 'Los Angeles FC',
            position_played: 'GK'
        },
        {
            first_name: 'DeAndre',
            last_name: 'Yedlin',
            age: 25,
            jersey_number: 2,
            soccer_club: 'Inter Miami CF',
            position_played: 'DF'
        },
        {
            first_name: 'Matt',
            last_name: 'Miazga',
            age: 23,
            jersey_number: 3,
            soccer_club: 'Inter Miami CF',
            position_played: 'DF'
        },
        {
            first_name: 'Cameron',
            last_name: 'Carter-Vickers',
            age: 20,
            jersey_number: 5,
            soccer_club: 'Columbus Crew',
            position_played: 'DF'
        },
        {
            first_name: 'John',
            last_name: 'Brooks',
            age: 25,
            jersey_number: 6,
            soccer_club: 'Columbus Crew',
            position_played: 'DF'
        }, {
            first_name: 'Antonee',
            last_name: 'Robinson',
            age: 21,
            jersey_number: 17,
            soccer_club: 'Philadelphia Union',
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
            soccer_club: 'FC Cincinnati',
            position_played: 'DF'
        },
        {
            first_name: 'Aaron',
            last_name: 'Long',
            age: 26,
            jersey_number: 21,
            soccer_club: 'Chicago Fire FC',
            position_played: 'DF'
        },
        {
            first_name: 'Michael',
            last_name: 'Bradley',
            age: 31,
            jersey_number: 4,
            soccer_club: 'Austin FC',
            position_played: 'MF'
        },
        {
            first_name: 'Marky',
            last_name: 'Delgado',
            age: 23,
            jersey_number: 8,
            soccer_club: 'Houston Dynamo FC',
            position_played: 'MF'
        },
        {
            first_name: 'Timothy',
            last_name: 'Weah',
            age: 18,
            jersey_number: 11,
            soccer_club: 'Sporting Kansas City',
            position_played: 'MF'
        },
        {
            first_name: 'Julian',
            last_name: 'Green',
            age: 27,
            jersey_number: 16,
            soccer_club: 'Real Salt Lake',
            position_played: 'MF'
        },
        {
            first_name: 'Fafa',
            last_name: 'Picault',
            age: 27,
            jersey_number: 14,
            soccer_club: 'LA Galaxy',
            position_played: 'MF'
        },
        {
            first_name: 'Wil',
            last_name: 'Trapp',
            age: 25,
            jersey_number: 20,
            soccer_club: 'New York Red Bulls',
            position_played: 'MF'
        },
        {
            first_name: 'Kellyn',
            last_name: 'Acosta',
            age: 23,
            jersey_number: 23,
            soccer_club: 'New York Red Bulls',
            position_played: 'MF'
        },
        {
            first_name: 'Jonathon',
            last_name: 'Amon',
            age: 19,
            jersey_number: 24,
            soccer_club: 'Minnesota United FC',
            position_played: 'MF'
        },
        {
            first_name: 'Bobby',
            last_name: 'Wood',
            age: 25,
            jersey_number: 7,
            soccer_club: 'Minnesota United FC',
            position_played: 'FW'
        },
        {
            first_name: 'Josh',
            last_name: 'Sargent',
            age: 18,
            jersey_number: 13,
            soccer_club: 'FC Cincinnati',
            position_played: 'FW'
        },
        {
          first_name: 'Ethan',
          last_name: 'Martinez',
          age: 25,
          jersey_number: 1,
          soccer_club: 'Los Angeles FC',
          position_played: 'GK'
        },
        {
          first_name: 'Liam',
          last_name: 'Carter',
          age: 27,
          jersey_number: 2,
          soccer_club: 'Inter Miami CF',
          position_played: 'DF'
        },
        {
          first_name: 'Noah',
          last_name: 'Peterson',
          age: 24,
          jersey_number: 3,
          soccer_club: 'Columbus Crew',
          position_played: 'DF'
        },
        {
          first_name: 'Mason',
          last_name: 'Kim',
          age: 23,
          jersey_number: 4,
          soccer_club: 'Philadelphia Union',
          position_played: 'DF'
        },
        {
          first_name: 'Logan',
          last_name: 'Nguyen',
          age: 26,
          jersey_number: 5,
          soccer_club: 'Seattle Sounders FC',
          position_played: 'DF'
        },
        {
          first_name: 'Jacob',
          last_name: 'Reyes',
          age: 22,
          jersey_number: 6,
          soccer_club: 'FC Cincinnati',
          position_played: 'MF'
        },
        {
          first_name: 'Lucas',
          last_name: 'Ramirez',
          age: 25,
          jersey_number: 7,
          soccer_club: 'Orlando City SC',
          position_played: 'MF'
        },
        {
          first_name: 'Elijah',
          last_name: 'Lee',
          age: 29,
          jersey_number: 8,
          soccer_club: 'Minnesota United FC',
          position_played: 'MF'
        },
        {
          first_name: 'James',
          last_name: 'Watson',
          age: 21,
          jersey_number: 9,
          soccer_club: 'New York City FC',
          position_played: 'FW'
        },
        {
          first_name: 'Benjamin',
          last_name: 'Phillips',
          age: 28,
          jersey_number: 10,
          soccer_club: 'Nashville SC',
          position_played: 'FW'
        },
        {
          first_name: 'William',
          last_name: 'Foster',
          age: 30,
          jersey_number: 11,
          soccer_club: 'New York Red Bulls',
          position_played: 'FW'
        },
        {
          first_name: 'Alexander',
          last_name: 'Diaz',
          age: 32,
          jersey_number: 12,
          soccer_club: 'LA Galaxy',
          position_played: 'DF'
        },
        {
          first_name: 'Henry',
          last_name: 'Cooper',
          age: 24,
          jersey_number: 13,
          soccer_club: 'FC Dallas',
          position_played: 'DF'
        },
        {
          first_name: 'Sebastian',
          last_name: 'Clark',
          age: 19,
          jersey_number: 14,
          soccer_club: 'Real Salt Lake',
          position_played: 'MF'
        },
        {
          first_name: 'Matthew',
          last_name: 'Sanders',
          age: 20,
          jersey_number: 15,
          soccer_club: 'Portland Timbers',
          position_played: 'MF'
        },
        {
          first_name: 'Jack',
          last_name: 'Harris',
          age: 23,
          jersey_number: 16,
          soccer_club: 'Chicago Fire FC',
          position_played: 'MF'
        },
        {
          first_name: 'Owen',
          last_name: 'Baker',
          age: 21,
          jersey_number: 17,
          soccer_club: 'Houston Dynamo FC',
          position_played: 'DF'
        },
        {
          first_name: 'Daniel',
          last_name: 'Hill',
          age: 26,
          jersey_number: 18,
          soccer_club: 'New England Revolution',
          position_played: 'FW'
        },
        {
          first_name: 'Michael',
          last_name: 'Evans',
          age: 31,
          jersey_number: 19,
          soccer_club: 'Sporting Kansas City',
          position_played: 'FW'
        },
        {
          first_name: 'Aiden',
          last_name: 'King',
          age: 22,
          jersey_number: 20,
          soccer_club: 'Austin FC',
          position_played: 'FW'
        },
        {
          first_name: 'Carter',
          last_name: 'Brooks',
          age: 24,
          jersey_number: 21,
          soccer_club: 'Los Angeles FC',
          position_played: 'MF'
        },
        {
          first_name: 'Wyatt',
          last_name: 'Mitchell',
          age: 28,
          jersey_number: 22,
          soccer_club: 'FC Dallas',
          position_played: 'DF'
        },
        {
          first_name: 'Grayson',
          last_name: 'Ward',
          age: 27,
          jersey_number: 23,
          soccer_club: 'Inter Miami CF',
          position_played: 'MF'
        },
        {
          first_name: 'Julian',
          last_name: 'Cook',
          age: 30,
          jersey_number: 24,
          soccer_club: 'Seattle Sounders FC',
          position_played: 'FW'
        },
        {
          first_name: 'Leo',
          last_name: 'Morris',
          age: 19,
          jersey_number: 25,
          soccer_club: 'Real Salt Lake',
          position_played: 'DF'
        },
        {
          first_name: 'Hudson',
          last_name: 'Parker',
          age: 25,
          jersey_number: 26,
          soccer_club: 'Philadelphia Union',
          position_played: 'MF'
        },
        {
          first_name: 'Jackson',
          last_name: 'Bell',
          age: 22,
          jersey_number: 27,
          soccer_club: 'Orlando City SC',
          position_played: 'DF'
        },
        {
          first_name: 'David',
          last_name: 'Murphy',
          age: 26,
          jersey_number: 28,
          soccer_club: 'FC Cincinnati',
          position_played: 'GK'
        },
        {
          first_name: 'Thomas',
          last_name: 'Torres',
          age: 24,
          jersey_number: 29,
          soccer_club: 'Nashville SC',
          position_played: 'DF'
        },
        {
          first_name: 'Levi',
          last_name: 'Flores',
          age: 20,
          jersey_number: 30,
          soccer_club: 'New York City FC',
          position_played: 'MF'
        },
        {
          first_name: 'Anthony',
          last_name: 'Scott',
          age: 28,
          jersey_number: 31,
          soccer_club: 'Chicago Fire FC',
          position_played: 'DF'
        },
        {
          first_name: 'Joseph',
          last_name: 'Howard',
          age: 25,
          jersey_number: 32,
          soccer_club: 'Austin FC',
          position_played: 'FW'
        },
        {
          first_name: 'Andrew',
          last_name: 'Ward',
          age: 22,
          jersey_number: 33,
          soccer_club: 'FC Dallas',
          position_played: 'MF'
        },
        {
          first_name: 'Isaac',
          last_name: 'Turner',
          age: 24,
          jersey_number: 34,
          soccer_club: 'LA Galaxy',
          position_played: 'MF'
        },
        {
          first_name: 'Nathan',
          last_name: 'Bennett',
          age: 30,
          jersey_number: 35,
          soccer_club: 'Houston Dynamo FC',
          position_played: 'GK'
        },
        {
          first_name: 'Christopher',
          last_name: 'Gray',
          age: 31,
          jersey_number: 36,
          soccer_club: 'Columbus Crew',
          position_played: 'DF'
        },
        {
          first_name: 'Gabriel',
          last_name: 'Kelly',
          age: 23,
          jersey_number: 37,
          soccer_club: 'New England Revolution',
          position_played: 'FW'
        },
        {
          first_name: 'Joshua',
          last_name: 'Ross',
          age: 28,
          jersey_number: 38,
          soccer_club: 'Sporting Kansas City',
          position_played: 'MF'
        },
        {
          first_name: 'Ryan',
          last_name: 'Long',
          age: 29,
          jersey_number: 39,
          soccer_club: 'Minnesota United FC',
          position_played: 'DF'
        },
        {
          first_name: 'Eli',
          last_name: 'Diaz',
          age: 19,
          jersey_number: 40,
          soccer_club: 'New York Red Bulls',
          position_played: 'DF'
        },
        {
          first_name: 'Christian',
          last_name: 'Sullivan',
          age: 24,
          jersey_number: 41,
          soccer_club: 'Real Salt Lake',
          position_played: 'MF'
        },
        {
          first_name: 'Hunter',
          last_name: 'Reed',
          age: 20,
          jersey_number: 42,
          soccer_club: 'Los Angeles FC',
          position_played: 'FW'
        },
        {
          first_name: 'Cooper',
          last_name: 'Mendoza',
          age: 23,
          jersey_number: 43,
          soccer_club: 'New England Revolution',
          position_played: 'MF'
        },
        {
          first_name: 'Connor',
          last_name: 'Stevens',
          age: 27,
          jersey_number: 44,
          soccer_club: 'Philadelphia Union',
          position_played: 'DF'
        },
        {
          first_name: 'Brayden',
          last_name: 'Fowler',
          age: 21,
          jersey_number: 45,
          soccer_club: 'Portland Timbers',
          position_played: 'MF'
        },
        {
          first_name: 'Dylan',
          last_name: 'Hughes',
          age: 26,
          jersey_number: 46,
          soccer_club: 'Nashville SC',
          position_played: 'MF'
        },
        {
          first_name: 'Aaron',
          last_name: 'Chavez',
          age: 28,
          jersey_number: 47,
          soccer_club: 'Inter Miami CF',
          position_played: 'FW'
        },
        {
          first_name: 'Hunter',
          last_name: 'Young',
          age: 18,
          jersey_number: 48,
          soccer_club: 'Minnesota United FC',
          position_played: 'GK'
        },
        {
          first_name: 'Jonathan',
          last_name: 'Bryant',
          age: 25,
          jersey_number: 49,
          soccer_club: 'LA Galaxy',
          position_played: 'MF'
        },
        {
          first_name: 'Miles',
          last_name: 'Holmes',
          age: 29,
          jersey_number: 50,
          soccer_club: 'Houston Dynamo FC',
          position_played: 'FW'
        }

    ]).then(function(response) {
        console.log('Data successfully added!');

    }).catch(function(error) {
        console.log('Error', error);
    });
});