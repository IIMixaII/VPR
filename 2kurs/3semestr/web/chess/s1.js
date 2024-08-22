const leaderboardTable = document.getElementById("leaderboard").querySelector("tbody");
const leaderboardData = JSON.parse(localStorage.getItem("leaderboard")) || [];

function updateLeaderboard() {
  leaderboardTable.innerHTML = "";

  leaderboardData.forEach((record, index) => {
    const row = leaderboardTable.insertRow();
    const cellIndex = row.insertCell(0);
    const cellPlayer = row.insertCell(1);
    const cellTime = row.insertCell(2);

    cellIndex.textContent = index + 1;
    cellPlayer.textContent = record.player;
    cellTime.textContent = record.time;
  });
}

function addRecord(player, time) {
  leaderboardData.push({ player, time });

  leaderboardData.sort((a, b) => a.time - b.time);

  if (leaderboardData.length > 100) {
    leaderboardData.pop();
  }

  localStorage.setItem("leaderboard", JSON.stringify(leaderboardData));

  updateLeaderboard();
}