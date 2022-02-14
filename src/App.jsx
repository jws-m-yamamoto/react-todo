import React from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p>未完了のTODO</p>
        <lu>
          <div className="list-row">
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </lu>
      </div>
      <div className="complete-area">
        <p>完了のTODO</p>
        <lu>
          <div className="list-row">
            <li>うううう</li>
            <button>戻す</button>
          </div>
        </lu>
      </div>
    </>
  );
};
