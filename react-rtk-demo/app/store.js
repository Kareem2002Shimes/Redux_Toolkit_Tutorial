import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import { configureStore } from "@reduxjs/toolkit";

// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();
import userReducer from "../features/user/userSlice";
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddle) => getDefaultMiddle().concat(logger),
});

export default store;
