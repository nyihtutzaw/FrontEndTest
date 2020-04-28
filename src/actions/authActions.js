import {
   LOGIN, LOGIN_LOADING, SET_TOAST,SET_LOGIN_STATUS
} from './types.js';
import { postData } from './../helpers/server.js';

export const loginAction = (submitData) => async  dispatch => {

      dispatch({
            type: LOGIN_LOADING,
            payload: true
         })
   try {
      var response = await postData("login", submitData);
      
      dispatch({
         type: SET_LOGIN_STATUS,
         payload: { status:true }
      });

      dispatch({
         type: SET_TOAST,
         payload: { success: true, message: "Login success" }
      });
   }
   
   catch (error) {
      
      dispatch({
         type: SET_TOAST,
         payload: { success: false, message: "Login failed" }
      });
}
finally {
   dispatch({
      type: LOGIN_LOADING,
      payload: false
   })
   dispatch({
      type: SET_TOAST,
      payload: null
   });
}
   


   
};

