/**
 * Styled JSXの書き方です.
 */

// Next.jsに組み込まれているライブラリ
export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled JSXです</p>
        <button className="button">ボタン</button>
      </div>

      {/* jsx="true"にしないとエラー出る */}
      {/* ※jsx記法のデフォルトはscssの記法が使用できない */}
      <style jsx="true">
        {`
          .container {
            border: solid 1px #aaa;
            border-radius: 20px;
            padding: 8px;
            margin: 8px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .title {
            margin: 0;
            color: #aaa;
          }
          .button {
            background-color: #ddd;
            border: none;
            padding: 8px;
            border-radius: 8px;
          }
        `}
      </style>
    </>
  );
};
