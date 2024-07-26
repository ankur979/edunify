import React from "react";

const SchoolCard = ({ school }) => {
  return (
    <div className="school-card">
      <div className="card-image">
        <img
          src={school?.image ?? "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          alt="Lucknow Public School Vinamra Khand"
        />
      </div>
      <div className="card-content">
        <div className="location">{school?.city ?? ""}</div>
        <div className="school-name">{school?.name ?? ""}</div>
        <div className="area">{school?.address ?? ""}</div>
      </div>
    </div>
  );
};

export default SchoolCard;
