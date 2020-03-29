function Class(arg){

    return document.getElementsByClassName(arg)
}

function Id(arg){

    return document.getElementById(arg)
}

var Maps = Class('map')

var yellow = Class("yellow")
var red = Class("red")
var blue = Class("blue")
var green = Class("green")

var Box= Id('box')
var Title = Id('title')
var Dates = Id('dates')
var Info = Id('info')
var Select = Id('select')

var Year = 2020

const loop = () => {

    Year = Select.value

    for (let v=0;v<Maps.length;v++){

        if (Year == Maps[v].id){
    
            Maps[v].classList.remove('hidden')
        }else{
    
            Maps[v].classList.add('hidden')
        }
    }
}

setInterval(loop, 1000/60)

var list = [...yellow, ...blue, ...red, ...green]

for (let i=0; i<list.length;i++){

    list[i].onclick = () => { 

        var name = list[i].id.toUpperCase().replace(/_/gi, " ")

        // Special Cases
        switch (name){

            case 'UNITED STATES AMERICA':
                name = 'UNITED STATES OF AMERICA'
                break
            case 'DEMOCRATIC REPUBLIC CONGO':
                name = 'DEMOCRATIC REPUBLIC OF THE CONGO'
                break
            case 'PHILIPPINES':
                name = 'THE PHILIPPINES'
                break
        }

        Title.innerHTML = name

        Object.entries(W).forEach( ([key, value]) => {
            
            if (name == key){

                Dates.innerHTML = value.date
                Info.innerHTML = value.info
            }

        })
    }
}