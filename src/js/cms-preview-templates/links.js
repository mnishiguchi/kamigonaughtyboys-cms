import React from 'react';

export default class LinksPreview extends React.Component {
  render() {
    const { entry, getAsset, widgetFor } = this.props;

    return (
      <div className="ph3 bg-off-white">
        <div className="center mw6 pv3">{widgetFor('body')}</div>;
      </div>
    );
  }
}
