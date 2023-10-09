import { useState } from "react";

export default function MailChimpIntegration(): JSX.Element {
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
    <>
      <form
        className="flex flex-col gap-x-4 gap-y-4 md:flex-row"
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
          className={`p-3 rounded-sm  bg-floral-white text-dark
          placeholder-dark placeholder-opacity-75 outline-none w-[100%] lg:w-[40%] border-dark border-[0.75px] 
      `}
        />
        <p className={`font-paragraphs text-[12px] md:hidden`}>
          By subscribing you agree to with our Privacy Policy and provide
          consent to receive updates from our company.
        </p>
        <button
          data-cy="mc-submit-btn"
          type="submit"
          className={`h-full w-2/5 md:w-32 bg-transparent capitalize hover:bg-floral-white font-lexend relative  inline-flex items-center justify-center px-6 py-3 overflow-hidden transition duration-300 ease-linear border-[0.75px] border-floral-white rounded-sm group `}
        >
          <span
            className={`absolute inset-0 flex items-center justify-center w-full h-full text-dark duration-200 translate-y-full  group-hover:translate-y-0 ease-linear`}
          >
            Subscribe
          </span>
          <span
            className={`absolute flex items-center justify-center w-full h-full text-floral-white transition-all duration-300 transform ease-linear group-hover:-translate-y-full `}
          >
            Subscribe
          </span>
          <span className="relative invisible w-full h-full"> Subscribe</span>
        </button>
      </form>
      {submitted && (
        <p
          data-cy="mc-response-message"
          className={`w-full lg:w-[70%] rounded-sm text-isabelline bg-floral-white p-8 ${
            response?.status ? "text-[#4D8639]" : "text-[#A90E16]"
          }`}
        >
          {response?.message}
        </p>
      )}
    </>
  );
}
