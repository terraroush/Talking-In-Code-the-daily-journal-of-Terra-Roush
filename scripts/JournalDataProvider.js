const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
    const journalStateChanged = (new CustomEvent("journalStateChanged"))

    eventHub.dispatchEvent(journalStateChanged)
}

let journalEntries = [];

export const getEntries = () => {
  return fetch("http://localhost:8088/entries") // Fetch from the API
    .then((response) => response.json()) // Parse as JSON
    .then((entries) => {
      journalEntries = entries;
    });
};
export const useEntries = () => {
  return journalEntries.slice();
};

export const saveEntry = (newEntryObj) => {
    fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntryObj)
    })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
}