export default async function handler(req, res) {
    const universeId = "YOUR_UNIVERSE_ID";
    const apiKey = process.env.ROBLOX_API_KEY;

    const info = await fetch(
        `https://apis.roblox.com/universes/v1/universes/${universeId}`,
        {
            headers: { "x-api-key": apiKey }
        }
    ).then(r => r.json());

    const icon = await fetch(
        `https://thumbnails.roblox.com/v1/games/icons?universeIds=${universeId}&size=256x256&format=Png&isCircular=false`
    ).then(r => r.json());

    res.status(200).json({
        name: info.name,
        playerCount: info.playing,
        icon: icon.data[0].imageUrl
    });
}
