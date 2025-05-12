import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>Episode {selectedEpisode.id}</h2>
        <p>{selectedEpisode.title}</p>
        <p>{selectedEpisode.description}</p>
      </section>
    );
  }

  function EpisodeRoster() {
    return (
      <section className="roster">
        <h2>Episodes</h2>
        <ul className="roster">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header className="header">
        <h1>Dark Echoes</h1>
      </header>
      <main className="display">
        <EpisodeRoster />
        <EpisodeDetails />
      </main>
    </>
  );
}
