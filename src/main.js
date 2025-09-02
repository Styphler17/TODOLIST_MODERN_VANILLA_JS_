class DB {
  static setApiURL(data) {
    this.apiURL = data;
  }
  static async findAll() {
    const response = await fetch(this.apiURL + "todos");
    return response.json();
  }
}

class TodoList {
  constructor(data) {
    this.domElt = document.querySelector(data.elt);
    DB.setApiURL(data.apiURL);
    this.todos = [];
    this.loadTodos();
  }
  
  async loadTodos() {
    this.todos = await DB.findAll();
    this.render();
  }

  render() {
    console.table(this.todos);
  }
}

new TodoList({
  elt: '#app',
  apiURL: 'https://68ad955a0b85b2f2cf3e1b0.mockapi.io/'
});