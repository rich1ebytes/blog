function SpotifyCard() {
  return (
    <div>
      <h1 className="subheading mb-2">what sounds like heaven</h1>
      <iframe 
        data-testid="embed-iframe"
        style={{borderRadius:"12px"}}
        src="https://open.spotify.com/embed/track/52ojopYMUzeNcudsoz7O9D?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default SpotifyCard;
