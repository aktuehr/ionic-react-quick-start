import React, { createContext, useState, useEffect } from "react";
import { getShowedTutorial } from "../utils/Storage";

interface StorageContextProps {
  isShowedTutorial: boolean;
  /** 起動時の読み込みを判定 */
  isStorageLoaded: boolean;
}

const initialStorageContext: StorageContextProps = {
  isShowedTutorial: false,
  isStorageLoaded: false,
};

export const StorageContext = createContext<StorageContextProps>(
  initialStorageContext
);

interface StorageContextProviderProps {
  children: React.ReactNode;
}

const StorageContextProvider = ({ children }: StorageContextProviderProps) => {
  const [isShowedTutorial, setIsShowedTutorial] = useState(
    initialStorageContext.isShowedTutorial
  );
  const [isStorageLoaded, setIsStorageLoaded] = useState(
    initialStorageContext.isStorageLoaded
  );

  const fetchData = async () => {
    const showedTutorial = await getShowedTutorial();
    setIsShowedTutorial(showedTutorial);
    setIsStorageLoaded(true);
    console.log("Storage: setIsShowedTutorial");
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <StorageContext.Provider value={{ isShowedTutorial, isStorageLoaded }}>
      {children}
    </StorageContext.Provider>
  );
};

export default StorageContextProvider;
