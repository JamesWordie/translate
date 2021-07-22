import React from 'react';
import Language from '../contexts/language';

class Field extends React.Component {
  static contextType = Language; // results in Button.contextType = ...

  render() {
    const text = this.context === 'english' ? 'Name' : 'Nom';

    return (
      <div className="card-body">
        <label className="form-label">{text}</label>
        <input className="form-control" />
      </div>
    );
  }
}

export default Field;
