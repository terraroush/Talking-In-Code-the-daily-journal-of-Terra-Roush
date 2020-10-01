export const JournalEntryHTML = (entryObj) => {
  return `
        <section id="entry--${entryObj.id}" class="journalEntry">
            ${new Date(entryObj.date).toLocaleDateString("en-US")}
            <h4>${entryObj.concept}:</h4>
            <p>I'm feeling ${entryObj.moodObj.label}</p>
            <p>${entryObj.entry}</p>
        </section>
        <button id="deleteBtn" class="deleteBtn" type="button">delete</button>
    `;
};
