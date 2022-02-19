import React from "react";
import { Droppable ,DroppableProvided  } from 'react-beautiful-dnd';
import { TaskListStyleWord, TaskListStyleLine } from './taskListStyle';
import { Task } from './Task/Task';

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

export function TaskList ({tasks, column, type}: IColumnProps) {
    if (type === 'line') {
        return (
            <Droppable droppableId={column.id} direction="horizontal">
                {(provided: DroppableProvided ) => (
                    <TaskListStyleLine ref={provided.innerRef} {...provided.droppableProps}> 
                        {tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                        {provided.placeholder}
                    </TaskListStyleLine>
                )}
            </Droppable>
        );
    }
    if (type === 'word') {
        return (
            <Droppable droppableId={column.id} >
                {(provided: DroppableProvided ) => (
                    <TaskListStyleWord ref={provided.innerRef} {...provided.droppableProps}> 
                        {tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                        {provided.placeholder}
                    </TaskListStyleWord>
                )}
            </Droppable>
        );
    }
    else{
        return(
            <div>Что-то явно идёт не так(</div>
        )
    }
}