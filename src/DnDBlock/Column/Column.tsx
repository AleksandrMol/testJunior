import React, { Fragment } from "react";
import { Container } from './colymnStyle';
import { TaskList } from "./TaskList";
import { Title } from "./Title/Title";

interface IColumnProps {
    column: {
        id: string;
        title: string;
        taskIds: string[];
    },
    tasks: {
        id: string;
        content: string;
    }[],
    type: 'line' | 'word';
}

export default function Column({column, tasks, type}: IColumnProps) {
    return (
        <TaskList  tasks = {tasks} column={column} type={type}/>
    );
}