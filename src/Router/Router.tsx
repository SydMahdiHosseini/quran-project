import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import AppICon from "../assets/images/quranIcon.png";
import MainLayout from "../layout/MainLayout";

const QuranText = React.lazy(() => import("../pages/QuranText"));
const SuraListPage = React.lazy(() => import("../pages/SuraListPage"));

function Router() {
  return (
    <div className="app">
      <div className="app-container">
        <Suspense
          fallback={
            <div className="loading-suspens">
              <img src={AppICon} alt="icon-app" />
              <ClipLoader color="#36d7b7" size={60} />
            </div>
          }
        >
          <MainLayout>
            <Routes>
              <Route path="/" element={<Navigate to="/sura-list" />} />
              <Route path="*" element={<Navigate to="/sura-list" />} />
              <Route path="/sura-list/*" element={<SuraListPage />} />
              <Route path="quran-page/:page" element={<QuranText />} />
            </Routes>
          </MainLayout>
        </Suspense>
      </div>
    </div>
  );
}

export default Router;
