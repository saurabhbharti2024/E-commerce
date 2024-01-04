import React, { useState, useEffect, useCallback } from "react";
import Slider from "react-slick";
import Header from "./Header";
import Child from "./Child";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    className: "slider variable-width",
    speed: 500,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slideToScroll: 1,
  };

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [data2, setData2] = useState([]);
  const loadData = async () => {
    const res = await axios.get(`http://localhost:3000/jirahistory/SECOPS`);
    setData(res?.data);
  };
  useEffect(() => {
    loadData();
  }, [data1]);
  console.log(data1);
  const searchData = (searchValue) => {
    setSearchInput(searchValue);
    const filter1 = data.map((e, i) => {
      return e;
    });

    const f3 = filter1?.map((e) => {
      return e?.issues;
    });
    const f4 = f3?.map((e, j) => {
      return e;
    });

    if (setSearchInput !== "") {
      const f5 = f4?.filter((e, j) => {
        if (Object.values(e[1].key).join("").toLowerCase().includes(searchInput.toLowerCase()) === true) {
          return Object.values(e[1].key).join("").toLowerCase().includes(searchInput.toLowerCase());
        }
        console.log("error");
      });
      console.log(f5);
    }
  };

  return (
    <div>
      <Header />
      <div className="hero mt-5 p-5">
        <Slider {...settings}>
          <img src="assets/bg.jpg" alt="book cover" height={700} />

          <img src="assets/bg2.jpg" alt="book cover" height={700} />

          <img src="assets/bg3.jpg" alt="book cover" height={700} />
        </Slider>
      </div>
    </div>
  );
};

export default Home;
