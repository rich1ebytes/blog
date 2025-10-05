import ContactForm from "../components/ContactForm";

function Blog(){
     return(
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
        <hr className="my-2 border-t border-gray-300" />

        
          <ContactForm/>
         </div>
    </>
  );
}


export default Blog;