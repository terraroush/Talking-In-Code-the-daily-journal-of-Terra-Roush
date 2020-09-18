import { getEntries, useEntries } from "./JournalDataProvider.js";
import { JournalEntryHTML } from "./JournalEntry.js";

const render = (entryCollection) => {
  const contentTarget = document.querySelector("#entryLog");
  let HTMLArray = entryCollection.map((entryObj) => {
    return JournalEntryHTML(entryObj);
  });
  contentTarget.innerHTML += HTMLArray.join("");
};

export const EntryList = () => {
  getEntries().then(() => {
    const appStateEntries = useEntries();
    render(appStateEntries);
  });
};
