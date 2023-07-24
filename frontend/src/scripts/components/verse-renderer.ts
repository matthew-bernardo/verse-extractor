// @ts-ignore
import { lilComponent } from "lil-framework"

const name = "verse-renderer"

const template = /*html*/``

lilComponent({
  name,
  template,
  data: {
    verses: "[]",
  },
  hooks: {
    verses: [function(versesString: string) {
      let verses = JSON.parse(versesString)
      // TODO: Handle cases where verse references might contain multiple passages, e.g., John 1:1-2,4
      this.innerHTML = verses.map((v: string) => {
        return /*html*/`<a target="_blank" href="${getBibleGatewayHref(v)}" class="verse chip">${v}</a>`
      }).join("")
    }]
  }
})

function getBibleGatewayHref (verse: string, version: string = "ESV") {
  // Here's an example of the link format.
  // https://www.biblegateway.com/passage/?search=Romans+8%3A38-39&version=ESV
  return `http://www.biblegateway.com/passage/?search=${verse}&version=${version}`
}