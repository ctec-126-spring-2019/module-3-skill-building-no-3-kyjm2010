// sb3.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function intro() {
    let output = '<p>White man came across the sea<br>He brought us pain and misery<br>He killed our tribes killed our creed<br>He took our game for his own need<br>We fought him hard we fought him well<br>Out on the plains we gave him hell<br>But many came too much for Cree<br>Oh will we ever be set free?</p>'
    // your code here

    return output
}

function verse1() {
    let output = '<p>Riding through dust clouds and barren wastes<br>Galloping hard on the plains<br>Chasing the redskins back to their holes<br>Fighting them at their own game<br>Murder for freedom the stab in the back<br>Women and children are cowards attack</p>'
    // your code here

    return output
}

function chorus() {
    let output = '<p>Run to the hills, run for your lives</p>'
    // your code here

    return output
}

function verse2() {
    let output = '<p>Soldier blue in the barren wastes<br>Hunting and killing their game<br>Raping the women and wasting the men<br>The only good Indians are tame<br>Selling them whiskey and taking their gold<br>Enslaving the young and destroying the old></p>'
    return output
    // your code here
}

function buildUp() {
    let output = '<p>ooooooOoOoOOOehhhhEhEhEhEhuhhhh<br>HUhhhHUhhhhHuhhhAAAAAAAAAOOOOOWWWW</p>'
    return output
}



function main() {
    let finalOutput = "<p><br>[Intro]</p>"+intro()+"<br><br>"+"<p>[Verse 1]</p>"+verse1()+"<br><br>"+"<p>[Chorus]</p>"+chorus()+chorus()+"<br><br>"+"<p>[Verse 2]</p>"+verse2()+"<br><br>"+"<p>[Chorus]</p>"+chorus()+chorus()+"<br><br>"+"<p>[Guitar Solo]</p><br><br>"+"<p>[Build Up]</p>"+buildUp()+"<br><br>"+"<p>[Chorus]</p>"+chorus()+chorus()+chorus()+chorus() // used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput
}

window.onload = function () {
    main()
}

let click = 0
let readMore = document.querySelector('.moreText')
let dots = document.querySelector('.dots')
let btn = document.querySelector('#readMore')
let album = document.querySelector('.album')

function read(){
    if(click == 0){
        readMore.style.display = 'block'
        dots.style.display = 'none'
        click = 1
        btn.style.display = 'none'
        album.style.flexDirection = 'column'

        
    } else {
        readMore.style.display = 'none'
        dots.style.display = 'block'
        click = 0
        btn.style.display = 'block'
        album.style.flexDirection = 'row'
    }
}


