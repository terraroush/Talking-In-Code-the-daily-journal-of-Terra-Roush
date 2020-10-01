const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
  const journalStateChanged = new CustomEvent("journalStateChanged");

  eventHub.dispatchEvent(journalStateChanged);
};

let journalEntries = [];

export const getEntries = () => {
  return fetch("http://localhost:8088/entries?_expand=mood")
    .then((response) => response.json())
    .then((entries) => {
      journalEntries = entries;
    });
};
export const useEntries = () => {
  return journalEntries.slice();
};

export const saveEntry = newEntryObj => {
  fetch("http://localhost:8088/entries?_expand=mood", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEntryObj),
  })
    .then(getEntries)
    .then(dispatchStateChangeEvent);
};

export const deleteEntry = entryId => {
  return fetch(`http://localhost:8088/entries/${entryId}`, {
      method: "DELETE"
  })
  .then(dispatchStateChangeEvent)
}
