import React from 'react';
import UserCreate from './userCreate';
import LanguageContext from '../contexts/language';
import ColorContext from '../contexts/color';
import LanguageSelector from './languageSelector';

class App extends React.Component {
  state = { language: "english" }

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="container mh-100">
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-md-6 mt-5 shadow-sm p-3">
            <div className="card p-3">
              <div className="card-header d-inline-flex align-items-center justify-content-between">
                <h4>Select a Language:</h4>
                <LanguageSelector onLanguageChange={this.onLanguageChange} />
              </div>
              <LanguageContext.Provider value={this.state.language}>
                <ColorContext.Provider value={'success'}>
                  <UserCreate />
                </ColorContext.Provider>
              </LanguageContext.Provider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
