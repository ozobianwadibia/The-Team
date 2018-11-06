//FUNCTION to access system
const username = "Admin";
const password = "Team";
const coachAccess = function() {
    let userInput = $('#username').val().trim();
    let passInput = $('#password').val().trim();

    if (userInput === username && passInput === password) {
        //GET request for team page
        $.ajax({
            url: `/team`,
            method: 'GET'
        }).then(function(result) {
            window.location.replace('/team');
            console.log(result);
        });
    } else {
        alert('Hey');
    }
    $('#username').val('');
    $('#password').val('');
}

$('#teamCoachAccess').on('click', coachAccess);


//FUNCTION to display all team members
const displayAll = function() {
    $('#show').empty();
    $.ajax({
        url: `api/player/`,
        method: 'GET'
    }).then(function(result) {
        // console.log(result);
        for (let i = 0; i < result.length; i++) {
            $('#show').append('<tr><td>' + result[i].id + '</td><td>' + result[i].first_name + '</td><td>' + result[i].last_name + '</td><td>' + result[i].age + '</td><td>' + result[i].jersey_number + '</td><td>' + result[i].soccer_club + '</td><td>' + result[i].position_played + '</td></tr>');
        }
    });
}
displayAll();

//FUNCTION to refresh the DOM 
const refreshDOM = function() {
    location.reload();
}


//--------------------------------------
//consider the use for this new function
//--------------------------------------
const displayOne = function() {
    $.ajax({
        url: `api/player/${id}`,
        method: 'GET'
    }).then(function(result) {
        console.log(result);
        $('#show').append('<tr><td>' + result[i].id + '</td><td>' + result[i].first_name + '</td><td>' + result[i].last_name + '</td><td>' + result[i].age + '</td><td>' + result[i].jersey_number + '</td><td>' + result[i].soccer_club + '</td><td>' + result[i].position_played + '</td></tr>');
    });
}





//FUNCTION to add a brand new player
const addPlayer = function() {
    let firstName = $('#firstName').val().trim();
    let lastName = $('#lastName').val().trim();
    let age = $('#age').val();
    let jerseyNumber = $('#jerseyNumber').val();
    let soccerClub = $('#soccerClub').val().trim();
    let positionPlayed = $('#positionPlayed').val().trim();

    if (firstName && lastName && age && jerseyNumber && soccerClub && positionPlayed) {
        const newPlayer = {
            first_name: firstName,
            last_name: lastName,
            age: age,
            jersey_number: jerseyNumber,
            soccer_club: soccerClub,
            position_played: positionPlayed
        }
        $.ajax({
            url: `/api/player`,
            method: 'POST',
            data: newPlayer
        }).then(function(newPlayer) {
            console.log(newPlayer);
        });
        refreshDOM();
    } else {
        // UIkit.modal.alert('Please provide an ID');
    }
}

$('#addPlayer').on('click', addPlayer);


//FUNCTION to delete a player from the database
const deletePlayer = function() {
    let id = $('#deletePlayer').val();
    if (id) {
        $.ajax({
            url: `/api/player/${id}`,
            method: 'DELETE'
        }).then(function(result) {
            // console.log(result);
        });
        refreshDOM();

    } else {
        // UIkit.modal.alert('Hey man');
    }
}
$('#delete').on('click', deletePlayer);

//FUNCTION to update a player in the database
const updatePlayer = function() {
    let newFirstName = $('#updFirstName').val().trim();
    let newLastName = $('#updLastName').val().trim();
    let newAge = $('#updAge').val();
    let newJerseyNumber = $('#updJerseyNumber').val();
    let newSoccerClub = $('#updSoccerClub').val();
    let newPositionPlayed = $('#updPositionPlayed').val();

    let id = $('#updateInput').val();

    if (id) {
        let update = {
            first_name: newFirstName,
            last_name: newLastName,
            age: newAge,
            jersey_number: newJerseyNumber,
            soccer_club: newSoccerClub,
            position_played: newPositionPlayed
        }
        $.ajax({
            url: `/api/player/${id}`,
            method: 'PUT',
            data: update
        }).then(function(update) {
            // console.log(update);
        });
        refreshDOM();
    }
}
$('#update').on('click', updatePlayer);