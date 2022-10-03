/**
 * useEffect
 * 1. Cập nhật lại State
 * 2. Cập nhạt DOM (mutated: dột biến)
 * 3. render lại UI
 * 4. Gọi cleanup nếu deps tahy đổi
 * 5. Gọi useEffect callback
 *
 * useLayoutEffect
 * 1. Cập nhật lại State
 * 2. Cập nhạt DOM (mutated)
 * 3. Gọi cleanup nếu deps tahy đổi (sync: thực hiện đồng bộ)
 * 4. Gọi useLayoutEffect callback (sync)
 * 5. Render lại UI
 */
import React, { useEffect, useLayoutEffect, useState } from "react";

function UseLayoutEffect() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   if (count > 3) {
  //     setCount(0);
  //   }
  // }, [count]);

  //Dùng khi mình setState sau đó lại setState chính nó thêm một lần nữa
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  const handleRun = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>useLayoutEffect</h1>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  );
}

export default UseLayoutEffect;
