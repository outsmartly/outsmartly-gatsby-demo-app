import * as React from 'react';
import { FakeLink } from './FakeLink';
import { GlobalLocationsImage } from './images/GlobalLocationsImage';

// @outsmartly
export function HeroSection({ headline, description, cta }) {
  return (
    <section
      id="home"
      className="section hero-section overflow-hidden d-flex align-items-center"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 col-lg-6 py-5 py-lg-6">
            <h1 className="text-white">{headline}</h1>
            <p className="text-white my-4">{description}</p>
            <FakeLink className="btn btn-primary btn-lg">{cta?.label}</FakeLink>
          </div>
          <div className="col-12 col-md-5 col-lg-6 pt-2 pb-7 pt-lg-5 pb-lg-6">
            <GlobalLocationsImage />
          </div>
        </div>
      </div>
      <svg className="hero-bottom">
        <polygon fill="#fff" points="2560 0 2560 100 0 100" />
      </svg>
    </section>
  );
}
