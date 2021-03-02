import * as React from 'react';

export function TaskFinderSection() {
  return (
    <section className="p-lg-7 p-3">
      <div className="container">
        <div className="section-title">
          <h2>Become a Task Runner</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <form>
          <div className="row">
            <div className="col-md-4 form-group">
              <input
                id="name"
                className="form-control"
                name="name"
                placeholder="Your Name"
              />
              <div className="validate" />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                id="email"
                className="form-control"
                type="email"
                name="email"
                placeholder="Your Email"
              />
              <div className="validate" />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                id="phone"
                className="form-control"
                type="tel"
                name="phone"
                placeholder="Your Phone"
              />
              <div className="validate" />
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows={5}
              placeholder="Tell us about your experience..."
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-secondary btn-lg">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
