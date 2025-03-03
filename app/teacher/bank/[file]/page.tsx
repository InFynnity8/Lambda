"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import {Document, Page} from "react-pdf"

const file: React.FC = () => {
    const searchParams = useSearchParams()
    // const an = searchParams.get()
  return (
    <div className="w-full  flex justify-center items-center">
      Not Available
      <Document file='set.pdf' > 
        <Page pageNumber={1}/>
      </Document> 
    </div>
  );
};

export default file;
