import ContactForm from "../components/ContactForm";
import Border from "../components/Border";
import HomeLink from "../components/HomeLink.jsx";

function Blog() {
  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-8 font-alan">
        <h1
          className="mt-10 text-5xl font-bold 
          sm:text-5xl md:text-5xl lg:text-6xl"
        >
          blog.
        </h1>
        <p className="para">
          yeah, i figured out i need to write them.<br></br>
          will be updating soon.
        </p>
        <Border />

        <ContactForm />
      </div>
      <HomeLink/>
        <Border />

    </>
  );
}

export default Blog;
