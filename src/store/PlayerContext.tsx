import React, { useState } from "react";
import { IPlayerProvider } from "../interface/IPlayerProvider";

type PlContext = {
  song: { suraNumber: string; ayehNumber: string };
  changeSong: (newSong: any) => void;
};

const PlayerContext = React.createContext<PlContext>({
  song: { suraNumber: "001", ayehNumber: "001" },
  changeSong: (newSong: any) => {},
});

export const PlayerContextProvider: React.FC<IPlayerProvider> = (props) => {
  const [currentSong, setSong] = useState({
    suraNumber: "001",
    ayehNumber: "001",
  });

  async function changeCurrentSong(newSong: {
    suraNumber: string;
    ayehNumber: string;
  }) {
    await setSong(newSong);
  }

  const PlayerState: PlContext = {
    song: currentSong,
    changeSong: changeCurrentSong,
  };

  return (
    <PlayerContext.Provider value={PlayerState}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
