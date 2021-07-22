import React from 'react';

class Field extends React.Component {
  render() {
    return (
      <div className="card-body">
        <label className="form-label">Name</label>
        <input className="form-control" />
      </div>
    );
  }
}

export default Field;
