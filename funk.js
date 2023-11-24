// https://www.w3schools.com/js/js_functions.asp

// function funk() {
//     console.log("funk.js")
// }

// funk()
// funk()
// funk()
// funk()

const school = "WBS"

function courseGreeter(student = "student", batch = 46){
    const school = "Enrique's school"
    console.log("Welcome to the course " + student+` your batch is number ${batch} in ${school}`)
}

// courseGreeter("Tania", 30)
// courseGreeter("Subaru", 46)
// courseGreeter("Nestor")
// courseGreeter("Antonio")
// courseGreeter("Lena")
// courseGreeter("Mustafa")
// courseGreeter("Mr.Jones")
// courseGreeter()

// console.log(school)



function dynamite(){
    console.log("BOOM!")
}

const bomb = () => console.log("BOOM!")

// dynamite()
// bomb()

const adder = (num1, num2) => num1 + num2

console.log(adder(5, 10))

const multuplyBy2 = num1 => num1*2

const result = multuplyBy2(50)

console.log(result)