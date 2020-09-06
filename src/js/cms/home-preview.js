import React from 'react';
import format from 'date-fns/format';

const formatDate = (dataStr) =>
  new Date(dataStr).toLocaleDateString('ja', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

// A CMS template for the home layout.
export default function HomePreview({ entry, getAsset, widgetFor }) {
  const image = getAsset(entry.getIn(['data', 'image']));
  const gmText = `代表 ${entry.getIn(['data', 'blurb', 'gm_name'])}`;

  return (
    <>
      <div
        className="pv5 pv6-l ph3 bg-center cover"
        style={{
          backgroundImage: image && `url(${image})`,
        }}
      />

      <marquee className="navy h2 f3 mt2">{entry.getIn(['data', 'banner'])}</marquee>

      <div className="bg-grey-1 pv4">
        <div className="ph3 center mw7">
          <h2 className="f2">{entry.getIn(['data', 'blurb', 'heading'])}</h2>
          <p className="mw-100">{entry.getIn(['data', 'blurb', 'text'])}</p>
          <figure>
            <img src={entry.getIn(['data', 'blurb', 'gm_image'])} alt={gmText} />
            <div className="pt1">
              <p className="gray">{gmText}</p>
            </div>
          </figure>
        </div>
      </div>

      <div className="ph3 center mw7">
        <div className="overflow-auto mv2">
          <table>
            <thead>
              <tr>
                <th className="fw6 pa2 bb b--black-20 tl">チーム</th>
                <th className="fw6 pa2 bb b--black-20 tl">日　付</th>
                <th className="fw6 pa2 bb b--black-20 tl">時　間</th>
                <th className="fw6 pa2 bb b--black-20 tl">内　容</th>
                <th className="fw6 pa2 bb b--black-20 tl">場　所</th>
              </tr>
            </thead>
            <tbody>
              {(entry.getIn(['data', 'schedule']) || []).map((scheduleEntry, i) => (
                <tr key={i}>
                  <td className="f6 pa2 bb b--black-20">{scheduleEntry.get('team')}</td>
                  <td className="f6 pa2 bb b--black-20">{formatDate(scheduleEntry.get('date'))}</td>
                  <td className="f6 pa2 bb b--black-20">{scheduleEntry.get('time')}</td>
                  <td className="f6 pa2 bb b--black-20">{scheduleEntry.get('description')}</td>
                  <td className="f6 pa2 bb b--black-20">{scheduleEntry.get('location_text')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-highlight pv4">
        <div className="ph3 mw7 center">
          <div className="flex-l mhn2-l">
            <div className="w-40-l ph2-l">
              <h2 className="f2 b lh-title mb2">{entry.getIn(['data', 'info', 'heading'])}</h2>
              <p>{entry.getIn(['data', 'info', 'text'])}</p>
            </div>
            <div className="w-60-l ph2-l">
              <img
                src={entry.getIn(['data', 'info', 'image'])}
                alt={entry.getIn(['data', 'info', 'heading'])}
                className="mb3"
              />
            </div>
          </div>
          <a href={entry.getIn(['data', 'info', 'link_url'])} class="btn raise">
            {entry.getIn(['data', 'info', 'link_text'])}
          </a>
        </div>
      </div>

      <div className="bg-grey-1 pv4">
        <div className="ph3 mw7 center cms">{widgetFor('body')}</div>
      </div>
    </>
  );
}
