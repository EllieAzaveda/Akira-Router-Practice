import React, { Component } from 'react';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import { fetchDailyFact } from '../Utils/APICalls.js'
import './App.css';
import '../MainPage/MainPage.css';
import Astronomy from '../Astronomy/Astronomy';

class App extends Component {
  constructor() {
    super();
      this.state = {
        dailyFact: {},
        isClicked: false,
        error: ''
      }
  }

  // This handle click will toggle the display of Astronomy
  // See the conditional rendering in the render return
  handleClick = () => {
    (this.state.isClicked) ? this.setState({ isClicked: false }) : this.setState({ isClicked: true });
  }

  componentDidMount() {
    fetchDailyFact()
      .then(dailyFact => {
        if(typeof dailyFact === 'string') {
          this.setState({ error: dailyFact })
        } else {
          this.setState({ dailyFact: dailyFact })
        }
      })
      .catch(err => err.message)
  }

  render() {
    return (
      <>
        <article className='app'>
          <Header />
          <MainPage 
            handleClick={this.handleClick}
          />
          {this.state.isClicked &&
            <Astronomy 
              dailyFact={this.state.dailyFact}
          />
          }
        </article>
      </>
    )
  }
}

export default App;