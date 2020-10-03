import { getEntries, useEntries, deleteEntry } from "./JournalDataProvider.js";
import { JournalEntryHTML } from "./JournalEntry.js";
import { useMoods, getMoods } from "./MoodProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector("#entryLog");

eventHub.addEventListener("journalStateChanged", () => {
  const newEntries = useEntries();
  render(newEntries, useMoods());
});

eventHub.addEventListener("click", e => {
  if (e.target.id.startsWith("deleteBtn--")) {
    const [prefix, id] = e.target.id.split("--")
    deleteEntry(id)
  }
})

export const EntryList = () => {
  getEntries()
  .then(getMoods)
  .then(() => {
    const appStateEntries = useEntries();
    const appStateMoods = useMoods();
    render(appStateEntries, appStateMoods);
  });
};

// this function takes two parameters, an array of entry objects, and an array of mood objects; it maps the entries array, for each entry it also searches for when the entry's moodId is the same as the single mood item's id. it assigns each moodId to moodObj of the entry
const render = (entryCollection, moodArray) => {
  let HTMLArray = entryCollection.map((entryObj) => {
    entryObj.moodObj = moodArray.find((item) => {
      return item.id === parseInt(entryObj.moodId)
    })
    return JournalEntryHTML(entryObj);
  });
  contentTarget.innerHTML += HTMLArray.join("");
};
