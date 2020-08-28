import React from 'react';

export default class ActivitiesPreview extends React.Component {
  render() {
    const { entry, getAsset, widgetFor } = this.props;

    return (
      <div className="ph3 bg-off-white">
        <img src={getAsset(entry.getIn(['data', 'logo']))} alt="" className="db w4 center pv4" />
        <div className="center mw6 pv3">{widgetFor('body')}</div>
      </div>
    );
  }
}
