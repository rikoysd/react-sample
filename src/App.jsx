// これはコンポーネントファイルです
// コンポーネントファイルの場合、ファイル名は「○○.jsx」で設定

import { TailwindCss } from "./components/TailwindClass";
import { Emotion } from "./components/Emotion";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import { CssModules } from "./components/CssModules";
import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";
// import { useEffect } from "react";

// 他ファイルでも使えるようにexportを記述
export const App = () => {
  // stateの値が更新→Appコンポーネントが頭から実行される
  console.log("レンダリング");

  // stateの定義　第一引数：変数、第二引数：変数の値を更新する関数
  // numの初期値は右辺のカッコ内が示している
  const [num, setNum] = useState(0);

  // ある値が変わったときに実行される(vueでいうwatchに似てる)
  // 注意点は一番最初(createdやmounted)にも実行される
  // useEffect(() => {
  //   alert();
  // }, [num]);

  // ボタン押下時に発動するイベント
  const onClickButton = () => {
    // alert();
    setNum(num + 1);
  };

  // cssのオブジェクト
  // cssのプロパティ名はキャメルケースで書く
  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "20px",
  // };

  return (
    // return以降は一つのタグで囲む（ここではdivタグ）
    <div>
      {/* {}内にjavascriptの記述が可能 */}
      {/* {console.log("test")} */}

      {/* style属性の中はjsのオブジェクトとしてそれぞれの要素を記述 */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* <p style={contentStyle}>お元気ですか</p> */}

      {/* propsで渡したい値を書く */}
      {/* <ColoredMessage color="blue" message="お元気ですか？"></ColoredMessage> */}
      {/* <ColoredMessage color="pink" message="元気です！"></ColoredMessage> */}

      {/* children... コンポーネントタグで囲まれたところがpropsになる pタグのように使える */}
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>

      {/* イベントの割り当て方(クリック時に発生するイベント) */}
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>

      <CssModules></CssModules>
      <StyledJsx></StyledJsx>
      <StyledComponents></StyledComponents>
      <Emotion></Emotion>
      <TailwindCss></TailwindCss>
    </div>
  );
};
