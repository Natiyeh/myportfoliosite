import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,
  CardText, CardActions, Button } from 'react-mdl';
import HomeAway from '../img/homeAway.jpg';
import Lavender from '../img/lavender.jpg';
import Popndrop from '../img/popndrop.jpg';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return(
        <div className="projects-grid">
          <div className="list">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{height: '176px', background:
                `url(${HomeAway}) center / cover`}} />
              <CardText>
                this is an airbnb clone
              </CardText>
              <CardActions border style={{textAlign: 'center'}}>
                <Button>
                  <a href="https://github.com/Natiyeh/HomeAway" rel="noopener noreferrer" target="_blank">
                    GitHub
                  </a>
                </Button>
                <Button>
                  <a href="https://home-away-01.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                    Website
                  </a>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="list">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{height: '176px', background:
                `url(${Lavender}) center / cover`}} />
              <CardText>
                this is an airbnb clone
              </CardText>
              <CardActions border style={{textAlign: 'center'}}>
                <Button colored>GitHub</Button>
                <Button colored>Website</Button>
              </CardActions>
            </Card>
          </div>
          <div className="list">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{height: '176px', background:
                `url(${Popndrop}) center / cover`}} />
              <CardText>
                this is an airbnb clone
              </CardText>
              <CardActions border style={{textAlign: 'center'}}>
                <Button colored>GitHub</Button>
                <Button colored>Website</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return(
        <div><h1>this is React</h1></div>
      )
    } else if (this.state.activeTab === 2) {
      return(
        <div><h1>this is Vanilla JavaScript</h1></div>
      )
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Ruby on Rails</Tab>
          <Tab>React</Tab>
          <Tab>Vanilla JavaScript</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
