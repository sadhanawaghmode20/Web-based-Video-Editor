
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faHome, faListAlt, faPodcast, faTv, faPlus, faBroadcastTower, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import DummyVideo from '../assets/DummyVideo.mp4'

const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5">
                        <div className="sidebar">
                            <div className="sidebar-header">
                                VEED.IO
                            </div>
                            <ul className="sidebar-menu">
                                <li className="new-video"><a href="#"><FontAwesomeIcon icon={faVideo} />New Video</a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faHome} /><b>Home</b></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faListAlt} /><b>Templates</b></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faListAlt} /><b> All Videos</b></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faPodcast} /><b>Podcast & Shows</b></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faTv} /><b> Brand Kit</b></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-7">
                        {/* Search Bar */}
                        <div className="search-bar" style={{ marginBottom: '20px', marginRight: '650px', marginTop: '15px', height: '30px' }}>
                            <input type="text" placeholder="Search..." style={{ width: '300px', height: '100%' }} />
                        </div>


                        {/* Buttons */}
                        <div className="buttons" style={{ marginTop: '90px', marginRight: '300px' }}>
                            <p style={{ fontSize: '20px' }}>Let's create some <span style={{ fontWeight: 'bold' }}>videos! </span></p>
                            <button className="btn" style={{ backgroundColor: 'white', color: 'black', border: '2px solid white', marginRight: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}>
                                <FontAwesomeIcon icon={faPlus} className="me-1" /> Create Project
                            </button>
                            <button className="btn" style={{ backgroundColor: 'white', color: 'black', border: '2px solid white', marginRight: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}>
                                <FontAwesomeIcon icon={faVideo} className="me-1" /> Record Video
                            </button>
                            <button className="btn" style={{ backgroundColor: 'white', color: 'black', border: '2px solid white', marginRight: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}>
                                <FontAwesomeIcon icon={faBroadcastTower} className="me-1" /> Go Live
                            </button>
                            <button className="btn" style={{ backgroundColor: 'white', color: 'black', border: '2px solid white', marginRight: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}>
                                <FontAwesomeIcon icon={faMicrophone} className="me-1" /> Record Podcast
                            </button>
                            <div className="col-5 mt-5">
                                <h6>My Recent Videos</h6>
                                {/* Dummy Video */}
                                <video width="320" height="240" controls>
                                    <source src={DummyVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>


                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
