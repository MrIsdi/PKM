import React, { useState, useEffect } from "react";
import axios from "axios";

function Data({style}) {
  const [data, setData] = useState([]); // Menyimpan data dari API
  const [currentPage, setCurrentPage] = useState(1); // Halaman aktif
  const [itemsPerPage] = useState(10); // Jumlah item per halaman
  const [pageLimit] = useState(5); // Batasan jumlah tombol pagination

  useEffect(() => {
    fetchData();
  }, [currentPage]); // Menjalankan fetchData saat currentPage berubah

  const fetchData = () => {
    // Lakukan permintaan API dengan berdasarkan halaman yang sedang aktif
    axios
      .get(`https://cvtomato.000webhostapp.com/sensor?page=${currentPage}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Menghitung indeks data yang akan ditampilkan
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Menghitung jumlah halaman
  const totalItems = data.length;
  const totalPageCount = Math.ceil(totalItems / itemsPerPage);

  // Menghitung halaman awal dan akhir yang akan ditampilkan
  let startPage = Math.max(currentPage - Math.floor(pageLimit / 2), 1);
  let endPage = startPage + pageLimit - 1;

  // Pastikan endPage tidak melampaui totalPageCount
  if (endPage > totalPageCount) {
    endPage = totalPageCount;
    startPage = Math.max(endPage - pageLimit + 1, 1);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className={`text-white flex flex-col justify-center items-center ${style}`}>
      <div className="flex justify-center  border border-[rgba(255, 255, 255, 0.62)] bg-[#2d2d2d73] backdrop-blur-[10px] rounded-[20px] p-5">
        <table className="table-auto text-white text-center mt-1 ">
          <thead>
            <tr>
              <th className="border-y px-4 py-2">No</th>
              <th className="border-y px-4 py-2">Suhu</th>
              <th className="border-y px-4 py-2">Kelembapan</th>
              <th className="border-y px-4 py-2">Intensitas Cahaya</th>
              <th className="border-y px-4 py-2">Kipas</th>
              <th className="border-y px-4 py-2">Mist Spray</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, i) => (
              <tr key={item.id}>
                <td className="px-4 py-2">
                  {(currentPage - 1) * itemsPerPage + i + 1}
                </td>
                <td className=" px-4 py-2">{item.suhu}</td>
                <td className=" px-4 py-2">{item.lembap}</td>
                <td className=" px-4 py-2">{item.cahaya}</td>
                {item.kipas === "Hidup" ? (
                  <td>
                    <div className="bg-[#BBF3E0] text-[#12A474] w-fit px-3 py-1 m-auto rounded-md">
                      {item.kipas}
                    </div>
                  </td>
                ) : (
                  <td>
                    <div className="bg-[#FFF3DB] text-[#F2994A] w-fit px-3 py-2 m-auto rounded-md">
                      {item.kipas}
                    </div>
                  </td>
                )}
                {item.mist === "Hidup" ? (
                  <td>
                    <div className="bg-[#BBF3E0] text-[#12A474] w-fit px-3 py-1 m-auto rounded-md">
                      {item.mist}
                    </div>
                  </td>
                ) : (
                  <td>
                    <div className="bg-[#FFF3DB] text-[#F2994A] w-fit px-3 py-2 m-auto rounded-md">
                      {item.mist}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-2 bg-white mt-5 text-[#2b2b2b] flex items-center justify-center rounded-md">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="py-2 px-4 mx-1 rounded bg-blue-500 text-white font-bold"
          >
            Previous
          </button>
        )}
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`py-2 px-4 mx-1 rounded ${
              number === currentPage
                ? "bg-blue-500 text-white font-bold"
                : "bg-white text-black"
            }`}
          >
            {number}
          </button>
        ))}
        {currentPage < totalPageCount && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="py-2 px-4 mx-1 rounded bg-blue-500 text-white font-bold"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Data;
