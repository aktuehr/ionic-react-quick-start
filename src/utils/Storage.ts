import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

enum storageKeys {
  SHOWED_TUTORIAL = "showedTutorial",
}

interface setShowedTutorialProps {
  isShowedTutorial: boolean;
}

export const setShowedTutorial = async ({
  isShowedTutorial,
}: setShowedTutorialProps) => {
  console.log("setShowedTutorial");
  // Local Storageではbooleanを扱えないので数値に変換
  const showedTutorialValue = isShowedTutorial ? 1 : 0;
  console.log(showedTutorialValue);

  await Storage.set({
    key: storageKeys.SHOWED_TUTORIAL,
    value: JSON.stringify(showedTutorialValue),
  });
  console.log("setted");
};

export const getShowedTutorial = async (): Promise<boolean> => {
  const ret = await Storage.get({
    key: storageKeys.SHOWED_TUTORIAL,
  });
  /** :explode: */
  const isShowedTutorial = !!ret.value
    ? JSON.parse(ret.value) === 1
      ? true
      : false
    : false;
  console.log(`getShowedTutorial`);
  console.log(isShowedTutorial);
  return isShowedTutorial;
};
