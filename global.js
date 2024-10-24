const msg = document.querySelector("#msg");
const email = document.querySelector("#email");
const nome = document.querySelector("#nome");

const formBtn = document.querySelector("#enviaFormContato");

formBtn.addEventListener("click", validarDados);

function validarDados(event){
    event.preventDefault();
    
    if (msg.value && email.value && nome.value) {
        var objectDadosForm = {
            msg: msg.value,
            email: email.value,
            nome: nome.value,
        }

        localStorage.setItem("dados_formulario", JSON.stringify(objectDadosForm));

        window.location.href = 'index.html';
    } else {
    }

}