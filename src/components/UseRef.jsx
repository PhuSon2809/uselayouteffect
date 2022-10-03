import React, { useEffect, useState } from "react";
import { useRef } from "react";

//Lưu các giá trị qua một tham chiếu bên ngoài
//function component

function UseRef() {
  const [count, setCount] = useState(60);

  //useRef(initialValue): là môt hàm nhận một đối số là initialValue (có thể là bất cứ giá trị nào của JS)
  //Chỉ sử dụng giá trị khỏi tạo trong lần đầu tiền component được mounted
  //return về giá trị obj có properties là current --> .current để lấy giá trị
  //   const ref = useRef(99);

  //   console.log(ref.current);

  const timerId = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);


//In tọa độ của phần tử
  useEffect(() => {
    console.log(h1Ref.current);
    const rect = h1Ref.current.getBoundingClientRect();
    console.log(rect);
  });

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    console.log(`Start -> `, timerId.current);
  };

  const handleStop = () => {
    clearInterval(timerId.current);

    console.log(`End -> `, timerId.current);
  };

  console.log(`Hiện tại; ${count} - trước đó: ${prevCount.current}`);

  return (
    <div>
      <h1>UseRef</h1>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default UseRef;
