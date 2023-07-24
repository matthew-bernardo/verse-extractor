// @ts-ignore
import { lilComponent } from "lil-framework"

const name = "verse-renderer"

const template = /*html*/`
<div class="version-wrapper">
  Translation:&nbsp;
  <input lfbind="version:input" style="font-size: 12pt;" list="suggested-translations" placeholder="Select translation">
  <datalist id="suggested-translations">
      <option value="ESV">
      <option value="NIV">
      <option value="NKJV">
      <option value="NTV">
      <option value="RVR1960">
  </datalist>
</div>
<div class="links-wrapper"></div>
`

lilComponent({
  name,
  template,
  data: {
    verses: "[]",
    version: "ESV"
  },
  hooks: {
    verses: [function(versesString: string) {
      this.style.display = "block"
      this.querySelector(".links-wrapper").innerHTML = getVersesHtml(versesString, this.state.version)
    }],
    version: [function(version: string) {
      this.querySelector(".links-wrapper").innerHTML = getVersesHtml(this.state.verses, version)
    }] 
  }
})

function getVersesHtml(versesString: string, version: string = "ESV") {
  let verses = JSON.parse(versesString)
  // TODO: Handle cases where verse references might contain multiple passages, e.g., John 1:1-2,4
  verses = verses.reduce((acc: Array<string>, references: string) => {
    return acc.concat(splitReferences(references))
  }, [])
  return verses.map((v: string) => {
    return /*html*/`<a target="_blank" href="${getBibleGatewayHref(v, version)}" class="verse chip">${v}</a>`
  }).join("")
}

function getBibleGatewayHref (verse: string, version: string = "ESV") {
  // Here's an example of the link format.
  // https://www.biblegateway.com/passage/?search=Romans+8%3A38-39&version=ESV
  return `http://www.biblegateway.com/passage/?search=${verse}&version=${version}`
}

function splitReferences(references: string) {
  const book = references.match(/[0-9]? ?[A-Za-z]*/)[0]
  const chapter = references.replace(book, "").trim().split(/:| /)[0]
  return references.split(",").map((reference, index) => {
    if (!index) {
      return reference
    }
    return `${book} ${chapter}:${reference}`
  })
}