import React, { useReducer, useState } from "react";

//Sử dụng useReducer trong những huống có state phức tạp
//1. Init state: 0
//2. Action: Up (state + 1), Down (state -1)
//3. Reducer
//4. Dispatch

//Init state
const initState = 0;

//Action
const UP_ACTION = "up";
const DOWN_ACTION = "down";

//Reducer: nhận state hiện tahi và hành động
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

function UseReducer() {
  //useState
  //1. Init state: 0
  //2. Action: Up (state + 1), Down (state -1)
  //const [count, setCount] = useState(0); //Sử dụng trong tình huống đơn giản

  //Dispatch
  //useReducer: có thẻ nhận 3 đối số nhưng thông thường chỉ dùng 2 cái thôi
  //dispatch giúp 1 action được kích hoạt --> state được thaty đổi -> render lại ccomponent
  //khi component lần đàu chạy thì nó sẽ chạy cái useReducer
  //Lần đầu chạy chương trình thì reducer chưa được gọi

  //reducer sẽ xử lí để lấy cái action từ dispatch
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h1>UseReducer</h1>
      <h1>{count}</h1>
      {/* dispatch thì truyền vào một action */}
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
}

export default UseReducer;
