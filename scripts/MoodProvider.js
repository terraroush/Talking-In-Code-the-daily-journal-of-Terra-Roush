let journalMoods = [];

export const getMoods = () => {
    return fetch("http://localhost:8088/entries?_expand=mood")
        .then(response => response.json())
        .then(moods => {
            journalMoods = moods;
        })
}

export const useMoods = () => {
    return journalMoods.slice()
}