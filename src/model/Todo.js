/**
 * Created by rojo on 5/10/17.
 */

export default class Todo {
    constructor(todo, completed = false) {
        this.what = todo;
        this.when = new Date().toLocaleString();
        this.completed = completed;
    }
}