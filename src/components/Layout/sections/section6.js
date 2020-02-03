
import React from "react";

export default () => {

return ( 
<article className="grid text-span-wrapper-end heading-span-9">
<div className="grid-heading">
    <h2>Choose the Xolo that works for you</h2>
</div>
<div className="grid-text">
    <div className="row">
        <div className="column">
            <a href="/go" className="card card-product card-red">
                <div className="badge">
                    <span>New</span>
                </div>
                <div className="card-body pb-0">
                    <div className="card-title">Go</div>
                    <p>A virtual company with <br/>pay-as-you-go pricing.</p>
                </div>
                <div className="card-footer">
                    <button role="button" aria-label="More information about Xolo Leap" className="btn btn-forward-white"></button>
                </div>
            </a>
        </div>
        <div className="column">
            <a href="/leap" className="card card-product card-blue">
                <div className="badge badge-red">
                    <span>Popular</span>
                </div>
                <div className="card-body pb-0">
                    <div className="card-title">Leap</div>
                    <p>Your EU company with <br/> a fixed monthly fee.</p>
                </div>
                <div className="card-footer">
                    <button role="button" aria-label="More information about Xolo Leap" className="btn btn-forward-white"></button>
                </div>
            </a>
        </div>
    </div>
</div>
</article>
)
}