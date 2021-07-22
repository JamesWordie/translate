import React from 'react';

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        <i className="flag fr"
           onClick={() => this.props.onLanguageChange('french')}
        ></i>
        <i className="flag uk"
           onClick={() => this.props.onLanguageChange('english')}
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
