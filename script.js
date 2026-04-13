async function loadInfo() {
    const res = await fetch("/api/search");
    const data = await res.json();

    document.getElementById("name").innerText = data.name;
    document.getElementById("players").innerText = "Players Online: " + data.playerCount;
    document.getElementById("icon").src = data.icon;
}

loadInfo();
