const INITIAL_STATE = {
  currentUser: {
    name: "A",
    isAdmin: true,
  },
  isConnected: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DISCONNECTED":
      return { ...state, isConnected: false };

    default:
      return state;
  }
};
export default userReducer;
