import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./TodoList";

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  // useSetRecoilState()을 사용하는 것은 컴포넌트가 값이 바뀔 때 리렌더링을 하기 위해 컴포넌트를 구독하지 않고도 값을 설정하게 해줍니다.
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    // 기존 todo 리스트를 기반으로 새 todo 리스트를 만들 수 있도록 setter 함수의 updater 형식을 사용한다는 점에 유의해야 한다.
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false
      }
    ]);
    setInputValue("");
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
