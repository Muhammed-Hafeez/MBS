import React from "react";
import EnquiryCard from "../components/EnquiryCard";

function Enquiries() {
  const data = [
    {
      firstname: "hafeez",
      lastname: "ulla",
      phoneNo: "9741893288",
      email: "hafeez97418@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid dolorum libero odit magni nulla ipsum harum eveniet dignissimos laboriosam facilis nesciunt itaque, possimus vel fugit ea. Animi, ducimus ipsam!",
      id: 1,
    },
    {
      firstname: "hafeez",
      lastname: "ulla",
      phoneNo: "9741893288",
      email: "hafeez97418@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid dolorum libero odit magni nulla ipsum harum eveniet dignissimos laboriosam facilis nesciunt itaque, possimus vel fugit ea. Animi, ducimus ipsam!",
      id: 2,
    },
    {
      firstname: "hafeez",
      lastname: "ulla",
      phoneNo: "9741893288",
      email: "hafeez97418@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid dolorum libero odit magni nulla ipsum harum eveniet dignissimos laboriosam facilis nesciunt itaque, possimus vel fugit ea. Animi, ducimus ipsam!",
      id: 3,
    },
    {
      firstname: "hafeez",
      lastname: "ulla",
      phoneNo: "9741893288",
      email: "hafeez97418@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid dolorum libero odit magni nulla ipsum harum eveniet dignissimos laboriosam facilis nesciunt itaque, possimus vel fugit ea. Animi, ducimus ipsam!",
      id: 4,
    },
    {
      firstname: "hafeez",
      lastname: "ulla",
      phoneNo: "9741893288",
      email: "hafeez97418@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid dolorum libero odit magni nulla ipsum harum eveniet dignissimos laboriosam facilis nesciunt itaque, possimus vel fugit ea. Animi, ducimus ipsam!",
      id: 5,
    },
  ];
  return (
    <div className="Enq">
      <h1>Enquiries</h1>

      {data.map((d) => {
        return <EnquiryCard data={d} key={d.id} />;
      })}
    </div>
  );
}

export default Enquiries;
