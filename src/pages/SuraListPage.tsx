import React from "react";

const SuraList = React.lazy(() => import("../components/SuraList"));
const BannerHome = React.lazy(() => import("../components/BannerHome"));

function SuraListPage() {
  return (
    <div className="sura-container">
      <BannerHome />
      <SuraList />
    </div>
  );
}
export default SuraListPage;
