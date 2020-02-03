import React from "react";

export default  () => {
  return (
    <footer className="footer">
        <div className="grid text-span-wrapper-end">
            <div className="grid-text">
                <div className="logo">
                    <a href="/" className="footer-logo-link" role="button">
                        <img src="https://static.xolo.io/r-202001-022/images/xolo-logo-small.svg" alt="Xolo logo"/>
                    </a>
                </div>
                <div className="row">
                    <div className="column">
                        <span className="footer-link-title">Products</span>
                        <ul>
                            <li><a href="/go">Xolo Go</a></li>
                            <li><a href="/leap">Xolo Leap</a></li>
                            <li><a href="/pricing">Pricing</a></li>
                            <li><a href="/compare">Compare products</a></li>
                        </ul>
                        <div className="footer-app-download">
                            <a href="https://apps.apple.com/ca/app/xolo/id1472741715" target="_blank" rel="noopener noreferrer" className="  gtm-outbound-link">
                              <img srcSet="https://static.xolo.io/r-202001-022/images/app-store-download.svg" className="app-store" alt="App-store download"/>
                            </a><a href="https://play.google.com/store/apps/details?id=io.xolo.mobile" target="_blank" rel="noopener noreferrer" className="  gtm-outbound-link"><img srcSet="https://static.xolo.io/r-202001-022/images/google-play-download.svg" className="google-play" alt="Google-play download"/>
                            </a></div>
                    </div>
                    <div className="column">
                        <span className="footer-link-title">Resources</span>
                        <ul>
                            <li><a href="/faq" className="">Help</a></li>
                            <li><a href="/articles" className="">Articles</a></li>
                            <li><a href="https://blog.xolo.io/">Blog</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <span className="footer-link-title">Company</span>
                        <ul>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/contact">Contact</a></li> 
                        </ul>
                    </div>
                    <div className="column">
                        <a href="https://blog.xolo.io/today-we-make-our-revolution-pocket-sized-the-xolo-leap-mobile-app-is-here-7c912b672bc8" aria-label="Xolo leap goes mobile">
                            <div className="footer-media">
                                <div className="footer-media-caption">
                                    <h3>Xolo Leap <br/> goes mobile</h3>
                                    <span className="tag-link">Learn more</span>
                                </div>
                                <img srcSet="https://static.xolo.io/r-202001-022/images/footer-media.png    1x,
                                         https://static.xolo.io/r-202001-022/images/footer-media-2x.png 2x" src="https://static.xolo.io/r-202001-022/images/footer-media.png" alt="Footer image"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <hr className="footer-line"/>

        <div className="grid text-span-wrapper-end footer-additional">
            <div className="grid-text">
                <div className="copyright">
                    <span>© Xolo OÜ. All Rights Reserved.</span>
                </div>
                <div className="terms-privacy">
                    <a href="/terms">Terms</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/meist">EST</a>
                </div>
                <div className="social-item">
                    <a href="https://www.instagram.com/xolopreneur/" target="_blank" rel="noopener noreferrer" className="social-media instagram  gtm-outbound-link" aria-label="Instagram social media link"></a><a href="https://twitter.com/xolopreneur" target="_blank" rel="noopener noreferrer" className="social-media twitter  gtm-outbound-link" aria-label="Twitter social media link"></a><a href="https://www.facebook.com/xolopreneur" target="_blank" rel="noopener noreferrer" className="social-media facebook  gtm-outbound-link" aria-label="Facebook social media link"></a><a href="https://www.linkedin.com/company/xolopreneur/" target="_blank" rel="noopener noreferrer" className="social-media linkedin  gtm-outbound-link" aria-label="Linkedin social media link"></a></div>
            </div>
        </div>
    </footer>)
}
