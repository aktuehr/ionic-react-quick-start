import React, { createContext, useState, useEffect } from 'react';
import { getShowedTutorial } from '../utils/Storage';

interface StorageContextProps {
  isShowedTutorial: boolean;
}

const initialStorageContext: StorageContextProps = {
  isShowedTutorial: false
}

export const StorageContext = createContext<StorageContextProps>(initialStorageContext);

interface StorageContextProviderProps {
  children: React.ReactNode;
}

const StorageContextProvider = ({ children }: StorageContextProviderProps) => {
  const [isShowedTutorial, setIsShowedTutorial] = useState(initialStorageContext.isShowedTutorial);
  const fetchData = async () => {
    const showedTutorial = await getShowedTutorial();
    setIsShowedTutorial(showedTutorial);
  };
  useEffect(() => {
    fetchData();
  })
  return (<StorageContext.Provider value={{ isShowedTutorial }}> {children} </StorageContext.Provider >);
}

export default StorageContextProvider;