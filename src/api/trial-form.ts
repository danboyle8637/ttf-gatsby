import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import Airtable from "airtable";
const postmark = require("postmark");

interface ReqBody {
  firstName: string;
  emailAddress: string;
}

export default async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  if (req.method !== "POST") {
    return res.status(400).json({
      message: "Bad request. Not authorized.",
    });
  }

  const body: ReqBody = req.body;
  const firstName = body.firstName;
  const emailAddress = body.emailAddress;

  const airtableBaseId = process.env.AIRTABLE_BASE_ID;
  const airtableKey = process.env.AIRTABLE_KEY;
  const postmarkKey = process.env.POSTMARK_KEY;

  const airtableBase = new Airtable({
    apiKey: airtableKey ?? "",
  }).base(airtableBaseId ?? "");

  const postmarkClient = new postmark.ServerClient(postmarkKey ?? "");

  airtableBase("TTF In-Studio 14 Day Leads").create(
    {
      "Lead Date": new Date().toLocaleDateString(),
      "Trial Status": "Waiting",
      "First Name": firstName,
      "Email Address": emailAddress,
    },
    (error: string) => {
      if (error) {
        return res.status(500).json({
          message:
            "Error saving your information so I can contact you. Refresh the page and try again.",
        });
      }
    }
  );

  try {
    await postmarkClient.sendEmailWithTemplate({
      From: "kindal@thistimefitness.com",
      To: "kindal@thistimefitness.com",
      TemplateId: 25024647,
      TemplateModel: {
        first_name: firstName,
      },
    });

    return res.status(200).json({
      message: "Lead saved.",
    });
  } catch (error) {
    return res.status(500).json({
      message:
        "Something happened and we could not save your data. Please try again",
    });
  }
};
