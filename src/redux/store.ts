import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice"
import cartSlice from "./features/cart/cartSlice";
import surveyReducer from "./features/survey/surveySlice"
import planReducer from "./features/subscription/subscriptionSlice"

import { baseApi } from "./api/baseApi";
import storage from "redux-persist/lib/storage";
import { persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";
import { persistStore } from "redux-persist";
const persistConfig={
    key:"auth",
    storage
}
const persistConfigCart = {
    key: "cart",
    storage,
  };
  
  const persistConfigSurvey = {
    key: "survey",
    storage,
  };
  const persistConfigPlan = {
    key: "plan",
    storage,
  };

const persistedAuthReducer=persistReducer(persistConfig,authReducer)
const persistedCartReducer = persistReducer(persistConfigCart, cartSlice);
const persistedSurveyReducer = persistReducer(persistConfigSurvey, surveyReducer);
const persistedPlanReducer = persistReducer(persistConfigPlan, planReducer);

export const makeStore = () =>{
  return configureStore({
        reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        auth:persistedAuthReducer,
        survey: persistedSurveyReducer,
    cart: persistedCartReducer,
    plan:persistedPlanReducer,

    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware( {serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },}).concat(baseApi.middleware)
  })

}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
export const persistor = persistStore(makeStore());
