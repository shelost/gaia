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

var Slider = Id('slider')
Slider.step = "100"

var YearText = Id('year')

var Year = 2020

const loop = () => {

    Year = Slider.value
    
    if (Slider.value < 1800){

        Slider.value = 1700
    }

    for (let v=0;v<Maps.length;v++){

        if (Year == Maps[v].id){
    
            Maps[v].classList.remove('hidden')
        }else{
    
            Maps[v].classList.add('hidden')

        }
    }

    YearText.innerHTML = Year

}

setInterval(loop, 1000/60)

var list = [...Class('yellow'), ...Class('blue'), ...Class('red'), ...Class('green'), ...Class('pink'), ...Class('orange')]

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
            case 'KINGDOM ITALY':
                name = 'KINGDOM OF ITALY'
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