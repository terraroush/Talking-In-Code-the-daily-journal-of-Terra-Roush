import { getEntries, useEntries } from "./JournalDataProvider.js";
import { JournalEntryHTML } from "./JournalEntry.js";
import { useMoods } from "./MoodProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector("#entryLog");

eventHub.addEventListener("journalStateChanged", () => {
  const newEntries = useEntries();
  render(newEntries, useMoods());
});

export const EntryList = () => {
  getEntries()
  .then(() => {
    const appStateEntries = useEntries();
    render(appStateEntries);
  });
};

const render = (entryCollection) => {
  let HTMLArray = entryCollection.map((entryObj) => {
    return JournalEntryHTML(entryObj);
  });
  contentTarget.innerHTML += HTMLArray.join("");
};