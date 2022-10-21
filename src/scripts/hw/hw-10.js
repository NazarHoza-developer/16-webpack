export function addDiv() {
    console.log('here');
    let div = document.createElement('div');
    document.body.append(div);
    div.classList.add("box");
    let divBox = document.querySelector(".box");
    setInterval(function(){
        divBox.innerHTML = "";
        for (let i = 0; i < 25; i++) {
            divBox.innerHTML += `<div class = "child" style="background-color: ${getRandomColor()};"></div>`;
           } 
    }, 500);
    function getRandomColor() { 
        let arrColors = ["red", "white", "blue", "orange", "green", "purple", "black", "yellow", "pink", "grey", "brown"];
        // console.log(Math.random(0, 10))
        return arrColors[Math.floor(Math.random(0, 7) * 10)];
    }
  };
