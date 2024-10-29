"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/redux/store";
import { useEffect, useState } from "react";
import { Spin } from "antd";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className=" text-center pt-3">
        <Spin fullscreen />
      </div>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div>
            <Spin size="large" fullscreen />
          </div>
        }
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;
