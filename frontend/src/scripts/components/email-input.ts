// @ts-ignore
import { lilComponent } from "lil-framework";

const name = "email-input";

const template = /*html*/ `
<h3>Paste the body of the email here</h3>
<textarea lfbind="emailBody:input"></textarea>
`;

lilComponent({
  name,
  template,
  data: {
    isUntouched: false,
  },
  hooks: {
    emailBody: [
      function (newEmailBody: string) {
        if (!newEmailBody) {
          return;
        }
        const germanVerses = newEmailBody
          .match(getGermanVerseRegex())
          .map((v) => v.trim());
        let englishVerses = germanVerses.map((germanVerse) => {
          const bookName = germanVerse
            .match(/[0-9]?\.? ?[\u00C0-\u017FA-Za-z]+/)[0]
            .replace(".", "");
          const englishBook = getGermanEnglishMap()[bookName]
          let replacementRegex = bookName
          if (Number(bookName[0])) {
            [1, 2, 3, 4, 5].forEach((bookNumber) => {
              replacementRegex = replacementRegex.replace(bookNumber.toString(), `${bookNumber}\.?`);
            });
          }
          return germanVerse.replace(new RegExp(replacementRegex), englishBook);
        });
        this.dispatchEvent(new CustomEvent("englishVerses", { detail: englishVerses }))
      },
    ],
  },
});

function getGermanVerseRegex() {
  const germanBooks = Object.keys(getGermanEnglishMap());
  const prefix = germanBooks
    .reduce((acc, book) => {
      // Handle cases where someone might put a "." after a book name, e.g., "2. Samuel"
      [1, 2, 3, 4, 5].forEach((bookNumber) => {
        book = book.replace(bookNumber.toString(), `${bookNumber}\.?`);
      });
      acc.push(book);
      return acc;
    }, [])
    .join("|");
  const suffix = "[0-9|:| |,|-]+"; // Matches with the verses, e.g [BOOK NAME] 2:8-10, 14
  return new RegExp(`(${prefix})${suffix}`, "gmi");
}

export function getGermanEnglishMap(): Record<string, string> {
  return {
    "1 Mose": "Genesis",
    "2 Mose": "Exodus",
    "3 Mose": "Leviticus",
    "4 Mose": "Numbers",
    "5 Mose": "Deuteronomy",
    Josua: "Joshua",
    Richter: "Judges",
    Rut: "Ruth",
    "1 Samuel": "1 Samuel",
    "2 Samuel": "2 Samuel",
    "1 Könige": "1 Kings",
    "2 Könige": "2 Kings",
    "1 Chronik": "1 Chronicles",
    "2 Chronik": "2 Chronicles",
    Esra: "Ezra",
    Nehemia: "Nehemiah",
    Esther: "Esther",
    Hiob: "Job",
    Psalm: "Psalms",
    Psalmen: "Psalms",
    Sprüche: "Proverbs",
    Prediger: "Ecclesiastes",
    Hoheslied: "Song of Solomon",
    Jesaja: "Isaiah",
    Jeremia: "Jeremiah",
    Klagelieder: "Lamentations",
    Hesekiel: "Ezekiel",
    Daniel: "Daniel",
    Hosea: "Hosea",
    Joel: "Joel",
    Amos: "Amos",
    Obadja: "Obadiah",
    Jona: "Jonah",
    Micha: "Micah",
    Nahum: "Nahum",
    Habakuk: "Habakkuk",
    Zefanja: "Zephaniah",
    Haggai: "Haggai",
    Sacharja: "Zechariah",
    Maleachi: "Malachi",
    Matthäus: "Matthew",
    Markus: "Mark",
    Lukas: "Luke",
    Johannes: "John",
    Apostelgeschichte: "Acts",
    Römer: "Romans",
    "1 Korinther": "1 Corinthians",
    "2 Korinther": "2 Corinthians",
    Galater: "Galatians",
    Epheser: "Ephesians",
    Philipper: "Philippians",
    Kolosser: "Colossians",
    "1 Thessalonicher": "1 Thessalonians",
    "2 Thessalonicher": "2 Thessalonians",
    "1 Timotheus": "1 Timothy",
    "2 Timotheus": "2 Timothy",
    Titus: "Titus",
    Philemon: "Philemon",
    Hebräer: "Hebrews",
    Jakobus: "James",
    "1 Petrus": "1 Peter",
    "2 Petrus": "2 Peter",
    "1 Johannes": "1 John",
    "2 Johannes": "2 John",
    "3 Johannes": "3 John",
    Judas: "Jude",
    Offenbarung: "Revelation",
  };
}
