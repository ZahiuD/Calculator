let userInputSpan= document.querySelector("#userInput");
let calculator = document.querySelector("#calculator");

function main(){
    calculator.addEventListener("click", function(elem) {
        buttonClick(elem.target.id);  
    });

    function buttonClick(buttonId) { //fac operatii pe baza id-urilor atribuite in fisierul html
        if (userInputSpan.value == "" && (buttonId == "inverse" || buttonId == "equal" || buttonId == "*" || buttonId == "/")){
            alert("Introdu intai un numar, apoi un semn care sa prelucreze numarul introdus");
            buttonId="";
        }
        if (buttonId != "clear" && buttonId != "equal" && buttonId != "inverse") {
            storeInput(buttonId);
        }
        if (buttonId == "inverse"){  //am apasat pe "1/x"
            inverseFunc(buttonId);
            }
    }

    function storeInput(auxiliar) {
        let auxiliar2 = userInputSpan.value.length;  //var ajutatoare pt a detecta 2 semne de operatie introduse unul dupa altul
        if ((userInputSpan.value[auxiliar2 - 1] == "*" || userInputSpan.value[auxiliar2 - 1] == "/" || userInputSpan.value[auxiliar2 - 1] == "+" || userInputSpan.value[auxiliar2 - 1] == "-") && 
           (userInputSpan.value[auxiliar2-2] == "*" ||userInputSpan.value[auxiliar2 -2] == "/" ||userInputSpan.value[auxiliar2-2] == "+" ||userInputSpan.value[auxiliar2-2] == "-")){
            alert("ai introdus 2 semne consecutive");
            erase();
        }

        if (userInputSpan.value.includes("calculator") ==  true) {  //in momentul in care user-ul apasa pe golurile dintre numere, se 
                                                //returneaza id-ul "calculator", al div-ului in care sunt semnele si nr
            alert("Ai apasat din greseala pe marginile dintre numere! Reia calculul!");
            erase();
        }
        
        userInputSpan.value += auxiliar;  //adaug numarul/semnul in expresia pe care o voi calcula ulterior
    }

    function inverseFunc(auxiliar){
        userInputSpan.value = 1/eval(userInputSpan.value);
    }
    
    let equalButton = document.querySelector("#equal");
    equalButton.addEventListener("click", doExpresion); //cand se apasa pe egal se evalueaza expresia

    function doExpresion() {  
        userInputSpan.value = eval(userInputSpan.value);
    }

    let clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", erase);  //golesc variabila in care am expresia calculata/rezultatul expresiei calculate

    function erase() {
        userInputSpan.value = "";
        buttonId = "";
    }

}

 main();