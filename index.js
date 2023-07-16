const form1 = document.querySelector('#searchForm1')
const form2 = document.querySelector('#searchForm2')
form1.addEventListener('submit', function (e) {
    e.preventDefault();
    const userInput = form1.elements.query.value;
    console.log(userInput);
    axios.get(`https://nba-stats-db.herokuapp.com/api/playerdata/name/${userInput}`)
        .then(function (res) {
            // handle success
            const stats = res.data.results[0];
            console.log(stats)
            const statKeys = Object.keys(stats)
            const statValues = Object.values(stats)

            const statArr = [
                `Points: ${statValues[27]}`,
                `Assists: ${statValues[22]}`,
                `Rebounds: ${statValues[21]}`,
                `3-Point %: ${statValues[11]}`,
                `FG %: ${statValues[15]}`,
                `Steals: ${statValues[23]}`
            ]

            const statList = document.querySelector('#result1');
            for (i = 0; i < statArr.length; i++) {
                let li = document.createElement('li');
                li.innerText = statArr[i];
                statList.appendChild(li);
                if (statList.length) {
                    statList.parentNode.removeChild(li)
                }
            }

        })
        .catch(function (err) {
            // handle error
            console.log(err);
        })
})
form2.addEventListener('submit', function (e) {
    e.preventDefault();
    const userInput = form2.elements.query.value;
    console.log(userInput);
    axios.get(`https://nba-stats-db.herokuapp.com/api/playerdata/name/${userInput}`)
        .then(function (res) {
            // handle success
            const stats = res.data.results[0];
            console.log(stats)
            const statKeys = Object.keys(stats)
            const statValues = Object.values(stats)

            const statArr = [
                `Points: ${statValues[27]}`,
                `Assists: ${statValues[22]}`,
                `Rebounds: ${statValues[21]}`,
                `3-Point %: ${statValues[11]}`,
                `FG %: ${statValues[15]}`,
                `Steals: ${statValues[23]}`
            ]

            const statList = document.querySelector('#result2');
            for (i = 0; i < statArr.length; i++) {
                let li = document.createElement('li');
                li.innerText = statArr[i];
                statList.appendChild(li);
                if (statList.length) {
                    statList.parentNode.removeChild(li)
                }
            }

        })
        .catch(function (err) {
            // handle error
            console.log(err);
        })
})