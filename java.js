const x='lala'
let y
var w
y='lele'
w='lulu'
console.log(window.x)
console.log(window.y)
console.log(window.w)

if(true){
    var f=400
    const g=500
    let h=600
    y='pepe'
}
console.log(f)

function go(){
    const valor1=document.querySelector('.input1').value
    const valor2=document.querySelector('.input2').value
    if(valor2!=''){
        juntar(valor1,valor2)
    }
    else{
        juntar(valor1)
    }
}

function juntar(valor1,valor2='DEFAULT'){
    document.querySelector('.juncao').innerHTML= `A frase é${valor1 + valor2}`
}

let a;let b;let c
[a,b=3,c=3]=[6,9]
/*
console.log(a)
console.log(b)
console.log(c)
*/
/*
const lista=[30,45,65,10,25]
for(item of lista){
    console.log(item)
}

lista.forEach((valor,index)=>{
    console.log(`sou ${valor} e estou na posiçao ${index}`)
})

for(let i=0;i<lista.length;i++){
    if(lista[i]>35){console.log(i)}
}

*/


