import * as React from 'react';
import { FakeLink } from './FakeLink';

export function Footer() {
  return (
    <footer className="container py-5">
      <div className="row">
        <div className="col-12 col-md">
          <b className="font-weight-bold">Task</b>Mallard
          <small className="d-block mb-3 text-muted">
            IS NOT A REAL COMPANY
          </small>
        </div>
        {[
          {
            title: 'Local',
            links: [
              'Movers',
              'Massage Therapists',
              'Best Friends',
              'Piano Lessons',
            ],
          },
          {
            title: 'Online',
            links: ['Math Tutors', 'Accountants', 'Software Developers'],
          },
          {
            title: 'About',
            links: ['Locations', 'Privacy', 'Terms and Conditions'],
          },
        ].map((item) => (
          <div key={item.title} className="col-6 col-md">
            <div className="h5">{item.title}</div>
            <ul className="list-unstyled text-small">
              {item.links.map((name) => (
                <li key={name}>
                  <FakeLink className="text-muted">
                    {name}
                  </FakeLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
