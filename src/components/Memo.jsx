import React, { memo, useCallback, useState } from "react";
import Content from "./Content";

//1. memo() -> dùng để ghi nhớ -> Higher Order Component (HOC)
//   - Giúp component tránh bị render trong những tình huống ko cần thiết
//   - Ghi nhớ lại những cái props của component để quyết định có render lại component
//   đó hay không để tối ưu hiệu năng
//   - memo lưu lại các props của component để xem có thay đổi hay ko
//   - Sử dụng toán tử switch === để so sánh
//2. useCallback()
//  - Reference types
//  - React memo()
//useCallback sinh ra để giúp tránh tạo các hàm mới ko cần thiết

//Hooks
//HOC
//Render props

function Memo() {
  const [count, setCount] = useState(0);

  //useCallback(function, [deps])
  //1. Khi component được mounted, useCallback nhận đc 
  //cái callback của nó -> tạo ra hàm và nhận đc tham chiếu
  //2. Nhận dc tham chiếu và lưu ra bên ngoài phạm vy của component
  //3. return lại cái tham chiếu cho biến (increase)
  //4. khi render lại component nếu [deps] trống -> 
  //thì nó sẽ trả lại tham chiếu trc đó

  //Nếu đã sử dung memo() cho component con thì
  //dùng useCallback cho các function 
  const increase = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <div> 
      <h1>Memo</h1>
      <Content onIncreas={increase} />
      <h1>{count}</h1>
    </div>
  );
}

export default Memo;
