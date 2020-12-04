import React from 'react';
import './App.scss';
import { getParkData } from '../helpers/data/parkData';
import TestCard from '../components/Cards/TestCard';

class App extends React.Component {
  state = {
    parks: [],
  }

  componentDidMount() {
    getParkData().then((resp) => {
      this.setState({
        parks: resp,
      });
    });
  }

  render() {
    const { parks } = this.state;
    return (
      <div className="App">
        {parks.map((park) => <TestCard key={park.id} park={park} />)}
     </div>
    );
  }
}

export default App;
