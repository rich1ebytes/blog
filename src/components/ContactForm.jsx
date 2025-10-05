import { useState } from "react";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const submit = async (emailentry) => {
    emailentry.preventDefault();
    const res = await fetch("https://formspree.io/f/xqaylbbn", {
      method: "POST",
      headers: { "Content-Type": " application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("Aight! will message you once i upload anything!");
      setEmail("");
    } else {
      setStatus("Oops! Something's messedup ;/");
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-medium">
          signup to know that ive done it.
        </h1>
        <div className="flex flex-box gap-4">
          <input
            className="w-1/2 border border-width-10px border-black outline-none p-4"
            type="email"
            value={email}
            required
            onChange={(emailentry) => {
              setEmail(emailentry.target.value);
            }}
            placeholder="drop thyy mail please..."
          ></input>
          <button
            className="w-1/6 border border-2px border-black p-2 cursor-pointer hover:text-white hover:bg-black"
            type="submit"
          >
            click
          </button>
        </div>
        <p className="para">{status}</p>
      </div>
    </form>
  );
}

export default ContactForm;
