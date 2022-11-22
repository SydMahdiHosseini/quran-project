import React from "react";
import { QuranData } from "../metaData/quran-metadata";
const SureCard = React.lazy(() => import( "./SuraCard"));

const SuraList = () => {
  const renderSureList = () => {
    return QuranData.Sura.map(
      (sura, index) =>
        sura.length > 2 && (
          <SureCard
            key={index}
            sureName={sura[4]}
            surePageUrl={sura[sura.length - 1]}
            suraType={sura[7]}
          />
        )
    );
  };

  return (
    <div className="sura-list">
      <ul className="card-container">{renderSureList()}</ul>
    </div>
  );
};

export default SuraList;

