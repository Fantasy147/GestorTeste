
// Forma.js
// Este arquivo contém a lógica para abrir e fechar a janela do formulário, além de validar os campos do formulário.

function abrirJanela() {
    document.getElementById("janela").style.display = "block";
}

function fecharJanela() {
    document.getElementById("janela").style.display = "none";
}

document.getElementById('overlay').style.display = 'flex'; // para abrir
document.getElementById('overlay').style.display = 'none'; // para fechar

// Função para validar o formulário antes de enviar

function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || telefone === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    fecharJanela();
    return true;
}

function guardar_def()  {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const Idioma = document.getElementById("idioma").value;
    const tema = document.getElementById("tema").value;
    
    alert("Definições guardadas com sucesso!\n\nIdioma: " +
        `Nome: ${nome}\nEmail ${email}\nIdioma ${Idioma}\nTema ${tema}`);

}

function resetar_def() {
    if (confirm("Tem certeza que queres restaurar as definições?")) {
        alert("Definições restauradas com sucesso!");
        //Redirecionar conta ao login apos alguns segundos
        setTimeout(function() {
            alert("Definições restauradas com sucesso!");
        } , 2500);
        
    } else {
        alert("Ação cancelada.");
    }
}

function confirmar_def() {
    if (confirm("Tem certeza que queres eliminar a tua conta?")) {
        if (confirm("Esta ação não pode ser desfeita.")) {
            alert("Conta eliminada com sucesso!");
            //Redirecionar conta ao login apos alguns segundos
            setTimeout(function() {
                window.location.href = "Início.html"; // Redireciona para a página de login após 3 segundos
            }, 2500);
            
        }else {
            alert("Ação cancelada.");
        }
    } else {
        alert("Ação cancelada.");
    }
}
document.getElementById("enviar").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    if (validarFormulario()) {
        // Se o formulário for válido, você pode adicionar a lógica para enviar os dados
        // Aqui você pode adicionar a lógica para enviar o formulário, se necessário
        // Por exemplo, usando AJAX ou redirecionando para outra página
        // window.location.href = "pagina_de_sucesso.html";
    }
}); // Fechando o parêntese que estava faltando

function filtrarTabela() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("pesquisar");
    filter = input.value.toUpperCase();
    table = document.querySelector(".tabela_geral");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
}
