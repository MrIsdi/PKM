import React, { useEffect, useState } from "react";
import axios from "axios";
import SideNav from "../components/SideNav";
import Data from "../components/Data";

function Dashboard() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ganti URL dengan URL API database Anda.
    axios
      .get("https://cvtomato.000webhostapp.com/sensor")
      .then((response) => {
        // Mengambil data terakhir (misalnya, jika data adalah array yang diurutkan berdasarkan timestamp)
        const latestData = response.data[response.data.length - 1];
        setData(latestData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <React.Fragment>
      <div className="flex">
        <SideNav />
        <div className="flex flex-col items-center justify-center ml-[430px] mt-10 font-bold ">
          <div className="text-white text-[30px] bg-[#113946] cursor-pointer hover:shadow-[-1px_-1px_28px_0px_rgb(17,57,70)] px-4 py-2 rounded-md mt-2 uppercase font-bold">
            Latest Data Monitoring 
          </div>
          <div className="text-white flex flex-row gap-10 text-center my-10 ">
            <div className="text-xl">
              Suhu
              <div className="p-4 mt-2 bg-[#3876BF] hover:shadow-[-1px_-1px_15px_0px_#3876BF] cursor-pointer rounded-lg">
                {data.suhu}
              </div>
            </div>
            <div className="text-xl">
              Kelembapan
              <div className="p-4 mt-2 bg-[#192655] hover:shadow-[-1px_-1px_15px_0px_#192655] cursor-pointer rounded-lg">
                {data.lembap} 
              </div>
            </div>
            <div className="text-xl">
              Intensitas Cahaya
              <div className="p-4 mt-2 bg-[#EE9322] hover:shadow-[-1px_-1px_15px_0px_#EE9322] cursor-pointer rounded-lg">
                {data.cahaya}
              </div>
            </div>
            <div className="flex flex-col justify-start items-start">
            <div className="px-2 flex flex-row mb-4 justify-center items-center gap-2 ">
                Kipas
                <div
                  className={`px-3 py-1 ml-[39px] rounded-lg ${
                    data.kipas === "Hidup"
                      ? "bg-green-400 text-green-600"
                      : "bg-red-400 text-red-700"
                  }`}
                >
                  {data.mist}
                </div>
              </div>
              <div className="px-2 flex flex-row justify-center items-center gap-2 ">
                Mist Spray{" "}
                <div
                  className={`px-3 py-1 rounded-lg ${
                    data.mist === "Hidup"
                      ? "bg-green-400 text-green-600"
                      : "bg-red-400 text-red-700"
                  }`}
                >
                  {data.mist}
                </div>
              </div>
            </div>
          </div>
          <Data />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
