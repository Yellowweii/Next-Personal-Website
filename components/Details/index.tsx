import React from "react";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li>
      <div>
        <h3>
          {position}&nbsp;<a href={companyLink}>@{company}</a>
        </h3>
      </div>
    </li>
  );
};

export default Details;
