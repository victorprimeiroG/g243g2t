let saida = "";
let lista = [8,10,1,0,99,42,80,69,13,22,58,25];
const ordenaBubble = () =>{
    let trocar = true;
    console.log[lista];
    while(trocar){
        trocar = false;
        let temporaria;
        for(let i = 0; i < lista.length - 1; i++){
            if(lista[i] > lista[i+1]){
                temporaria = lista[i];
                lista[i] = lista[i+1];
                lista[i+1] = temporaria;
                trocar = true;
                setTimeout(mostrar(),500);
                console.log[lista];
            }
        }
    }
    console.log(lista);
}
const mostrar = () =>{
    saida = "";
    for(let i=0; i<lista.length - 1; i++){
        saida += lista[i] + " - ";
    }
    saida += lista[lista.length-1];
    console.log(saida);
    document.getElementById("bubble").innerHTML = saida;
}
(()=>{
    mostrar();
})();