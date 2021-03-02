import * as React from 'react';

export function OneColumnInfoSection({ title, description }) {
  return (
    <section className="bg-primary p-lg-7 p-3 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">{title}</h2>
            <hr className="divider light my-4" />
            {description}
          </div>
        </div>
      </div>
    </section>
  );
}
