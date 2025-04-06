"use client";

import { Provider } from "react-redux";
import FooterPage from "../component/shared/Footer";
import Navbar from "../component/shared/Navbar";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <div>
        <div className="min-h-screen ">
          <Navbar />
          {children}
        </div>
        <div>
          <FooterPage />
        </div>
      </div>
      </PersistGate>
      </Provider>
    </>
  );
};

export default MainLayout;
