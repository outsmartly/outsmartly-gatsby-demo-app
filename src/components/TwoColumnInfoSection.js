import * as React from 'react';

// @outsmartly
export function TwoColumnInfoSection({ order, title, bullets, image }) {
  return (
    <section className="p-lg-7 p-3">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div
            className={`col-12 col-lg-6 order-2 order-lg-${
              order === 'text-right' ? '2' : '1'
            }`}
          >
            <h2>{title}</h2>
            {bullets?.length > 0 && (
              <ul>
                {bullets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
          </div>
          <div
            className={`section-image col-12 col-lg-6 py-4 order-1 order-lg-${
              order === 'text-right' ? '1' : '2'
            }`}
          >
            {image}
          </div>
        </div>
      </div>
    </section>
  );
}
