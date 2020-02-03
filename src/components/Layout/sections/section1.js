import React from "react";

const SectionOne = () => {
  return (
    <section className="section-header section-blue section-home-1">
      <article className="grid">
        <div className="grid-text">
          <h1>The home of modern freelancers</h1>
          <p>
            Xolo is your bank account, your accountant, your company and your
            best friend in business. Let Xolo do the hard work, so you can focus
            on your customers.
          </p>

          <form
            action="/signup/from-email-input"
            method="post"
            data-bind="csrfReload"
          >
            <input
              type="hidden"
              name="_csrf"
              value="16f16d71-3519-4e61-8712-60619bbc4310"
            />
            <div className="input-group">
              <input
                className="input input-light"
                type="email"
                maxLength="100"
                name="startEmail"
                id="sign-up-home"
                placeholder="Email address"
              />
              <label className="sr-only">
                Sign up using your email address
              </label>
              <button type="submit" className="btn btn-red">
                Get Xolo
              </button>
            </div>
          </form>
        </div>
        <figure className="grid-media">
          <div className="badge-link">
            <a
              href="/articles/truly-location-independent"
              className="link-more"
            >
              Read Michelle's story
            </a>
          </div>
          <img
            src="https://static.xolo.io/r-202001-022/images/www/home/michelle.jpg"
            alt="Image of Michelle, a Xolo customer"
          />
        </figure>
      </article>
    </section>
  );
};
export default SectionOne;