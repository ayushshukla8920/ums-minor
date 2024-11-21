async function createSeatsJson(data) {
    const seatsData = data.d.map((body) => ({
        areaName: body.AreaName,
        totalSeats: body.TotalSeats,
        preferences: {
            pref1: body.Pref1Seats,
            pref2: body.Pref2Seats,
            pref3: body.Pref3Seats,
            pref4: body.Pref4Seats,
            pref5: body.Pref5Seats,
        },
    }));

    return(seatsData);
}

module.exports = {
    createSeatsJson,
};
