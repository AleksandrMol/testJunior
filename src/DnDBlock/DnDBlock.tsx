import React from "react";
import { initialData } from "./initial-data";
import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd';
import { Lines, Words } from "./dnDBlockStyle";
import Column from "./Column/Column";
import { CheckButton } from "./CheckButton/CheckButton";

export type DataType = {
  tasks: {
    [N: string]: {
      id: string, 
      content: string
    }
  }
  columns: {
    [N: string]: {
      id: string,
      title: string,
      taskIds: Array<string>,
    },
  }
  columnOrder: Array<string>,
  wordOrder: Array<string>,
  correctAnswer: string,
};

const Data: DataType = initialData;

const forSort = Data.wordOrder.map((wordField) => {
  const word = Data.columns[wordField];
  return word;
})

function DnDBlock () {
  const [dataState, setDataState] = React.useState(Data);
  

  const onDragEnd: OnDragEndResponder = (result) => {
    const { destination, source, draggableId } = result;
    
    if (!destination) {
      return; // Если промахнуться мимо места, куда можно поместить элемент, то ничего не произойдёт.
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return; // Если элемент никуда не переместить, то код ничего не делает.
    }
    
    const start = dataState.columns[source.droppableId]; // Объект колонки источника
    const finish = dataState.columns[destination.droppableId]; // Объект колонки пункта назначения
    
    if (
        dataState.wordOrder.includes(start.id)
        &&
        dataState.wordOrder.includes(finish.id)) {
      return;
    }

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId); // Массив newTaskIds меняется в соответствии с тем, что на экране.
      

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...dataState,
        columns: {
          ...dataState.columns,
          [newColumn.id]: newColumn,
        },
      };

      setDataState(newState);
      return;
    }
    
    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...dataState,
      columns: {
        ...dataState.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setDataState(newState);
    // сортировка для полей со словами
    if (
        dataState.columnOrder.includes(start.id)
        &&
        dataState.wordOrder.includes(finish.id)
      ) {
      
      const sortDraggableIndex = forSort.findIndex(word => word.taskIds[0] == draggableId);
      const sortWord = {
        ...dataState.columns,
        [newStart.id]: newStart,
        [dataState.wordOrder[sortDraggableIndex]]: forSort[sortDraggableIndex],
      }
      const sortState = {
        ...dataState,
        columns: sortWord,
      }
      setTimeout(() => {
        
       
        setDataState(sortState);
      }, 400);
      return;
    }

  }

  const wordsInLines = dataState.columnOrder.map(line => { // это для кнопки с проверкой ответа
    const disBool = dataState.columns[line].taskIds.length == 0 ? true : false;
    return disBool;

  }).includes(false)? false : true;

  const answer = dataState.columnOrder.map((line) => {
    const wordsIds = Array.from(dataState.columns[line].taskIds);
    const wordsContent = wordsIds.map(wordId => {
      return dataState.tasks[wordId].content;
    }).join(' ');
    return wordsContent;
  }).join(' '); // превращает слова в строчках в предложение

  return (
    <div>
        <DragDropContext onDragEnd = {onDragEnd}>
            {
              dataState.columnOrder.map( (columnId) => {
                const column = dataState.columns[columnId];
                const tasks = column.taskIds.map( (taskId) => dataState.tasks[taskId]);
                return <Column key = {column.id} column = {column} tasks = {tasks} type='line'/>; //Рендер поля с линиями
              })
            }
          <Words>
            {
              dataState.wordOrder.map( (columnId) => {
                const column = dataState.columns[columnId];
                const tasks = column.taskIds.map( (taskId) => dataState.tasks[taskId]);
                return <Column key = {column.id} column = {column} tasks = {tasks} type='word'/>; //Рендер полей со словами
              })
            }
          </Words>

        </DragDropContext>
        
      <CheckButton disabled ={wordsInLines} correctAnswer = {dataState.correctAnswer} answer = {answer} wrong = {false}/>
    </div>
  );
}

export default DnDBlock;