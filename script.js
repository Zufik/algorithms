/*




Spočítejte průměr všech čísel v poli.
Spočítejte součet všech kladných čísel v poli.DONE
*/
//ALL NUMBERS
const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ]
  
numbers.map(num => {
  const prvniUkol = document.querySelector('.column1')
  prvniUkol.innerHTML += `<p> ${num}</p>`
})


// druha mocnina
numbers.map(num => {
  const pawNumber = Math.pow(num,2)
  const druhyUkol= document.querySelector('.column2')
  druhyUkol.innerHTML+= `<p>${pawNumber}</p>`

})
//zaporná čísla
const negArray = numbers.filter(negNum)
function negNum (num){
  return num < 0
}

const tretiUkol = document.querySelector('.column3')
tretiUkol.innerHTML+= negArray.map(item=>`<p>${item}</p>`).join('')


//absolutní čísla
numbers.map(num=>{
  const absolute = Math.abs(num)
  const ctvrtyUkol = document.querySelector('.column4')
  ctvrtyUkol.innerHTML += `<p>${absolute}</p>`
})

// sudá čísla
const evenArray = numbers.filter(evenNum)
function evenNum (num){
  return num%2 ===0
}

const patyUkol = document.querySelector('.column5')
patyUkol.innerHTML += evenArray.map(item => `<p>${item}</p>`).join('')

// jen čísla dělitelná třemi
const numByThree = numbers.filter(three)
function three(num){
  return num%3===0
}
const sestyUkol = document.querySelector('.column6')
sestyUkol.innerHTML += numByThree.map(item => `<p>${item}</p>`).join('')

//vzdálenost od čísla 5
const numberFive = 5
const vzdalenostOdPětky = numbers.map(num =>numberFive - num)

const sedmyUkol= document.querySelector('.column7')
sedmyUkol.innerHTML+= vzdalenostOdPětky.map(item => `<p>${item}</p>`).join('')

//TOTAL NUMBERS

const numTotal = numbers.length
//Záporná

const totalNeg = negArray.length


//Kladná
const positiveNumbers =  numTotal-totalNeg

//Zápis
const total = document.querySelector('.column1total')
total.innerHTML+= `<strong>Celkem čísel je: </strong> ${numTotal}, z toho je kladných čísel ${positiveNumbers} a záporných je ${totalNeg}.`

//Součet čísel v poli

let soucet = numbers.reduce((acc, curr) => acc + curr, 0);
const totalInArray = document.querySelector('.column2total')
totalInArray.innerHTML+= `Součet všech čísle v poli je: <strong>${soucet}</strong>`

//průměr všech čísel v poli
let avarageNum = soucet / numTotal

const avarageNumNote = document.querySelector('.column3total')
avarageNumNote.innerHTML += `Průměr všch čísel v poli je: ${avarageNum}`