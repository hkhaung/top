import { useState } from 'react';
import './Level.css';
import Board from '../Board/Board';

/* A level will consist of two boards
one will be a board without functionality -> just for show / idle
the other will be the actual game board 

The visual/idle board will show random cards and the cards will flip in an interval sequentially
When hovered, it will show a start button and when clicked, idle board will disappear.

*/
function Level({ level=0, setWinLose }) {
  const startNumber = 4;
  let maxNumber;
  if (level === 0) {
    maxNumber = startNumber;
  } else {
    console.log(level, typeof(level), 'HEY');
    maxNumber = startNumber + level;
  }

  return (
    <> 
      <Board level={level + 1} maxNumber={maxNumber} setWinLose={setWinLose}/>
    </>
  )
}

export default Level;