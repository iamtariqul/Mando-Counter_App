let count = 0;

const value = document.querySelector("#value");
const button = document.querySelectorAll(".btn");

button.forEach(function(btns){
    btns.addEventListener("click", function(e){
        const see = e.currentTarget.classList;
        if(see.contains("decrease")){
            count--;
        }
        else if(see.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
                }
        if(count === 0){
            value.style.color = "black";
        }

        value.textContent = count;
    })
})