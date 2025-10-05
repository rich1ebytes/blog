import { ytChannels } from "../data/ytChannels.js";
export default function FavChannels() {
  return (
    <>
      <div>
         <ul className="para">
  {ytChannels.map((channel, index) => (
    <li key={index}>
      <a href={channel.url} target="_blank" rel="noopener noreferrer">
        {channel.name}
      </a>
    </li>
  ))}
</ul>
      </div>
    </>
  );
}
