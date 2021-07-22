import React from 'react';
import LanguageContext from '../contexts/language'

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        <i className="flag fr"
           onClick={() => this.context.onLanguageChange('french')}
        ></i>
        <i className="flag uk"
           onClick={() => this.context.onLanguageChange('english')}
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
