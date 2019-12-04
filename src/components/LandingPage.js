import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfilePic from '../img/nasser3.jpg';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="avatar-holder">
              <img
                src={ProfilePic}
                alt="avatar"
                className="avatar-img"
              />
            </div>
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express</p>
              <div className="social-links">
                {/*LinkedIn*/}
                <a href="https://www.linkedin.com/in/nasser-atiyeh-3758a6b8/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*GitHub*/}
                <a href="https://github.com/Natiyeh" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/*Twitter*/}
                <a href="https://twitter.com/Nassboss" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                {/*Facebook*/}
                <a href="https://www.facebook.com/nasser.atiyeh.9?ref=bookmarks" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
