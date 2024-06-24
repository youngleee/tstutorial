import {Todo} from './Todo';
import {v4} from 'uuid';

class TodoList<TData> {
    private todos: Todo<TData>[];

    public constructor(){
        this.todos = [];
    }

    public note (description: string, data: TData): string {
        const id = v4();

        const todo: Todo<TData> = {
            id,
            description,
            status: 'open',
            data
        };
        this.todos.push(todo);

        return id;
    }

    public edit(id: string, description: string): void{
        const todo = this.todos.find(todo => todo.id ===id);
    }
}

export {TodoList};