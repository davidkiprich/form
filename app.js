document.getElementById("btn").addEventListener("click", function(){
    var input = document.getElementById("input");
    var errorText = document.querySelector(".errorText");
    if(input.value === ""){
        // hozzáadjuk az error class-t az inputhoz         
        input.classList.add("error");        
    }else if (!input.value.includes("@") || !input.value.includes(".")){
        // hozzáadjuk az error class-t az inputhoz
        input.classList.add("error"); 
        errorText.style.display="block"    
    } else {
        localStorage.setItem('inputData', input);
        window.location.href = 'data.html';        
    }
});
// Űrlap eseménykezelője
document.querySelector(".hero-left-input").addEventListener('submit', function(event){
    event.preventDefault(); // űrlap beküldése megakakadályozása automatikusan
    var inputVal = document.getElementById("input").value;
    localStorage.setItem('inputData' , inputVal);
});
   