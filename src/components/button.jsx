import React from 'react';
import LanguageContext from '../contexts/language';
import ColorContext from '../contexts/color';

class Button extends React.Component {
  static contextType = LanguageContext; // results in Button.contextType = ...

  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Soumettre';
  }

  renderButton(color) {
    return (
      <button className={`btn btn-outline-${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) =>
          this.renderButton(color)
        }
      </ColorContext.Consumer>
    );
  }
}

export default Button;
