import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

export const setShowedTutorial = async () => {
  await Storage.set({
    key: "showedTutorial",
    value: JSON.stringify(true),
  });
};
