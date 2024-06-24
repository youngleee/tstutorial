import {Status} from "./status";

interface Todo<TData> {
    description: string;
    status: Status;
    data: TData;
}

export{Todo};