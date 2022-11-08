import { Link } from "react-router-dom"

function Home(){
    return(
        <>
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="page-content">

                    <div className="main-banner">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="header-text">
                                    <h6>Welcome To Cyborg</h6>
                                    <h4><em>Browse</em> Our Popular Games Here</h4>
                                    <div className="main-button">
                                        <Link to="brower">Browse Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="most-popular">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-section">
                                <h4><em>Most Popular</em> Right Now</h4>
                                </div>
                                <div className="row">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="item">
                                    <img src="assets/images/popular-01.jpg" alt=""></img>
                                    <h4>Fortnite<br></br><span>Sandbox</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> 4.8</li>
                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="item">
                                    <img src="assets/images/popular-02.jpg" alt=""></img>
                                    <h4>PubG<br></br><span>Battle S</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> 4.8</li>
                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="item">
                                    <img src="assets/images/popular-03.jpg" alt=""></img>
                                    <h4>Dota2<br></br><span>Steam-X</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> 4.8</li>
                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="item">
                                    <img src="assets/images/popular-04.jpg" alt=""></img>
                                    <h4>CS-GO<br></br><span>Legendary</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> 4.8</li>
                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                        <div className="item inner-item">
                                            <img src="assets/images/popular-05.jpg" alt=""></img>
                                            <h4>Mini Craft<br></br><span>Legendary</span></h4>
                                            <ul>
                                            <li><i className="fa fa-star"></i> 4.8</li>
                                            <li><i className="fa fa-download"></i> 2.3M</li>
                                            </ul>
                                        </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                        <div className="item">
                                            <img src="assets/images/popular-06.jpg" alt=""></img>
                                            <h4>Eagles Fly<br></br><span>Matrix Games</span></h4>
                                            <ul>
                                            <li><i className="fa fa-star"></i> 4.8</li>
                                            <li><i className="fa fa-download"></i> 2.3M</li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="item">
                                    <img src="assets/images/popular-07.jpg" alt=""></img>
                                    <h4>Warface<br></br><span>Max 3D</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> 4.8</li>
                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="item">
                                    <img src="assets/images/popular-08.jpg" alt=""></img>
                                    <h4>Warcraft<br></br><span>Legend</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> 4.8</li>
                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="main-button">
                                    <Link to="brower">Discover Popular</Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className="gaming-library">
                            <div className="col-lg-12">
                            <div className="heading-section">
                                <h4><em>Your Gaming</em> Library</h4>
                            </div>
                            <div className="item">
                                <ul>
                                <li><img src="assets/images/game-01.jpg" alt="" className="templatemo-item"></img></li>
                                <li><h4>Dota 2</h4><span>Sandbox</span></li>
                                <li><h4>Date Added</h4><span>24/08/2036</span></li>
                                <li><h4>Hours Played</h4><span>634 H 22 Mins</span></li>
                                <li><h4>Currently</h4><span>Downloaded</span></li>
                                <li><div className="main-border-button border-no-active"><Link to="#">Donwloaded</Link></div></li>
                                </ul>
                            </div>
                            <div className="item">
                                <ul>
                                <li><img src="assets/images/game-02.jpg" alt="" className="templatemo-item"></img></li>
                                <li><h4>Fortnite</h4><span>Sandbox</span></li>
                                <li><h4>Date Added</h4><span>22/06/2036</span></li>
                                <li><h4>Hours Played</h4><span>740 H 52 Mins</span></li>
                                <li><h4>Currently</h4><span>Downloaded</span></li>
                                <li><div className="main-border-button"><Link to="#">Donwload</Link></div></li>
                                </ul>
                            </div>
                            <div className="item last-item">
                                <ul>
                                <li><img src="assets/images/game-03.jpg" alt="" className="templatemo-item"></img></li>
                                <li><h4>CS-GO</h4><span>Sandbox</span></li>
                                <li><h4>Date Added</h4><span>21/04/2036</span></li>
                                <li><h4>Hours Played</h4><span>892 H 14 Mins</span></li>
                                <li><h4>Currently</h4><span>Downloaded</span></li>
                                <li><div className="main-border-button border-no-active"><Link to="#">Donwloaded</Link></div></li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-lg-12">
                            <div className="main-button">
                                <Link to="profile">View Your Library</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Home