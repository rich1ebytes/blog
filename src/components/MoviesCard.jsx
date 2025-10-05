export default function MoviesCard() {
  return (
    <div className="movies">
      {/*my movies*/}
      <h2 className="subheading">what movies i like</h2>
      <ul className="para flex flex-col gap-2">
        <li>
          <a
            href="https://en.wikipedia.org/wiki/The_Batman_(film)"
            target="_blank"
            rel="noopener noreferrer"
          >
            the batman
          </a>{" "}
          matt reeves <span className="light"> (176m)</span>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/The_Hangover"
            target="_blank"
            rel="noopener noreferrer"
          >
            the hangover
          </a>{" "}
          todd phillips <span className="light">(100m)</span>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Yeh_Jawaani_Hai_Deewani"
            target="_blank"
            rel="noopener noreferrer"
          >
            yeh jawaani hai deewani
          </a>{" "}
          ayan mukerji <span className="light">(160m)</span>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Tenet_(film)"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            tenet
          </a>{" "}
          christopher nolan <span className="light">(150m)</span>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Metro..._In_Dino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            metro in dino
          </a>{" "}
          anurag basu <span className="light">(160m)</span>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Inglourious_Basterds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            inglourious basterds
          </a>{" "}
          quentin tarantino <span className="light">(153m)</span>
        </li>
      </ul>
    </div>
  );
}
