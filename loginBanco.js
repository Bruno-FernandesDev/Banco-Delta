function login(){

    conta = document.getElementById("conta")
    password = document.getElementById("senha")


console.log (conta.value + password.value)

if(conta.value === "12345678" && password.value === "12345"){

    Swal.fire({
        icon: 'success',
        text: 'Login efetuado ',
      })

} else if (conta.value != "12345678" && password.value != "12345"){

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Login não efetuado',
      })

} else {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Login não efetuado',
      })
}
}