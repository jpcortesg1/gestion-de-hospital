class BaseView {
  constructor(containerId) {
    this.containerId = containerId;
    this.container = document.getElementById(containerId);
    this.eventListeners = [];
    this.isRendered = false;

    if (!this.container) {
      throw new Error(`Container ${containerId} no se encontro`);
    }
  }

  /**
   * Renderizar la vista (debe ser implementada por la subclase)
   */
  render(data = {}) {
    throw new Error("Método render debe ser implementado por la subclase");
  }

  addEventListener(element, event, handler) {
    element.addEventListener(event, handler);
    this.eventListeners.push({ element, event, handler });
  }

  destroy() {
    this.removeAllEventListener();
    this.container.innerHTML = "";
    this.isRendered = false;
  }

  removeAllEventListener() {
    this.eventListeners.forEach((eventListener) => {
      const { element, event, handler } = eventListener;
      element.removeEventListener(event, handler);
    });
    this.eventListeners = [];
  }
}

window.BaseView = BaseView;
console.log("🏭 BaseView cargado");
