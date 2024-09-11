import React from "react";

function PageNotFound() {
  return (
    <div
      style={{
        color: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "70px",
          fontWeight: "300",
          letterSpacing: "5px",
        }}
      >
        404
      </h1>
      <p style={{ fontSize: "35px", margin: 0 }}>Page not found </p>
      <p style={{ fontSize: "20px", margin: 20 }}>
        please go to previous page !!!
      </p>
    </div>
  );
}

export default PageNotFound;
