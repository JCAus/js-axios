let p = document.querySelector('p')
const btn = document.getElementById("btn")

function showTrivia(res){
    let h3 = document.createElement('h3')
    h3.innerHTML = res
    p.append(h3)
}

btn.addEventListener('click', function(){
    p.innerHTML = ""
    let favNum = document.getElementById("number").value;
    let url = `http://numbersapi.com/${favNum}/`

    for(i=0;i<4;i++){
        axios.get(url).then(res => {showTrivia(res.data)})
    }
})


    
