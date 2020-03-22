namespace Home {
  class Header {
    constructor () {
       const eleE = document.createElement('div')
       eleE.innerText = 'This is header'
       document.body.appendChild(eleE)
    }
 }

 class Content {
    constructor () {
       const eleE = document.createElement('div')
       eleE.innerText = 'This is content'
       document.body.appendChild(eleE)
    }
 }

 class Footer {
    constructor () {
       const eleE = document.createElement('div')
       eleE.innerText = 'This is footer'
       document.body.appendChild(eleE)
    }
 }

 export class Page {
    constructor () {
       new Header()
       new Content()
       new Footer()
    }
 }
}