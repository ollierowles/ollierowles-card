import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFile} from '@fortawesome/free-solid-svg-icons'
import {faBarsProgress} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
 

export default function Card() {
  return (
    <div className='card-container'>
        <div className='card'>

            <img className='card-photo' src={require('../imgs/profile-photo.png')} alt='Ollie Rowles' />
            <h1 className='card-title'> Ollie Rowles </h1>
            <div className='card-content'>
                <div className='card-intro'>
                
                    <div className='card-list'>
                        <ul>
                            <li className='card-list-item'> Mechatronics and Robotics Student</li>
                            <li className='card-list-item'> Software Engineer</li>
                            <li className='card-list-item'> Weightlifting, Guitar and Music</li>
                        </ul>
                    
                    </div>

                    <div className='card-bio'>
                            <p>Currently in my fourth year studying Mechatronics and Robotics at the University of Birmingham and looking for a graduate role in Software Engineering. <br/><br/> If you have any opportunities available, feel free to contact me <a className='link-styles'>here</a>.</p>
                    </div>  


                </div> 

                <div className='card-links'>
                    <div className='card-links-top'>
                        <a href='https://twitter.com/ollie_rowles' target='_blank'><p className='link-bg'><FontAwesomeIcon icon={faTwitter}  className='icon-styles'/>Twitter</p></a>
                        <a href='https://www.linkedin.com/in/ollierowles/' target='_blank'><p className='link-bg'><FontAwesomeIcon icon={faLinkedin} className='icon-styles'/>LinkedIn</p></a>
                        <a href='https://github.com/ollierowles' target='_blank'><p className='link-bg'><FontAwesomeIcon icon={faGithub} className='icon-styles'/>GitHub</p></a>
                    </div>
                    <div className='card-links-bottom'>
                        <a href='' target='_blank'><p className='link-bg'><FontAwesomeIcon icon={faFile} className='icon-styles'/>CV</p></a>
                        <a href='#projects-anchor'><p className='link-bg'><FontAwesomeIcon icon={faBarsProgress} className='icon-styles'/>Projects</p></a>
                        <a href='' target='_blank'><p className='link-bg'><FontAwesomeIcon icon={faEnvelope} className='icon-styles'/>Contact</p></a>
                    </div>
                </div>

                <div className='card-projects' id='projects-anchor' >
                    <h2>Projects</h2>
                    <h3>AlbumWatch</h3>
                    <li> Full-stack web application allowing the search of albums and lyrics through Spotifys API</li>
                    <li> Dynamically changing content based on user search through React hooks and state</li>
                    <li> User authentication control through hooks and Axios backend</li>
                    <li> Technologies used: React, JavaScript, HTML/CSS, Axios, Spotify Web API, LyricsFinder API</li>
                    <h3>Student Module Choice GUI</h3>
                    <li> Application to capture students details and module choices</li>
                    <li> GUI allows the user to see the stored details/choices and make modifications</li>
                    <li> Technologies used: Java, JavaFX, CSS</li>
                    <h3>Music Client-Server Application</h3>
                    <li> Multi Client-Server application using TCP protocotol, where users can request information from a music database</li>
                    <li> Request forms an SQL query using a prepared statement to query PostgreSQL database</li>
                    <li> Technologies used: Java OOP/Networks, JDBC, PostgreSQL</li>
                </div>

                <div className='card-footer'>
                    <p>Crafted with React and GitHub Pages</p>
                    <p>Design inspired by Reza Arkan</p>
                    <a href='#top-anchor'><p>ollierowles.com</p></a>
                </div>
            </div>
        </div>
    </div>
  )
}
