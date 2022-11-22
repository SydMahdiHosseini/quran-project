import React, { useContext } from "react";
import { IAyeh } from "../interface/IAyeh";
import PlayButton from "../assets/images/play-button.png";
import PlayerContext from "../store/PlayerContext";
import { getAudioFormatUrl } from "../helper/getAudioFormatUrl";

const Ayeh: React.FC<IAyeh> = ({
  Ayeh,
  translateAyeh,
  ayehNumber,
  suraNumber,
  audioRef
}) => {
  const playerCtx = useContext(PlayerContext);

  const handlePlayAyeh =  async () => {
         const currentSongPlayer = {
            suraNumber : getAudioFormatUrl(suraNumber + ""),
            ayehNumber : getAudioFormatUrl(ayehNumber + "")
         }
           await playerCtx.changeSong(currentSongPlayer);
           audioRef.current.play();
           
  };

  return (
    <div className="ayeh-card">
      <div className="paly-icon" onClick={handlePlayAyeh}>
        <img src={PlayButton} alt="play-button" />
      </div>
      <p className="ayeh-line">
        {Ayeh} <span className="num-ayeh">{ayehNumber}</span>
        <br />
        {translateAyeh}{" "}
      </p>
    </div>
  );
};

export default Ayeh;
