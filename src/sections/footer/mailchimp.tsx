import { useState } from "react";
// gasroap666@gmail.com

import { MailchimpSubscribe } from "../../utils/mailchimpSubscribeFn";

export default function MailChimpIntegration(): JSX.Element {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState<{
    status: string;
    message: string;
  } | null>(null);

  async function subsribeUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = await MailchimpSubscribe(email);
    setResponse(result);
    setSubmitted(true);
  }

  return (
    <>
      <form
        className="flex flex-col gap-x-4 gap-y-4 md:flex-row"
        onSubmit={subsribeUser}
      >
        <input
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
      {submitted && <p className="text-isabelline">{response?.message}</p>}
    </>
  );
}
