import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  todos = [];
  todoItem = "";

  addTodo() {
    if (this.todoItem !== "") {
      this.todos.push(this.todoItem);
    }
    this.todoItem = "";
  }

  todoConcat(event) {
    this.todoItem = event.target.value;
  }

  deleteTodo(ind) {
    this.todos.splice(ind, 1);
  }

  constructor() {}

  ngOnInit(): void {}
}
