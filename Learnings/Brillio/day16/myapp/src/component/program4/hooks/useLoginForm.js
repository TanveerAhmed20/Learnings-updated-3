import { useMemo, useReducer } from "react";

const LoginFormActions = {
  UPDATE_EMAIL: "UPDATE_EMAIL",
  UPDATE_PASSWORD: "UPDATE_PASSWORD",
  RESET_FORM: "RESET_FORM"
};

const LoginValidationModel = {
  email: [
    {
      message: "email is not valid",
      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  ],
  password: [
    {
      minLength: 8,
      message: "password should be atleast 8 chars"
    },
    {
      maxLength: 20,
      message: "password cannot be greater than 20 chars"
    },
    {
      required: true,
      message: "password is a required field"
    },
    {
      pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
      message:
        "password should contain atleast - 1 number, 1 spl char, 1 uppercase, and 1 lowercase"
    }
  ]
};

function validate(model, value) {
  const errors = [];
  model.forEach((validation) => {
    let isValid = true;
    if (!isNaN(validation.minLength)) {
      isValid = value.length >= validation.minLength;
    }
    if (!isNaN(validation.maxLength)) {
      isValid = value.length <= validation.maxLength;
    }
    if (validation.required) {
      isValid = value === 0 ? true : !!value;
    }
    if (validation.pattern) {
      isValid = validation.pattern.test(value);
    }

    if (!isValid) errors.push(validation.message);
  });

  return errors;
}

const initState = () => {
  return {
    email: {
      initialValue: "",
      value: "",
      errorMessages: []
    },
    password: {
      initialValue: "",
      value: "",
      errorMessages: []
    }
  };
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case LoginFormActions.UPDATE_EMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          value: action.email,
          errorMessages: validate(LoginValidationModel.email, action.email)
        }
      };
    case LoginFormActions.UPDATE_PASSWORD:
      return {
        ...state,
        password: {
          ...state.password,
          value: action.password,
          errorMessages: validate(
            LoginValidationModel.password,
            action.password
          )
        }
      };
    case LoginFormActions.RESET_FORM:
      return initState();
    default:
      return {
        ...state
      };
  }
};

const getActions = (dispatch) => {
  const updateEmail = (email) =>
    dispatch({
      type: LoginFormActions.UPDATE_EMAIL,
      email
    });
  const updatePassword = (password) =>
    dispatch({
      type: LoginFormActions.UPDATE_PASSWORD,
      password
    });
  const resetForm = () =>
    dispatch({
      type: LoginFormActions.RESET_FORM
    });

  return { updateEmail, updatePassword, resetForm };
};

export const useLoginForm = () => {
  // useReducer params -
  // 1. reducer function
  // 2. input for initStateFunction
  // 3. initStateFunction
  const [formState, dispatch] = useReducer(loginReducer, {}, initState);

  const actions = useMemo(() => getActions(dispatch), []);

  return { formState, actions };
};
