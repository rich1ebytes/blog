import { ytChannels } from "../data/ytChannels.js";
export default function FavChannels() {
  return (
    <>
      <div>
          <h1 className="subheading">where all my free time goes</h1>
        <ul className="para">
          {ytChannels.map((channel, index) => (
            <li>
              <a href="{channel.url}" key={channel}>
                {channel.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
