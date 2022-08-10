import React from "react";
export const Child1 = ({ secret, sadProp }) => {
  return (
    <div>
      CHild1 Sorry I cant kepe secrets - {secret} {sadProp}
    </div>
  );
};

export const Child2 = ({ secret, sadProp }) => {
  return (
    <div>
      CHild2 Sorry I cant kepe secrets - {secret} {sadProp}
    </div>
  );
};

export const Parent = ({children}) => {
  const secret_prop = "super secret";
  
  return <div>{children(secret_prop)}</div>
  
};

export const App5 = () => {
  const sad_prop = ":(";
  return (
    <div>
      <Parent >
        {(secret_prop)=>{
                <>
                <Child1 secret = {secret_prop} sadProp={sad_prop}/>
                <Child2 secret = {secret_prop} sadProp={sad_prop}/>
                </>
            }
        }
      </Parent>
    </div>
  );
};

export default App5;
