import React from "react";
import Head from "next/head";

const secret = () => {
  const style = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const pink = {
    color: "pink",
  };
  return (
    <>
      <Head>
        <title>SysDev</title>
      </Head>
      <div style={style}>
        <h1>WELCOME TO THE SECRET PAGE</h1>
        <h1 style={pink}>IF YOU FOUND THIS, CONGRATS IG???</h1>
        <p style={{marginTop: "1rem"}}>Message any SysDev member that you found this for good luck hehe</p>
      </div>
    </>
  );
};

export default secret;
