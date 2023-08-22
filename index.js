function btnOnClick(btnClass) {
    for (let i = 1; i < 6; i++) {
        //background-color: hsl(213, 20%, 29%);
        //color: hsl(217, 12%, 63%);
        if ('.' + btnClass !== '.btn-' + i) {
            document.querySelector('.btn-' + i).style.backgroundColor = 'hsl(213, 20%, 29%)';
            document.querySelector('.btn-' + i).style.color = 'hsl(217, 12%, 63%)';
        }
        else {
            document.querySelector(".number").innerHTML = i;
        }

    }
    document.querySelector('.' +btnClass).style.backgroundColor = 'rgb(251, 119, 24)';
    document.querySelector('.' + btnClass).style.color = 'white';
    
    setTimeout(() => {document.querySelector('.' +btnClass).style.backgroundColor = 'hsl(217, 12%, 63%)'}, 2000    )   

}

function onClickSubmit() {
    document.querySelector('.component').innerHTML = '';
    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
    document.querySelector('.selected').innerHTML = "You selected " + document.querySelector(".number").textContent + " out of 5"
}