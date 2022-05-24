import React from "react";
import "./home.css";

export default function Home() {
  const [data, setData] = React.useState("");
  fetch("http://yale918.servehttp.com:3333")
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      setData(data);
    });

  return <div className="home-container">{data}</div>;
}
