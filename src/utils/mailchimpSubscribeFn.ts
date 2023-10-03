// MailChimp configuration
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: import.meta.env.PUBLIC_MAILCHIMP_API_KEY,
  server: import.meta.env.PUBLIC_MAILCHIMP_SERVER_PREFIX,
});

export async function MailchimpSubscribe(
  email: string
): Promise<{ status: string; message: string }> {
  console.log(import.meta.env.PUBLIC_MAILCHIMP_SERVER_PREFIX);
  let response = {
    status: "success",
    message: "Successfully subscribed to the newsletter",
  };
  try {
    const result = await mailchimp.lists.addListMember(
      import.meta.env.PUBLIC_MAILCHIMP_LIST_ID as string,
      {
        email_address: email,
        status: "subscribed",
      }
    );
  } catch (e: any) {
    if (e.status !== 200) {
      response = { message: e.response.text.detail, status: "error" };
    }
  }

  return response;
}
