import React, {useState} from "react";

function HookButton(props) {
  let [val, sendVal] = useState(props.num)

  sendVal = () => {
    let num_ = val;
    props.onUserClick(num_);
  }

  return(
    <div>
      <button onClick={() => sendVal()} style={{ backgroundColor: props.color }}>{props.colorName}</button>
    </div>
  )
}

export default HookButton;