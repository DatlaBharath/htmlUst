function sayHI(){

    let i = document.getElementById("val").value
    let j = ["atul","bharath","kausthub","niraj","vikas bro"];
    let m=5
    let list = ["aqua","red","blue","black","grey","yellow","pink","white"]
    document.body.style.backgroundColor = list[Math.floor(Math.random()*8)]
    

    if (document.body.style.backgroundColor == "black") {
        document.body.style.color = "white"
    } else {
        document.body.style.color = "black"
    }
    // document.write('hello<p id="h"></p>') 
    var mon = new Date().getMonth()
    document.getElementById('h').innerHTML = `<h1>Welcome to ${i} </h1>`
    document.getElementById('h').innerHTML += `<h1>${document.body.style.backgroundColor}</h2>`
    document.getElementById('h').innerHTML += `<h1>hello namaste</h2>`
    document.getElementById('h').innerHTML +=`yo yo yo ${i.length > 5 ? "your are long bro" : "your are short bro"} <br>`
    document.getElementById('h').innerHTML += ` ${0/0} ${18/0} ${j}`
    document.getElementById('h').innerHTML += `${Number(true)} <br>`
    document.getElementById('h').innerHTML += `${isNaN("hello")} <br>`
    document.getElementById('h').innerHTML += `${Number.isNaN(Number("hello"))} <br>`
    document.getElementById('h').innerHTML += mon == 7 ? `its monsoon ${mon}` : `other season`
}
