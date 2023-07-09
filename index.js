// import axios from 'axios';
axios.get('https://nba-stats-db.herokuapp.com/api/playerdata/name/Lebron James')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })