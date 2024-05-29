const FreeFire2 = document.querySelector("#btnTeste");
const escreve = document.querySelector("#textoHeader")
FreeFire2.onclick = () =>{
    alert("Faz o L");
}
const nome = "arroz é bom";

const escreveNome = (pos)=>{
    if(pos < nome.length){
        let saida = "";
        for(let i=0; i <= pos; i++){
            saida += nome[i];
            setTimeout(() => {
                escreve.innerHTML = saida;
                pos++;
                escreveNome(pos);
            }, 1000);
        }
    }
}

(()=>{
    escreveNome(0);
})();