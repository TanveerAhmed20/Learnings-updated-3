import { memo } from "react";

function Child3() {
    console.log("child3");
  return <h4>CHILD 3 COMPONENT</h4>;
}
export default memo(Child3);
