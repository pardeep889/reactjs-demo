import React from "react";

export default () => {
  return (
    <section className="section-pink section-footer-extra">
      <article className="grid text-span-15">
        <div className="grid-text">
          <div className="row">
            <div className="column">
              <h2>Subscribe to our newsletter</h2>
            </div>
          </div>
          <div className="row newsletter-row">
            <div className="column">
              <form action="" method="post" id="newsletter-form">
                <div className="input-group">
                  <input
                    className="input"
                    type="email"
                    name="startEmail"
                    id="newsletter-sign-up"
                    placeholder="Email address"
                  />
                  <label className="sr-only">
                    Sign up using your email address
                  </label>
                  <button
                    type="submit"
                    aria-label="Sign up"
                    className="btn btn-red"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="column order-first-small">
              <p>
                Get the latest updates and expert business tips straight to your
                inbox.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
