let topish = document.getElementById('Salom')

function salom(){
    let text = prompt('Hohlagan jumlani kiriting :: ')
    let salom = 0
    for(let i = 0; i<text.length; i++){
        if(text.slice(i, i+5) === 'Salom'){
            salom+=1
        }
    }

    topish.innerHTML = salom

}
