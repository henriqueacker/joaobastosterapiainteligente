
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Template({ children }) {
    return (
      <>
        <Nav />
  
        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 py-8 pt-28 md:px-6">
          {children}
        </main>
  
        <Footer />
      </>
    );
  }