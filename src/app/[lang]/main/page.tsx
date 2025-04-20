import React from "react";
import VisualWrap from "./_component/VisualWrap";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import NewsContainer from "./_component/NewsContainer";
import CardContainer from "./_component/CardContainer";
import EventContainer from "./_component/EventContainer";

const MainPage = () => {
  return (
    <div className="bg-white text-black">
      <Header />
      <VisualWrap />
      <NewsContainer />
      <CardContainer />
      <EventContainer />
      <Footer />
    </div>
  );
};

export default MainPage;
