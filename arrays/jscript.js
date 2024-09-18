let data = ["atul","kausthub","niraj","bharath","vikas bro"]
console.log(data)
document.writeln(`the game started ${data.splice(Math.floor(Math.random()*data.length), 1)} got killed ${data.splice(Math.floor(Math.random()*data.length), 1)} reported the body ${data.splice(Math.floor(Math.random()*data.length), 1)} is evicted ${data.splice(Math.floor(Math.random()*data.length), 1)} is got stabbed imposter ${data.splice(Math.floor(Math.random()*data.length), 1)} wins <div id="a"></div>`)



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// filter

const data1 = [3,6,9,5,7,3,65,66]

const filteredData = data1.filter((n)=>{
    return n%3 == 0;
})

const ReducedData = data1.reduce((n,m)=>{
    console.log(n)
    return n+m;
})

document.write(filteredData)
document.write(ReducedData)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.write("<table border=1>")
document.write("<tr>")
document.write("<th>table</th>")
for(i=1;i<101;i++){
    document.write(`<th>${i}</th>`)
}
document.write("</tr>")
for(i=1;i<101;i++){
    document.write("<tr>")
    document.write("<th>"+i+"</th>")
    for(j=1;j<101;j++){
        document.write(`<td>${i*j}</td>`)
    }
    document.write("</tr>")
}
document.write("</table>")

// ------------------------------------------------------------------------------------------------------------------------

document.write("<h2>Sudoko</h2>")

/* div.container>div.row>div.container*9>div.row>div.block*9>{&nbsp;} */


b = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]
c = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]
r = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]



document.write('<div class="container">')

    document.write('<div class="row">')

        for(i=0;i<9;i++){
            document.write('<div class="container">')

                document.write('<div class="row">')

                    for(j=0;j<9;j++){
                        row = i<3 ? (j<3 ? 0 : j<6 ? 1 : 2) : i<6 ? (j<3 ? 3 : j<6 ? 4 : 5) : j<3 ? 6 : j<6 ? 7 : 8;
                        block = i;
                        col = i%3==0 ? (j%3==0 ? 0 : j%3==1 ? 1 : 2) : i%3==1 ? (j%3==0 ? 3 : j%3==1 ? 4 : 5) : j%3==0 ? 6 : j%3==1 ? 7 : 8;
                        
                        let intersection = r[row].filter(value => b[block].includes(value) && c[col].includes(value));
                        
                        val = intersection[Math.floor(Math.random()*intersection.length)];
                        
                        
                        let indexb = b[block].indexOf(val);
                        b[block] = b[block].slice(0,indexb)+b[block].slice(indexb+1)

                        // let indexr = r[row].indexOf(val);
                        // r[row] = r[row].slice(0,indexr)+r[row].slice(indexr+1)

                        let indexc = c[col].indexOf(val);
                        c[col] = c[col].slice(0,indexc)+c[col].slice(indexc+1)


                        console.log(val)
                        
                        document.write('<div class="block">')
                    
                            // document.write(`row : ${row+1}, col : ${col+1}, block : ${block+1}`)
                            document.write(val)

                        document.write('</div>')
                    }

                document.write('</div>')

            document.write('</div>')
        }

    document.write('</div>')

document.write('</div>')

// -----------------------------------------------------------------------------------------------------------

const sq = (n) => {
    return n*n
}

const m = () => {
    return "magic"
}
const k = (a,b) => a+b
// alert(sq(6))
// alert(m())
// alert(k(4,5))

// -------------------------------------------------------------------------------------------------
document.write("<h1>callback</h1>")


let eve = (n) => n%2 == 0

let p = (evef,n)=> `${n} is even : ${evef(n)}`

// alert(p(eve,8))

// -------------------------------------------------------------------------------------------------

document.write("<h1>objects</h1>")

var jsonRef = {
    data : [
        {company : "Google",location: "Sanfransisco",country : "USA", noOfEmployees: 1500000},
        {company : "Infosys",location: "Bengalore",country : "India", noOfEmployees: 2500000},
        {company : "TCS",location: "Povai Mumbai",country : "India", noOfEmployees: 5500000},
        {company : "UST",location: "Trivendrum",country : "India", noOfEmployees: 80000},
        {company : "Nvidea",location: "Santaclara",country : "USA", noOfEmployees: 400000},
        {company : "VTS",location: "Chennai",country : "India", noOfEmployees: 10000},
        {company : "MuSigma",location: "Bengalore",country : "India", noOfEmployees: 40000},
        {company : "AlphaMuSigma",location: "Austin",country : "USA", noOfEmployees: 400},
        {company : "InfoBlock",location: "Trivendrum",country : "India", noOfEmployees: 10000},
        {company : "Docker, Inc.",location: "Palo Alto",country : "USA", noOfEmployees: 200000}
    ]
}

console.log(jsonRef["data"])

var movie = {name : "taitanic",year : 1997}
movie.hero = "jack"
console.log(movie)
console.log(movie.name)
console.log(movie.year)
console.log(movie.hero)

jsonRef.data.forEach(element => {
    document.write(`<h3>the ${element.company} hq is currently loacted in the ${element.location},${element.country}</h3>`)
});
document.write(`<h2>USA Comapanies</h2>`)
jsonRef.data.filter((e) => e.country == "USA" ).forEach((element) =>{
    document.write(`<h3>the ${element.company} hq is currently loacted in the ${element.location},${element.country}</h3>`)  
})

document.write(`<h2>India Comapanies</h2>`)
jsonRef.data.filter((e) => e.country == "India" ).forEach((element) =>{
    document.write(`<h3>the ${element.company} hq is currently loacted in the ${element.location},${element.country}</h3>`)  
})

document.write(`<h2>Chota Comapanies</h2>`)
jsonRef.data.filter((e) => e.noOfEmployees < 100000).forEach((element) =>{
    document.write(`<h3>the ${element.company} hq is currently loacted in the ${element.location},${element.country}</h3>`)  
})

document.write(`<h2>Bhada Comapanies</h2>`)
jsonRef.data.filter((e) => e.noOfEmployees >= 100000 ).forEach((element) =>{
    document.write(`<h3>the ${element.company} hq is currently loacted in the ${element.location},${element.country}</h3>`)  
})


// i did not said my name 0

// i did not give eye contact 0

//topic - easy relavent 5

// demonstated every thing i want to demonstate 4

// time management 3

// scriipt b=very bad 1