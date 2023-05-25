import React, { useEffect, useState } from "react";
import ChefSlider from "../Chef/ChefSlider";
import ChefCard from "../Chef/ChefCard";
import ChefDoing from "../Chef/ChefDoing";
import ChefLearn from "../Chef/ChefLearn";
import { Helmet } from "react-helmet";

const Home = () => {
  const [chifslider, setChifSlider] = useState([]);
  useEffect(() => {
    fetch("https://chef-powerfull-najimahamed22.vercel.app/chifslider")
      .then((res) => res.json())
      .then((data) => setChifSlider(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <ChefSlider chifslider={chifslider}></ChefSlider>
      <ChefCard chifslider={chifslider}></ChefCard>
      <ChefDoing chifslider={chifslider}></ChefDoing>
      <ChefLearn></ChefLearn>
    </div>
  );
};

export default Home;
