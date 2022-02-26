import React from "react";

export const CompleteTodo = (props) => {
  const { completetask, onClickReturn } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTodo</p>
      <ul>
        {completetask.map((completetask, index) => {
          return (
            <div key={completetask} className="list-row">
              <li>{completetask}</li>
              <button onClick={() => onClickReturn(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
