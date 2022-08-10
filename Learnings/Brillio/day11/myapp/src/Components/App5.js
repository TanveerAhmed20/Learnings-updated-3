import React from "react";

// this teaches about props transfer from A->B->C components 
// app5v2 is the optimized version 

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

export const Parent = ({ comps, sadProp }) => {
  const secret_prop = "super secret";
  return (
    <div>
      {comps.map((Comp) => (
        <Comp secret={secret_prop} sadProp={sadProp} />
      ))}
    </div>
  );
};

export const App5 = () => {
  const sad = ":(";
  return (
    <div>
      <Parent comps={[Child1, Child2]} sadProp={sad} />
    </div>
  );
};

export default App5;
