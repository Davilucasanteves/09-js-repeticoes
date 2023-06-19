function Tabuada(){
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    if(num.value.length==0){
        window.alert('[ERRO] indique o número!')
    } else{
        let n = Number(num.value)
        let i = 1
        tab.innerHTML = ''
        while(i<=10){
            let item = document.createElement('option')
            item.text= `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            tab.appendChild('item')
            i++
        }
    }
}