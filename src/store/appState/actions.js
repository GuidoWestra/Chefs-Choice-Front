import { Default_Message_Timeout } from "../../assets/constants";

export const appLoading = () => ({ type: "App_Loading" });
export const appDoneLoading = () => ({ type: "App_Done_Loading" });
export const clearMessage = () => ({ type: "Clear_Message" });

export const setMessage = (variant, dismissable, text) => {
  return {
    type: "Set_Message",
    payload: {
      variant,
      dismissable,
      text,
    },
  };
};

export const showMessageWithTimeout = (variant, dismissable, text, timeOutMilliSeconds) => {
  return (dispatch) => {
    dispatch(setMessage(variant, dismissable, text));

    const TimeOut = timeOutMilliSeconds || Default_Message_Timeout;

    setTimeout(() => dispatch(clearMessage()), TimeOut);
  };
};
