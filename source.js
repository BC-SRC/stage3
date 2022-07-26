import {src1 as one} from "./src1.js" 
import {src2 as two} from "./src2.js" 
import {src3 as three} from "./src3.js" 
import{src4 as four} from "./src4.js"

const src=[one, two, three, four]

let random = Math.round(Math.random() * (src.length-1) )

populatePage(src[random])

function populatePage(member){
  
    let hairEl = document.getElementById('hair')
    let yearEl = document.getElementById('year')
    let hobbyEl = document.getElementById('hobby')
    let subjectEl = document.getElementById('subject')


    hairEl.innerText = `hair: ${member.hair}`
    yearEl.innerHTML = `year: ${member.year}`
    hobbyEl.innerHTML = `hobby: ${member.hobby}`
    subjectEl.innerHTML = `subject: ${member.favSub}`
}