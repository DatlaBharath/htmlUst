a=["r","s","p"]
c=0
p=0
x=0
document.getElementById("s1").innerHTML = 0
document.getElementById("s2").innerHTML = 0
function rock(i){
    // document.getElementById("s1").innerHTML = i
    ch=a[Math.floor(Math.random()*3)]
    if(ch=="p"){
        document.getElementById("s3").innerHTML = "computer choosen paper user chosen " + ((i == "p") ? "Paper" :( i=="r") ? "Rock" : "✂")
    }else if(ch=="r"){
        document.getElementById("s3").innerHTML = "computer choosen rock user chosen " + ((i == "p") ? "Paper" : (i=="r" )? "Rock" : "✂")

    }else{
        document.getElementById("s3").innerHTML = "computer choosen scissors user chosen "+ ((i == "p")? "Paper" : (i=="r" )? "Rock" : "✂")
    }
    if(i=="r"){
        ch=="s"?
        document.getElementById("s1").innerHTML = ++p:
        (ch=="p"?
        document.getElementById("s2").innerHTML = ++c:
        x=0)
    }
    else if(i=="s"){
        ch=="p"?document
        .getElementById("s1").innerHTML = ++p :(ch=="r"?document
        .getElementById("s2").innerHTML =++c:x=0)
    }
    else{
        ch=="r"?document
        .getElementById("s1").innerHTML = ++p:(ch=="s"?document
        .getElementById("s2").innerHTML =++c:x=0)
    }
}