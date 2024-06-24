import { Status } from "./status";
import {Todo} from './Todo';


interface Metadata {
    assignee: string;
}

const todo: Todo<Metadata> = {
    description: 'Typescript lernen',
    status: 'open',
    data: {
        assignee: 'personi'
    }
};

let text = 'Hallo Welt!';

const add = function(left: number, right: number): number {
    return left + right;
};

// der typ ist nicht bekannt (uknown), besser als any weil es type checking enthaelt
const printer = function (value: string): void {

};

console.log(text); 