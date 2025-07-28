import React, { useEffect, useState } from "react";

type Verse = {
  bookname: string;
  chapter: string;
  verse: string;
  text: string;
};

const verseUrl = "https://labs.bible.org/api/?passage=random&type=json";

export const RandomVerse: React.FC = () => {
  const [verse, setVerse] = useState<Verse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVerse = async () => {
      setLoading(true);
      try {
        const response = await fetch(verseUrl);
        const data = await response.json();
        setVerse(data[0]);
      } catch {
        setVerse(null);
      } finally {
        setLoading(false);
      }
    };
    fetchVerse();
  }, []);

  return (
    <div id="verse-div" className="my-4 mx-auto max-w-2xl p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
      {loading && <p  className="italic">Loading verse...</p>}
      {!loading && verse && (
        <>
          <p id="verse-text" className="italic">{verse.text}</p>
          <p id="verse-info" className="italic mt-2">
            {verse.bookname} {verse.chapter}:{verse.verse}
          </p>
        </>
      )}
      {!loading && !verse && <p>Could not load verse.</p>}
    </div>
  );
};