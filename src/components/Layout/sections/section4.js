import React from "react";

export default () => {
  return (
    <article className="grid text-span-wrapper-end">
      <div className="grid-text">
        <div className="row">
          <div className="column overflow-auto">
            <table className="table-features">
              <thead>
                <tr>
                  <th></th>
                  <td>
                    <img
                      src="https://static.xolo.io/r-202001-022/images/xolo-logo-small.svg"
                      alt="Xolo logo"
                      width="26px"
                      height="26px"
                    />
                  </td>
                  <td>
                    <strong>The Old Way</strong>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Setup time</th>
                  <td>
                    <strong>in minutes</strong>
                  </td>
                  <td>few weeks</td>
                </tr>
                <tr>
                  <th>Monthly admin time</th>
                  <td>
                    <strong>max 1 hour</strong>
                  </td>
                  <td>more than 10 hours</td>
                </tr>
                <tr>
                  <th>Customer satisfaction</th>
                  <td>
                    <object
                      type="image/svg+xml"
                      data="https://static.xolo.io/r-202001-022/images/www/ico-stars-pink.svg"
                    >
                      4 stars
                    </object>
                  </td>
                  <td>
                    <object
                      type="image/svg+xml"
                      data="https://static.xolo.io/r-202001-022/images/www/ico-star-pink.svg"
                    >
                      1 star
                    </object>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </article>
  );
};
