export const login = (username) => ({
    type: "LOGIN",
    payload: {
      username,
    },
  });

  export default login;
