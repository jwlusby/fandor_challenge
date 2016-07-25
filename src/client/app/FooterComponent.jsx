import React from 'react'

class FooterComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        
        var emailFormStyle= "emailFormStyle: background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQ…umPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; background-repeat: no-repeat";
        return (
            <span className="footer-container">
                <div id="multi_line_footer" className="row ">
                    <div id="multi_line_footer_column" className="twelve columns">
                        <div className="multi-line-column">
                            <h4>Join us</h4>
                            <ul>
                                <li className="subscribe">
                                    <a title="Subscribe to watch Independent movies, International films, Documentaries and short films streaming on demand" href="https://www.fandor.com/users/new?secure=true">Subscribe</a>
                                </li>
                                <li>
                                    <a title="Learn about the subscription options available" href="/subscription/plans">Pricing Plans</a>
                                </li>
                                <li>
                                    <a title="Buy a gift subscription to Fandor for family or a friend" href="/gift_subscriptions">Gift Subscriptions</a>
                                </li>
                                <li>
                                    <a title="Invite a friend to Fandor" href="/invite">Invite a Friend</a>
                                </li>
                                <li><a href="/edu">Educators &amp; Students</a></li>
                            </ul>
                        </div>

                        <div className="multi-line-column">
                            <h4>Watch everywhere</h4>
                            <ul>
                                <li className="watch-subheader">In Your Living Room</li>
                                <li>
                                    <a title="Watch Fandor movies on your Apple TV" href="/appletv">Apple TV</a>
                                </li>
                                <li>
                                    <a title="Cast independent and international movies to your Google Chromecast" href="/watch-on-chromecast">Chromecast</a>
                                </li>
                                <li>
                                    <a title="Fandor is now on Roku. Watch independent and international movies on your TV!" href="/roku">Roku</a>
                                </li>
                                <li className="watch-subheader">On Your Device</li>
                                <li>
                                    <a title="Watch independent and international movies on your Android tablet or phone" href="/android">Android</a>
                                </li>
                                <li>
                                    <a title="Watch independent and international movies on your Kindle" href="/kindle">Kindle</a>
                                </li>
                                <li>
                                    <a title="Watch independent and international movies on your iPad" href="/ipad">iPad</a>
                                </li>
                                <li>
                                    <a title="Watch independent and international movies on your iPhone" href="/iphone">iPhone</a>
                                </li>
                            </ul>
                        </div>

                        <div className="multi-line-column">
                            <h4>Company</h4>
                            <ul>
                                <li>
                                    <a title="Learn more about Fandor and our Independent and International movie platform." href="/company/about">About</a>
                                </li>
                                <li>
                                    <a rel="nofollow" target="blank" title="Read about company news and events on our blog" href="http://blog.fandor.com">Blog</a>
                                </li>
                                <li>
                                    <a title="Careers at Fandor" href="/company/careers">Careers</a>
                                </li>
                                <li>
                                    <a title="Fandor News, Media Kit and Press Releases" href="/company/press">Press</a>
                                </li>
                                <li>
                                    <a title="How to Submit Your Film to Fandor" href="/company/film_submission">Submit Your Film</a>
                                </li>
                                <li>
                                    <a title="Get help and see Frequently Asked Questions about Fandor's streaming movie service" href="http://help.fandor.com">Support</a>
                                </li>
                                <li>
                                    <a title="Contact Fandor - Your independent movie source!" href="/company/contact">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="multi-line-column">
                            <h4>Stay connected</h4>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/fandor">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://plus.google.com/107989530253588170056">Google+</a>
                                </li>
                                <li>
                                    <a href="http://instagram.com/fandorfilms">Instagram</a>
                                </li>
                                <li>
                                    <a href="http://www.pinterest.com/fandorfilms">Pinterest</a>
                                </li>
                                <li>
                                    <a href="http://keyframedaily.tumblr.com/">Tumblr</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/Fandor">Twitter</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/user/Fandorific">YouTube</a>
                                </li>
                            </ul>
                        </div>

                        <div id="newsletter-column" className="multi-line-column">
                            <div className="divider"></div>
                            <h4>Newsletter</h4>
                            <div className="js-email-signup">
                                <div className="new_guest_email_signup" id="new_guest_email_signup" action="/guest_email_signups" >
                                    
                                    <div className="row">
                                        <div className="small-12 columns">
                                            <input placeholder="Your email address" className="radius js-guest-email" type="text"  id="guest_email_signup_email" style={{emailFormStyle}}/>
                                            <input value="from-guest-nonhome-footer" type="hidden" name="" id="guest_email_signup_source"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="small-12 columns">
                                            <input type="button" name="commit" value="Sign up"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="small-12 columns note"></div>
                                    </div>
                                </div>
                            </div>
                            <p>Sign up now to be the first to hear about new and featured films, film culture news and exclusive offers from Fandor.</p>
                        </div>
                        <span className="stretch"></span>
                    </div>
                </div>

                <div id="social_widgets_footer" className="row">
                    <div className="twelve columns">
                        <div className="social-widget vcenter">
                            <img className="vcenter" src="images/facebook_like_mock.png" />
                        </div>
                        <div className="social-widget vcenter">
                            <img className="vcenter" src="images/twitter_follow_mock.png" />
                        </div>
                        <div className="social-widget vcenter">
                            <img className="vcenter" src="images/google_plus_one_mock.png" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="twelve columns copyright-line">
                        <span className="copyright">©2010-2016 Our Film Festival, Inc.</span>
                        <span><a title="Fandor's Privacy Policy" rel="nofollow" href="/company/privacy_policy">Privacy</a></span>
                        <span><a title="Terms of Use and Conditions" rel="nofollow" href="/company/terms_of_use">Terms</a></span>
                        <span><a title="Fandor Sitemap" href="/sitemap">Sitemap</a></span>
                    </div>
                </div>
             </span>
         );
    }
}

export default FooterComponent;