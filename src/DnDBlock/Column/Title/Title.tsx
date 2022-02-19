import React from "react";
import { TitleStyle } from './titileStyle';

interface IColumnProps {
    column: {
        id: string;
        title: string;
        taskIds: string[];
    },
}

export function Title ({column}: IColumnProps) {
    return (
       <TitleStyle>
           {column.title}
       </TitleStyle> 
    );
}