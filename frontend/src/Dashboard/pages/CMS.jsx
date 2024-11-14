import React, { useState } from "react";
import Navbar from "../components/CmsNav";
import WebData from "../components/cms/WebData";

function CMS() {
  const [page, setPage] = useState(<WebData />);

  return (
    <div className="cms">
      <h1 style={{ width: "80%" }}>Content managemet system</h1>
      <Navbar setPage={setPage} />
      {page}
    </div>
  );
}

export default CMS;
