import React from 'react';
import LanguageContext from '../contexts/language';
import ColorContext from '../contexts/color';

class Button extends React.Component {
  static contextType = LanguageContext; // results in Button.contextType = ...

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Soumettre';

    return (
      <ColorContext.Consumer>
        {(color) =>
          <button className={`btn btn-outline-${color}`}>{text}</button>
        }
      </ColorContext.Consumer>
    );
  }
}

export default Button;
