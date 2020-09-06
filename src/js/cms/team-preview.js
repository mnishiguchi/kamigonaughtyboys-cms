import React from 'react';
import format from 'date-fns/format';

export default function TeamPreview({ entry, widgetFor }) {
  const slug = `https://${window.parent.location.host}/team/${entry.getIn(['data', 'slug'])}`;

  return (
    <>
      <input
        className="mv2 w-100"
        type="text"
        disabled="true"
        name="preview-slug"
        value={slug}
      />

      <div className="mw6 center ph3 pv4">
        <h1 className="f2 lh-title b mb3">{entry.getIn(['data', 'title'])}</h1>

        <div className="cms mw6">
          <p>{entry.getIn(['data', 'description'])}</p>

          <img src={entry.getIn(['data', 'image'])} alt=""/>

          {widgetFor('body')}
        </div>
      </div>
    </>
  );
}
