import React from 'react';
import {
  Router,
  Route,
  Link,
} from 'react-router-dom';
import classNames from 'classnames';
import createHistory from 'history/createBrowserHistory';
import FlipMove from 'react-flip-move';

import Card from './components/Card'
import IndexView from './components/IndexView';
import Header from './components/Header';
import Queen from './components/Queen';

const history = createHistory();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.updateFilter = this.updateFilter.bind(this);
        this.renderQueens = this.renderQueens.bind(this);
        this.toggleFavourite = this.toggleFavourite.bind(this);
        this.getFavouriteIDs = this.getFavouriteIDs.bind(this);
        
        this.state = {
          favourites: [],
          filter: '',
          queens: [],
        };
    }

    componentDidMount() {
      fetch('http://www.nokeynoshade.party/api/queens/all', {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          queens: data,
        });
      });
    }

    getFavouriteIDs() {
      return this.state.favourites.map(f => f.id);
    }

    renderQueens(queens) {
      return queens
      .filter((queen) => {
        return queen.name.toLowerCase().includes(this.state.filter.toLowerCase())
      })
      .map((queen) => {
        const queenIsFavourited = this.getFavouriteIDs().includes(queen.id)
        return (
          <div key={queen.id} className="column is-one-quarter">
            <Card
              image_url={queen.image_url}
              title={queen.name} 
              description={queen.quote}
              click={() => {
                this.toggleFavourite(queen)
              }}
              titleClick={() => {
                history.push({
                  pathname: `/queen/${queen.id}`,
                });
              }}
              icon={classNames({
                'heart-o': !queenIsFavourited,
                'heart': queenIsFavourited,
              })}
            />
          </div>
        );
      });
    }

    updateFilter(event) {
      this.setState({
        filter: event.target.value,
      });
    }

    toggleFavourite(queen) {
      const queenIsFavourited = this.getFavouriteIDs().includes(queen.id)

      if (queenIsFavourited) {
        this.setState({
          favourites: this.state.favourites.filter(favourite => {
            return favourite.id !== queen.id
          }),
        });

        return;
      }

      this.setState({
        favourites: [
          ...this.state.favourites,
          queen,
        ],
      });
    }

    render() {
      return (
        <Router history={history}>
            <main>
              <Header favLength={this.state.favourites.length} />
              <Route
                path="/"
                exact
                render={() => (
                  <IndexView
                    filter={this.state.filter}
                    updateFilter={this.updateFilter}
                    renderQueens={() => {
                      return this.renderQueens(this.state.queens);
                    }}  
                  />
                )}
              />
              <Route
                exact
                path="/favourites"
                render={() => (
                  <FlipMove
                    enterAnimation="fade"
                    leaveAnimation="fade"
                    className="section columns is-multiline"
                  >
                    {this.renderQueens(this.state.favourites)}
                  </FlipMove>
                )}
              />
              <Route
                path="/queen/:id"
                component={Queen}
              />
            </main>
          </Router>
      );
    }
}

export default App;
