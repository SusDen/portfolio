import React from 'react';
import CompanyProfile from "./CompanyProfile/CompanyProfile";
import DreamBDR from "./DreamBigDoRight/DreamBDR";
import OurPartners from "./OurAmazingPartners/OurPartners";
import CustomerService from "./CustomerService/CustomerService";
import GetIn from "./GetInTouch/GetIn";

const Content = () => {
  return (
    <div>
      <CompanyProfile/>
      <DreamBDR/>
      <OurPartners/>
      <CustomerService/>
      <GetIn/>
    </div>
  );
};

export default Content;