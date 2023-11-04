import React from "react";

export default function Services() {
  return (
    <section className="Services">
      <ul>
        <li className="Service Service-consultation" id="consultation">
          <div className="Service-details">
            <h3>Consultation</h3>
            <p>
              From repairs and renovations to general maintainance, we can cover
              all aspects of your aquatic environment needs. With over 30 years
              of experience, Martin Simmermacher has extensive knowledge to
              answer any question that may arise.
            </p>
          </div>
        </li>
        <li className="Service Service-restoration" id="restoration">
          <div className="Service-details">
            <h3>Restoration</h3>
            <p>
              Make your pool look like new with an over haul of your existing
              aquatic environment. Proceed with confidence knowing that your
              needs and desires will be met by an expert.
            </p>
          </div>
        </li>
        <li className="Service Service-maintainance" id="maintainance">
          <div className="Service-details">
            <h3>Maintainance</h3>
            <p>
              Rest assured that your aquatic enviorments will be maintained with
              utmost care by our trained and experienced technicians. There is
              no condition that cannot be improved in order to bring your pool
              back to life and keep it pristine.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
