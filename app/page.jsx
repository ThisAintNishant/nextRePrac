import React from "react";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Welcome to AiPrompts</h1>
      <Feed />
    </section>
  );
};

export default Home;
