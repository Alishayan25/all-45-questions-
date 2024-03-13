

let gustArray:string[] =["ali","hassan","shane"];

gustArray.map((items)=> console.log(`Hellow,${items} you are invited to dinner`))

let canNotreach:string = "shane"

console.log(`${canNotreach} can not make it on the dinner `)

let newgust:string ="salman";

gustArray[gustArray.indexOf(canNotreach)] =newgust
console.log(gustArray)
