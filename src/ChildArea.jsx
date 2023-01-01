import { memo } from "react";

const style = {
  backgroundColor: "pink",
};

export const ChildArea = memo((props) => {
  const { open } = props;
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
