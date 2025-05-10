"use client";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
const ReduxProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={<p>Loading.....</p>} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </div>
  );
};

export default ReduxProvider;
