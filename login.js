const user = document.getElementById("user");
const password = document.getElementById("password");

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const resultado = cuentas.find((cuenta) => {
    return cuenta.nombre === user.value && cuenta.password === password.value;
  });

  if (!!resultado) {
    localStorage.setItem("user", JSON.stringify(resultado));
    location.href = "cajero.html";
  }
});
