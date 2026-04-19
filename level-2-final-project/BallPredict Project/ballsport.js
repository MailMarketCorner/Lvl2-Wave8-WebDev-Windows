// --- DOM ELEMENTS ---
const favPlayerInput = document.getElementById("favPlayerInput");
const trophiesDisplay = document.getElementById("trophiesWon");
const favPlayerBtn = document.getElementById("submitFavPlayer");
const favDisplay = document.getElementById("favDisplay");
const currentSeasonStats = document.getElementById("currentSeasonStats");
const careerStats = document.getElementById("all-time-stats");
const favPlayerInfo = document.getElementById("favouritePlayerInfo");

// When the page loads, check if we saved a player previously
window.addEventListener("DOMContentLoaded", () => {
    const savedPlayer = localStorage.getItem("favouritePlayer");
    if (savedPlayer) {
        favPlayerInput.value = savedPlayer;
        displayPlayerName(); // Automatically trigger the display function
    }
});


// We add "async" so we can "await" the data from the internet
async function displayPlayerName () {
    const favPlayerName = favPlayerInput.value.trim();

    if(favPlayerName === ""){
        favDisplay.textContent = "Please enter a player name";
        return;
    }

    // Save to Local Storage!
    localStorage.setItem("favouritePlayer", favPlayerName);
    
    // Show a loading message so the user knows it's working
    favDisplay.textContent = `Loading data for: ${favPlayerName}...`;


    const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(favPlayerName)}`;

    try {
        // 1. Fetch data from TheSportsDB Free API
        const response = await axios.get(url);
        console.log(response);
        // 2. Convert the response into a JavaScript Object (JSON)
        const data = response.data;

        // 3. Check if the API actually found the player
        if (data.player && data.player.length > 0) {
            
            const player = data.player[0]; // Get the top search result
            
            favDisplay.textContent = `Favorite Player: ${player.strPlayer}`;



            // Player Bio (Shortened to 150 characters so it fits the box)
            let bioText = "Bio not found";
            if (player.strDescriptionEN){
                bioText = player.strDescriptionEN.substring(0, 200) + "..."
            }

            favPlayerInfo.innerHTML = `
            <h3> Player Bio</h3>
            <p>${bioText}</p>
            `

            // Current Team & Position (Replacing Current Season stats)
            // currentSeasonStats.innerHTML = `<h3>Current Team</h3><p>${player.strTeam}</p><p>Position: ${player.strPosition}</p>`;

            // // Trajectory / Details
            // careerStats.innerHTML = `<h3>Details</h3><p>Nationality: ${player.strNationality}</p><p>Born: ${player.dateBorn}</p>`;

            // // Physical Stats (Replacing Trophies for now)
            // throphiesDisplay.innerHTML = `<h3>Physical Stats</h3><p>Height: ${player.strHeight}</p><p>Weight: ${player.strWeight}</p>`;

            // Current Season container
            currentSeasonStats.innerHTML = `
            <h3> Current Season</h3>
            <p> <strong> Team: </strong> ${player.strTeam || "N/A"} </p>
            <p> <strong> Position: </strong> ${player.strPosition || "N/A"} </p>
            <p> <strong> Sport: </strong> ${player.strSport || "N/A"} </p>
            `


            // Trajectory 

            careerStats.innerHTML = `
            <h3> Background </h3>
            <p> <strong> Nationality: </strong> ${player.strNationality || "N/A"} </p>
            <p> <strong> Date of birth: </strong> ${player.dateBorn || "N/A"} </p>
            <p> <strong> Birth Location: </strong> ${player.strBirthLocation || "N/A"} </p>`


            const playerId = player.idPlayer;
            const trophyURL = `https://www.thesportsdb.com/api/v1/json/3/lookuphonours.php?id=${playerId}`
            const trophyResponse = await axios.get(trophyURL)
            const trophyData = trophyResponse.data
            
            if (trophyData.honours && trophyData.honours.length > 0) {
                let trophyHTML = "";
                trophyData.honours.forEach((trophy) => {
                    trophyHTML += 
                    `<p> <strong> ${trophy.strHonour} </strong>(${trophy.strSeason || "Year N/A"}) </p>`
                });

                trophiesDisplay.innerHTML = `
                <h3> Trophies Won </h3>
                ${trophyHTML}`
            } else {
                trophiesDisplay.innerHTML = `
                <h3> Trophies Won </h3>
                <p> No trophy data available. </p>`
                
            }

            
        } else {
            // If they type gibberish or a player not in the database
            favDisplay.textContent = `Player "${favPlayerName}" not found.`;
            clearStats();
        }

    } catch (error) {
        // If the internet goes down or the API fails
        console.error("Error fetching player:", error);
        favDisplay.textContent = "Error loading data. Try again later.";
        clearStats();
    }
}

// Helper function to clear boxes if a player isn't found
function clearStats() {
    favPlayerInfo.innerHTML = `<h3>Player Bio</h3>`;
    currentSeasonStats.innerHTML = `<h3>Current Team</h3>`;
    careerStats.innerHTML = `<h3>Details</h3>`;
    trophiesDisplay.innerHTML = `<h3>Physical Stats</h3>`;
}


favPlayerBtn.addEventListener("click", displayPlayerName);

// Let the user press "Enter" to submit as well
favPlayerInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        displayPlayerName();
    }
});