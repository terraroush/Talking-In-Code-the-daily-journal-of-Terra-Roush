let journalMoods = [];

export const getMoods = () => {
    return fetch("http://localhost:8088/moods")
        .then(response => response.json())
        .then(moods => {
            journalMoods = moods;
        })
}

export const useMoods = () => {
    return journalMoods.slice()
}