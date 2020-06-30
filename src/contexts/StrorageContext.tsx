import React, { createContext, useState, useEffect } from "react";
import { getShowedTutorial } from "../utils/Storage";

interface StorageContextProps {
  isShowedTutorial: boolean;
  updateIsShowedTutorial: (value: boolean) => void;
  /** 起動時の読み込みを判定 */
  isStorageLoaded: boolean;
}

const initialStorageContext: StorageContextProps = {
  isShowedTutorial: false,
  updateIsShowedTutorial: (value: boolean) => {},
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
    /** Storageからローディング */
    const showedTutorial = await getShowedTutorial();
    setIsShowedTutorial(showedTutorial);
    setIsStorageLoaded(true);
    console.log("Storage: setIsShowedTutorial");
    console.log(showedTutorial);
  };

  const updateIsShowedTutorial = (value: boolean) => {
    setIsShowedTutorial(value);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <StorageContext.Provider
      value={{ isShowedTutorial, updateIsShowedTutorial, isStorageLoaded }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export default StorageContextProvider;
