import Border from "../components/Border";

function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-6 font-alan">
        <h1
          className="mt-10 text-5xl font-bold 
          sm:text-5xl md:text-5xl lg:text-6xl"
        >
          hi i'm richard!
        </h1>
        <p className="para">
          someone who loves to explores and build things on the internet.
          <br />
          <br />
          was a marketing guy, now am in coding, making apps, learning new tech,
          and running.
        </p>
        <p className="para">
          you can{" "}
          <a
            href="https://portfoliorichard.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            find me here.
          </a>
        </p>
        <Border />

        <p className="para">
          apart from coding i enjoy researching about startups, economy and
          politics.
        </p>
        <p className="para">
          in the most of 2025 i did start multiple things but never really
          completed anything. be it my business, a tech skill, a book to read, fitness, a new
          good habit or a routine.
        </p>
        <p className="para">
          but now, i think im a changed person, someone who looks forward in
          life, stops complaining and does what it takes.
        </p>
        <p className="para">
          currently im getting my hands dirty with <a href="https://blog.dataengineerthings.org">data</a>, running daily and cooking (biryani). i find
          all these very amusing and i think this time im gonna stick on to
          these.
        </p>
        <Border />
        <p className="para">
          i don't regret trying multiple things out, but thats what made me come
          this far. i'm gonna learn so many more cool stuff (hopefully).{" "}
          <b>👹!</b>
        </p>
        <p className="para">
          this is <a href="mailto:richardgomes4205@gmail.com"> my mail</a>
        </p>
      </div>
    </>
  );
}

export default Home;
