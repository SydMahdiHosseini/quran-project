import React, { useContext, useEffect, useState } from "react";
import { IAudioPlayer } from "../interface/IAudioPlayer";
import { BASE_URL_AUDIO } from "../constant/index";
import PlayerContext from "../store/PlayerContext";

const AudioPlayer: React.FC<IAudioPlayer> = ({ ghariName, audioRef }) => {
  const playerCtx = useContext(PlayerContext);
  const [audioSource, setAudioSource] = useState(
    `${BASE_URL_AUDIO}/${ghariName}/${playerCtx.song.suraNumber}${playerCtx.song.ayehNumber}.mp3`
  );

  useEffect(() => {
    setAudioSource(
      `${BASE_URL_AUDIO}/${ghariName}/${playerCtx.song.suraNumber}${playerCtx.song.ayehNumber}.mp3`
    );
  }, [playerCtx.song]);

  const autoPlayHandler = () => {};

  return (
    <div className="audio-container">
      <audio
        onEnded={autoPlayHandler}
        ref={audioRef}
        autoPlay
        controls
        src={audioSource}
      ></audio>
    </div>
  );
};

export default AudioPlayer;
