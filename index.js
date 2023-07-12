const form = document.querySelector('#searchForm')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const userInput = form.elements.query.value;
    console.log(userInput);
    axios.get(`https://nba-stats-db.herokuapp.com/api/playerdata/name/${userInput}`)
        .then(function (res) {
            // handle success
            const stats = res.data.results[0];
            console.log(stats)
            const statKeys = Object.keys(stats)
            const statValues = Object.values(stats)

            const statObj = {
                'Points': `${statValues[27]}`,
                'Assists': `${statValues[22]}`,
                'Rebounds': `${statValues[21]}`,
                '3-point %': `${statValues[11]}`,
                'FG %': `${statValues[15]}`,
                'Steals': `${statValues[23]}`,
            }

            const entries = Object.entries(statObj)
            console.log(entries)
            const statList = document.querySelector('#result');
            for (i = 0; i < entries.length; i++) {
                let li = document.createElement('li');
                li.innerText = entries[i];
                statList.appendChild(li);
            }

        })
        .catch(function (err) {
            // handle error
            console.log(err);
        })
})