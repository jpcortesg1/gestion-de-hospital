class LoginView extends BaseView {
  constructor(containerId = "login-screen") {
    super(containerId);
  }

  render(data = {}) {
    const template = `
      <div  style="width: 300px; margin: 100px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; font-family: Arial, sans-serif;">
        <h2 style="text-align: center; margin-bottom: 20px; color: #333;">Login</h2>
        
        <form>
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px; font-weight: bold;">Usuario:</label>
                <input type="text" name="usuario" required 
                        style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
            </div>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 5px; font-weight: bold;">Contraseña:</label>
                <input type="password" name="password" required 
                        style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
            </div>
            
            <button type="submit" id="btn-login" 
                    style="width: 100%; padding: 12px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">
                Entrar
            </button>
        </form>
      </div>
    `;
    this.container.innerHTML = template;
    this.isRendered = true;
  }
}

window.LoginView = LoginView;
console.log("🔐 LoginnView cargado");
