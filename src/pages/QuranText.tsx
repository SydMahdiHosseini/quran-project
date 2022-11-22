import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { QuranData } from "../metaData/quran-metadata";
import ayat from "../metaData/quran-text-emla.json";
import translation from "../metaData/quran-translate.fa.ansarian.json";
import { Link } from "react-router-dom";
const Ayeh = React.lazy(() => import("../components/Ayeh"));
const AudioPlayer = React.lazy(() => import("../components/AudioPlayer"));

function QuranText() {
  const params = useParams();
  const numberedParams = Number(params.page);
  const audiRef = useRef(null);

  // data current page
  const suraOfThePage: number = QuranData.Page[numberedParams][0];
  const startingAyehOfSura: any = QuranData.Sura[suraOfThePage][0];

  // data next page
  const suraOfThePageNext: number = QuranData.Page[numberedParams + 1][0];
  const startingAyehOfSuraNext: any = QuranData.Sura[suraOfThePageNext][0];

  const startAyehPage =
    QuranData.Page[numberedParams][1] + startingAyehOfSura - 1;

  const endAyehPage =
    QuranData.Page[numberedParams + 1][1] + startingAyehOfSuraNext - 1;

  const quranAyat = ayat.slice(startAyehPage, endAyehPage);
  const traslationQuran = translation.slice(startAyehPage, endAyehPage);

  const textQuranPage = quranAyat.map((quranAyat, index) => {
    return {
      quranAyat,
      translateAyat: traslationQuran[index],
    };
  });

  const renderAyat = () => {
    return textQuranPage.map((data, index) => (
      <Ayeh
        Ayeh={data.quranAyat}
        translateAyeh={data.translateAyat}
        key={index}
        ayehNumber={QuranData.Page[numberedParams][1] + index}
        suraNumber={suraOfThePage}
        audioRef={audiRef}
      />
    ));
  };

  return (
    <div className="quran-page-text">
      <ul>{renderAyat()}</ul>
      {numberedParams < 604 && (
        <div className="next button-page ">
          {
            <Link to={`/quran-page/${numberedParams + 1}`} replace={true}>
              <p>صفحه بعد</p>
            </Link>
          }
        </div>
      )}
      {numberedParams > 1 && (
        <div className="previous button-page">
          <Link to={`/quran-page/${numberedParams - 1}`} replace={true}>
            <p>صفحه قبل</p>
          </Link>
        </div>
      )}
      <AudioPlayer
        audioRef={audiRef}
        SuraNumber={""}
        ayehNumber={""}
        ghariName={"Menshawi_32kbps"}
      />
    </div>
  );
}

export default QuranText;
