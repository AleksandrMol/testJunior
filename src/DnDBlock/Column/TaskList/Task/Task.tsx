import React from "react";
import { Draggable, DraggableProvided  } from 'react-beautiful-dnd';
import { TaskStyle } from './taskStyle';

interface IColumnProps {
    task: {
        id: string;
        content: string;
    },
    index: number,
}

export function Task ({task, index}: IColumnProps) {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided:DraggableProvided) => (
                <TaskStyle {...provided.draggableProps} {...provided.dragHandleProps} ref = {provided.innerRef}>
                    {task.content}
                </TaskStyle>
            )}
        </Draggable>
    );
}