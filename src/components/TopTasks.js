import * as React from 'react';
import { FakeLink } from './FakeLink';

// @outsmartly
export function TopTasks({ tasks, visitorLocation = 'your area' }) {
  return (
    <section className="pt-lg-5 p-3">
      <div className="container">
        <h2 className="h3 pb-4">Popular tasks in {visitorLocation}</h2>
        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
          {tasks.map((task) => (
            <div key={task.name} className="col mb-4">
              <FakeLink className="card text-center">
                <img
                  className="card-img-top"
                  src={task.image.url}
                  alt={task.image.description}
                  width="340"
                />
                <div className="card-body">
                  <h3 className="h5 card-title">{task.name}</h3>
                  <p className="card-text">
                    <Star active={task.starCount > 0} />
                    <Star active={task.starCount > 1} />
                    <Star active={task.starCount > 2} />
                    <Star active={task.starCount > 3} />
                    <Star active={task.starCount > 4} />
                  </p>
                </div>
                <div className="card-footer text-secondary">
                  ${task.priceRange.low} – ${task.priceRange.high}
                </div>
              </FakeLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Star({ active }) {
  return (
    <svg
      className={`star ${active ? 'active' : ''}`}
      viewBox="0 0 53.867 53.867"
    >
      <polygon points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 " />
    </svg>
  );
}
