// props（親→子）

export const ColoredMessage = (props) => {
  // 引数として親から渡ってきた値を受け取る
  // console.log(props);
  const contentStyle = {
    // color: "blue",
    color: props.color,
    fontSize: "20px",
  };

  // return <p style={contentStyle}>{props.message}</p>;

  // childrenを使う場合
  return <p style={contentStyle}>{props.children}</p>;
};
