import React, { useEffect, useState } from "react";
import EnquiryCard from "../components/EnquiryCard";
import { getLeads } from "../../services/analytics";
import { useNavigate } from "react-router-dom";

function Enquiries() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const leads = await getLeads();
        if (leads === false) {
          return navigate("/error");
        }
        setData(leads.data);
        console.log(leads);
      } catch (error) {
        console.error("Failed to fetch leads:", error);
      }
    };

    fetchLeads();
  }, []);

  return (
    <div className="Enq">
      <h1>Enquiries</h1>

      {data.map((d) => {
        return <EnquiryCard data={d} key={d._id} dataList={data} setData={setData} />;
      })}
    </div>
  );
}

export default Enquiries;
