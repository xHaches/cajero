const btnConsulta = document.getElementById("consulta");
const btnIngresar = document.getElementById("ingresar");
const btnRetirar = document.getElementById("retirar");
const root = document.getElementById("root");

const resetRoot = () => {
  root.innerHTML = "";
};

btnConsulta.addEventListener("click", (e) => {
  resetRoot();
  const user = JSON.parse(localStorage.getItem("user"));
  const cuenta = cuentas.find((c) => {
    return c.nombre === user.nombre && c.password === user.password;
  });
  const saldo = document.createElement("h2");
  saldo.innerText = cuenta.saldo;
  root.appendChild(saldo);
});

btnIngresar.addEventListener("click", (e) => {
  resetRoot();
  const user = JSON.parse(localStorage.getItem("user"));
  const cuenta = cuentas.find((c) => {
    return c.nombre === user.nombre && c.password === user.password;
  });

  const form = document.createElement("form");

  const labelSaldo = document.createElement("label");
  labelSaldo.setAttribute("for", "monto");
  labelSaldo.innerText = "Escribe el monto a ingresar";

  const saldoAIngresar = document.createElement("input");
  saldoAIngresar.setAttribute("name", "saldoAIngresar");
  saldoAIngresar.setAttribute("type", "number");
  saldoAIngresar.setAttribute("id", "saldoAIngresar");

  const btnConfirm = document.createElement("button");
  btnConfirm.setAttribute("type", "submit");
  btnConfirm.innerText = "Confirmar";

  let error;

  btnConfirm.addEventListener("click", (e) => {
    if (error?.innerHTML) {
      error.innerHTML = "";
    }
    e.preventDefault();
    const total = Number(cuenta.saldo) + Number(saldoAIngresar.value);
    if (total > 990) {
      error = document.createElement("span");
      error.innerText = "No puedes tener más de $990 de saldo";
      form.appendChild(error);
      return;
    }
    cuentas = cuentas.map((c) => {
      if (c.nombre === user.nombre && c.password === user.password) {
        return {
          ...cuenta,
          saldo: total,
        };
      }
      return c;
    });
    form.reset();
  });

  form.appendChild(labelSaldo);
  form.appendChild(saldoAIngresar);
  form.appendChild(btnConfirm);
  root.appendChild(form);
});

btnRetirar.addEventListener("click", (e) => {
  resetRoot();
  const user = JSON.parse(localStorage.getItem("user"));
  const cuenta = cuentas.find((c) => {
    return c.nombre === user.nombre && c.password === user.password;
  });
  const form = document.createElement("form");

  const labelSaldo = document.createElement("label");
  labelSaldo.setAttribute("for", "monto");
  labelSaldo.innerText = "Escribe el monto a retirar";

  const saldoAIngresar = document.createElement("input");
  saldoAIngresar.setAttribute("name", "saldoAIngresar");
  saldoAIngresar.setAttribute("type", "number");
  saldoAIngresar.setAttribute("id", "saldoAIngresar");

  const btnConfirm = document.createElement("button");
  btnConfirm.setAttribute("type", "submit");
  btnConfirm.innerText = "Confirmar";

  let error;

  btnConfirm.addEventListener("click", (e) => {
    if (error?.innerHTML) {
      error.innerHTML = "";
    }
    e.preventDefault();
    const total = Number(cuenta.saldo) - Number(saldoAIngresar.value);
    if (total < 10) {
      error = document.createElement("span");
      error.innerText = "No puedes tener menos de $10 de saldo";
      form.appendChild(error);
      return;
    }
    cuentas = cuentas.map((c) => {
      if (c.nombre === user.nombre && c.password === user.password) {
        return {
          ...cuenta,
          saldo: total,
        };
      }
      return c;
    });
    form.reset();
  });

  form.appendChild(labelSaldo);
  form.appendChild(saldoAIngresar);
  form.appendChild(btnConfirm);
  root.appendChild(form);
});
