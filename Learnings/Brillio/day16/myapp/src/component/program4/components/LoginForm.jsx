import React from "react";
export const LoginForm = ({
  onSubmit,
  email,
  password,
  onUpdateEmail,
  onUpdatePassword,
  onReset,
}) => {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }
  return (
    <form onSubmit={handleSubmit} onReset={onReset}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="form-control">
          <input
            value={email.value}
            onChange={(e) => onUpdateEmail(e.target.value)}
            type="text"
            placeholder="email"
          />
          {email.errorMessages.map((error) => (
            <p key={error} className="error">
              {error}
            </p>
          ))}
        </div>
        <div className="form-control">
          <input
            value={password.value}
            onChange={(e) => onUpdatePassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          {password.errorMessages.map((error) => (
            <p key={error} className="error">
              {error}
            </p>
          ))}
        </div>
        <div className="form-control">
          <button className="login-button" type="submit">
            Login
          </button>
          <button
            className="login-button"
            style={{ marginLeft: "10px" }}
            type="reset"
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};
