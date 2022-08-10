import { useReducer, useMemo } from "react";

// accepts reducer, initialValue, and action functions
// return formState, actions from useReducer
export const useForm = (reducer, initalValue, initFunc, getActions) => {
  const [formState, dispatch] = useReducer(reducer, initalValue, initFunc);

  const actions = useMemo(() => getActions(dispatch), []);

  return { formState, actions };
};
