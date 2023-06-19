function Contar(){
    var res = document.querySelector('div#res')
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')

    if(ini.value.length==0 || fim.value.length==0 || passo.value.length==0){
        window.alert('[ERRO] faltam valores para preencher!')
    } else{
        res.innerHTML='Contando... \n'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if(p<=0){
            window.alert('Passo inválido, considerando como 1')
            p=1
        }

        if(i<f){
            //contagem normal
            for(let j=i; j<=f; j+=p){
                res.innerHTML += `${j} \u{1F449}`
            }

        } else{
            //contagem regressiva
            for(let j=i; j>=f; j-=p){
                res.innerHTML += `${j} \u{1F449}`
            }
        }
    }
    res.innerHTML += '\u{1F3C1}'
    res.style.textAlign='center' 

}