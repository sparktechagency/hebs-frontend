
// "use client";
// import { persistor, store } from "@/redux/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
// import UserProvider from "@/context/UserContext";
// const ReduxProvider = ({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) => {
//   return (
//     <div>
//       <UserProvider>

//       <Provider store={store}>
//         <PersistGate loading={<p>Loading.....</p>} persistor={persistor}>
//           {children}
//         </PersistGate>
//       </Provider>
//       </UserProvider>
//     </div>
//   );
// };

// export default ReduxProvider;
