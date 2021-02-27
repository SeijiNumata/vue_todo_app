const vm = new Vue({
  el: '#app',
  data: {
    todos: [],
    newTodoTitle: ''
  },
  methods: {
    addTodo: function () {
      this.todos.push({
        title: this.newTodoTitle,
        isChecked: false
      })
      this.newTodoTitle = ''
      this.saveTodo()
    },
    deleteTodo: function (index) {
      this.todos.splice(index, 1)
      this.saveTodo()
    },
    saveTodo: function () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    loadTodo: function () {
      this.todos = JSON.parse(localStorage.getItem('todos'))
      if (!this.todos) {
        this.todos = []
      }
    }
  },
  mounted: function () {
    this.loadTodo()
  }

})
