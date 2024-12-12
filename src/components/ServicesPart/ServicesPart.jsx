import React from 'react';
import "./ServicesPart.css";
import ServicesCard from '../ServicesCard/ServicesCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faHeadset, faCheck } from "@fortawesome/free-solid-svg-icons";

export const ServicesPart = () => {
  return (
    <div className='row'>
      <div className='col-12 col-md-4'>
        <ServicesCard icon={ faTruck} h2="Free and Fast Delivary" p="Free Delivary for all ordersover $140" />
      </div>
      <div className='col-12 col-md-4'>
      <ServicesCard icon={ faHeadset} h2="24 H Customer Services" p="Fredly Custemer Support" />
      </div>
      <div className='col-12 col-md-4'>
      <ServicesCard icon={ faCheck} h2="Money Back Guarntee" p="You reyurn money whitin 30 days" />
      </div>
    </div>
  );
};

export default ServicesPart;

