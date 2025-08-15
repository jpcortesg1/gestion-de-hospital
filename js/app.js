async function initializeApp() {
  console.log("🚀 Iniciando aplicación");

  window.loginView = new LoginView();
  console.log(window.loginView);
  window.loginView.render();

  const btnLogin = document.getElementById("btn-login");
  window.loginView.addEventListener(btnLogin, "click", () => {
    console.log("se ejecuto el boton");
    alert("si funciona");
  });

  setTimeout(() => {
    window.loginView.destroy();
  }, 5000);

  console.log("✅ Sistema cargo correctamente");
}
