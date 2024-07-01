import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const industries: string[] = [
  "Healthcare",
  "Education",
  "E-Commerce",
  "Logistic",
  "Hospital Industry",
  "Automotive",
  "Banking",
  "Communication & Media",
];

const IndustriesList: React.FC = () => {
  return (
    <div className="col-md-4">
      <p>Industries</p>
      {industries.map((industry, index) => (
        <p key={index} className="d-flex health-car-right-arrow-icon-text">
          <IoIosArrowForward className="mt-1 right-arrow-icon" />
          &nbsp;<span>{industry}</span>
        </p>
      ))}
    </div>
  );
};

export default IndustriesList;
