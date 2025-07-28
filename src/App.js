import React, { useState, useEffect } from 'react';
import './styles/App.css';
import data from './data/magazineData.json';

function CoverStory({ story }) {
  return (
    <section className="cover-story">
      <h1>{story.title}</h1>
      <h2>{story.subtitle}</h2>
      {story.photo && (
        <img
          src={process.env.PUBLIC_URL + '/images/' + story.photo}
          alt={story.title}
          className="cover-photo"
        />
      )}
      <ul>
        {story.body.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function HallOfFame({ hall }) {
  return (
    <section className="hall-of-fame">
      <h2>Hall of Fame</h2>
      <div className="hof-list">
        {hall.map((person, i) => (
          <div key={i} className="hof-person">
            <img
              src={process.env.PUBLIC_URL + '/images/' + person.photo}
              alt={person.name}
              className="hof-photo"
            />
            <h3>{person.name}</h3>
            <span className="badge">{person.badge}</span>
            <p>{person.tip}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Toolbox({ toolbox }) {
  return (
    <section className="toolbox">
      <h2>DSA Toolbox</h2>
      {toolbox.map((tool, i) => (
        <div key={i} className="toolbox-item">
          <h3>{tool.title}</h3>
          <blockquote>{tool.script}</blockquote>
        </div>
      ))}
    </section>
  );
}

function PayoutBoard({ board }) {
  return (
    <section className="payout-board">
      <h2>Payout Board</h2>
      <table>
        <thead>
          <tr>
            <th>DSA</th>
            <th>Amount</th>
            <th>Payout Time</th>
          </tr>
        </thead>
        <tbody>
          {board.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>₹{p.amount.toLocaleString()}</td>
              <td>{p.payoutTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function Events({ events }) {
  return (
    <section className="events">
      <h2>Events & Summits</h2>
      {events.map((e, i) => (
        <div key={i} className="event-item">
          <h3>{e.name}</h3>
          <span className="event-date">{e.date}</span>
          <p>{e.summary}</p>
        </div>
      ))}
    </section>
  );
}

function LeaderBoard({ board }) {
  return (
    <section className="leaderboard">
      <h2>Leaderboard</h2>
      <ol>
        {board.map((entry, i) => (
          <li key={i}>
            <b>{entry.name}</b>: ₹{entry.amount.toLocaleString()}
          </li>
        ))}
      </ol>
    </section>
  );
}

function App() {
  const [magazine, setMagazine] = useState(null);

  useEffect(() => {
    // For simplicity, loading from local JSON import
    setMagazine(data);
  }, []);

  if (!magazine) return <div>Loading...</div>;

  return (
    <div className="magazine-container">
      <header>
        <h1>HLC HEROES Magazine</h1>
        <p>“One File Can Change Your Life.”</p>
      </header>
      <CoverStory story={magazine.coverStory} />
      <LeaderBoard board={magazine.leaderboard} />
      <HallOfFame hall={magazine.hallOfFame} />
      <Toolbox toolbox={magazine.toolbox} />
      <PayoutBoard board={magazine.payoutBoard} />
      <Events events={magazine.events} />
    </div>
  );
}

export default App;
