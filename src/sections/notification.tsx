import { useState } from "react";

export default function MailChimpNotification(): JSX.Element {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState<{
    status: boolean;
    message: string;
  } | null>(null);

  async function subsribeUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = JSON.stringify({
      email_address: email,
      status: "subscribed",
      tag: "SexLivesReport",
    });
    const result = await fetch(import.meta.env.PUBLIC_AZURE_MAILCHIMP_FN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    const responseJson: string = await result.text();
    const responseParsed: {
      status: boolean;
      message: string;
    } = JSON.parse(responseJson);

    setResponse(responseParsed);
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col w-full gap-y-4 items-start">
      <form
        className="flex  justify-center gap-2 w-full"
        onSubmit={subsribeUser}
      >
        <input
          data-cy="mc-email"
          type="email"
          aria-label="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className={`px-3 rounded-sm  bg-floral-white  bg-opacity-70 text-dark
          placeholder-dark placeholder-opacity-75 outline-none w-full 
      `}
        />
        <button
          data-cy="mc-submit-btn"
          type="submit"
          className={`h-full bg-transparent text-sm uppercase hover:bg-[#D97803] hover:border-[#D97803] font-headings relative  inline-flex items-center justify-center px-8 overflow-hidden transition duration-300 ease-linear border-[1px] border-floral-white rounded-sm group `}
        >
          <span
            className={`absolute inset-0 flex items-center justify-center w-full h-full text-floral-white duration-200 translate-y-full  group-hover:translate-y-0 ease-linear`}
          >
            Get Notified
          </span>
          <span
            className={`absolute flex items-center justify-center w-full h-full text-floral-white transition-all duration-300 transform ease-linear group-hover:-translate-y-full `}
          >
            Get Notified
          </span>
          <span className="relative invisible w-full h-full">Get Notified</span>
        </button>
      </form>
      {submitted && (
        <p
          data-cy="mc-response-message"
          className={`w-full text-isabelline text-floral-white`}
        >
          {response?.message}
        </p>
      )}
    </div>
  );
}
