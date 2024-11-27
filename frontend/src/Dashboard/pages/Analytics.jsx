import React, { useState } from "react";
import Charts from "../components/Charts";
import data from "../../data/linechart_data.json";
import Utils from "../../utils/utils";
import { getUsers } from "../../services/analytics";

const util = new Utils();

function Analytics() {
  // const dividedArray = util.divideByYear(data);
  const [dividedArray, setArr] = useState([]);
  const [dataNum, setDataNum] = useState(0);
  useState(() => {
    (async () => {
      const usersdata = await getUsers();
      setArr(util.divideByYear(usersdata.data));
    })();
  }, []);
  return (
    <div className="Analytics">
      <h1 className="title col-rare">Website analytics</h1>
      <Charts data={dividedArray[dataNum]} />
      <div className="periods">
        {dividedArray.map((elem, i = 0) => {
          return (
            <button
              className="btn"
              key={i}
              style={{ margin: "1rem 0px" }}
              onClick={() => {
                setDataNum(i);
              }}
            >
              {util.convertDateToWords(elem[0].month)[2]}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Analytics;
