import React from "react";
import { Link } from "react-router-dom";
import { ISuraCard } from "../interface/ISuraCard";

const SuraCard: React.FC<ISuraCard> = ({ sureName, surePageUrl, suraType }) => {
  const showTypeSura = () => {
    return suraType === "Meccan" ? "مکی" : "مدنی";
  };

  return (
    <Link to={`/quran-page/${surePageUrl}`}>
      <div className="sura-card">
        <div className="sura-head"></div>
        <div className="sura-description">
          <h3>{sureName}</h3>
        </div>
        <div className="show-sura">
          <p>{showTypeSura()}</p>
        </div>
      </div>
    </Link>
  );
};

export default SuraCard;
