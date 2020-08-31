import React from 'react';
import format from 'date-fns/format';

export default function PostPreview({ entry, widgetFor }) {
  const dateForSlug = format(entry.getIn(['data', 'date']), 'YYYY-MM-DD');
  const dateForDisplay = format(entry.getIn(['data', 'date']), 'ddd, MMM D, YYYY');
  const slug = `https://${window.parent.location.host}/post/${dateForSlug}`;

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

        <div className="flex justify-between grey-3">
          <p>{dateForDisplay}</p>
        </div>

        <div className="cms mw6">
          <p>{entry.getIn(['data', 'description'])}</p>

          <img src={entry.getIn(['data', 'image'])} alt=""/>

          {widgetFor('body')}
        </div>
      </div>
    </>
  );
}
