import React from "react";

export default () => {
  return (
    <article className="grid text-span-wrapper-end heading-span-9">
      <div className="grid-heading">
        <h2>93% of customers recommend us</h2>
      </div>
      <div className="grid-text">
        <div className="row">
          <div className="column">
            <div className="card">
              <img
                src="https://static.xolo.io/r-202001-022/images/articles/card-john.jpg"
                className="card-image"
                alt="Image of John, a Xolo customer"
              />
              <div className="card-body customer">
                <div className="card-title">John Ozbay, Cryptee, Tallinn</div>
                <p className="m-0">
                  “Companies like Xolo, who help me start and run my company in
                  Estonia, are so important to my life as an e-resident and
                  entrepreneur&#8202;—&#8202;they really make life that little
                  bit easier.”
                </p>
              </div>
              <div className="card-footer">
                <a
                  className="btn btn-forward"
                  href="https://blog.xolo.io/why-i-used-leapin-and-e-residency-to-launch-my-startup-cryptee-an-encrypted-home-for-your-private-2cd078843ba0"
                  target="_blank"
                  rel="noopener"
                  role="button"
                  aria-label="Read more"
                ></a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src="https://static.xolo.io/r-202001-022/images/articles/card-asad.jpg"
                className="card-image"
                alt="Image of Asad, a Xolo customer"
              />
              <div className="card-body customer">
                <div className="card-title">Asad Zulfahri, Digital Nomad</div>
                <p className="m-0">
                  “The wealth of information, added to the fantastic all-in-one
                  solution, made me feel comfortable signing up with Xolo.”
                </p>
              </div>
              <div className="card-footer">
                <a
                  className="btn btn-forward"
                  href="/articles/taking-your-work-worldwide"
                  role="button"
                  aria-label="Read more"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
