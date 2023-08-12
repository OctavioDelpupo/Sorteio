const nomes = document.querySelector("#sortearNome")
const button = document.querySelector("#generate")
const nomeSorteado = document.querySelector("#result")


button.addEventListener('click', function(){
    let count = 0
    let armazenarNomes = nomes.value.trim().split(/\s+/)    

    count = armazenarNomes.length
    let result = Math.floor(Math.random() * (count - 0 + 1)) + 0;

     document.querySelector('#result > span').textContent = armazenarNomes[result]    
})