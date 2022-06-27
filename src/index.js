// ReactDOMモジュールをimport
// react-domというライブラリに入っている
// import { Fragment } from "react";
import { createRoot } from "react-dom/client";

// 使うコンポーネントファイルを読み込む
import { App } from "./App";

// const App = () => {
//   // return null;
//   // 複数行になる場合は()
//   // return内はdivタグなど一つのタグで全体を囲む
//   return (
//     <div>
//       <h1>こんにちは！</h1>
//       <p>お元気ですか</p>
//     </div>

//     // <Fragment>
//     //   <h1>こんにちは！</h1>
//     //   <p>お元気ですか</p>
//     // </Fragment>

//     // <>
//     //   <h1>こんにちは！</h1>
//     //   <p>お元気ですか</p>
//     // </>
//   );
// };

// DOM... JSからHTMLを操作できる
// document... HTML要素にアクセスできる
// getElementByIdでidを指定し要素を取得 public/index.html内の<div id="root"></div>を指す

// Appというコンポーネントを"root"のdivタグに渡す → <h1>こんにちは！</h1>が出力
// ReactDOM.render(<App />, document.getElementById("root"));

// React18に対応している書き方↓
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
