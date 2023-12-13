function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
}


function formatDateInput(input) {
    let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (value.length > 8) {
        value = value.substring(0, 8); // Limita a 8 caracteres
    }

    const formattedValue = value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');

    input.value = formattedValue;
}


function formatCPFInput(input) {
    let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (value.length > 11) {
        value = value.substring(0, 11); // Limita a 11 caracteres
    }

    const formattedValue = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');

    input.value = formattedValue;
}


function validatePassword() {
    const senha = document.getElementById("senha").value;
    const confirmacaoSenha = document.getElementById("confirmacaoSenha").value;
    const senhaMatch = document.getElementById("senhaMatch");

    if (senha === confirmacaoSenha) {
        senhaMatch.textContent = "As senhas coincidem";
        senhaMatch.style.color = "green";
    } else {
        senhaMatch.textContent = "As senhas não coincidem";
        senhaMatch.style.color = "red";
    }
}