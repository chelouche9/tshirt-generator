/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onCall } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import axios from "axios";
import Stripe from "stripe";

// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

const corsDomains = /wearmy\.design$/;

admin.initializeApp();

export const generateImages = onCall(
  { cors: corsDomains, enforceAppCheck: true },
  async (request) => {
    const { prompt } = request.data;
    const url = "https://api.together.xyz/v1/completions";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.TOGETHER_API_KEY}` as string,
      },
      data: {
        model: "stabilityai/stable-diffusion-xl-base-1.0",
        prompt,
        n: 4,
        steps: 40,
      },
    };
    const response = await axios(url, options);
    return response.data.output.choices;
  }
);

export const order = onCall(
  { cors: corsDomains, enforceAppCheck: true },
  async (request) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
    const { design, size, color, quantity } = request.data;
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: process.env.PRICE_ID as string,
          quantity,
        },
      ],
      payment_intent_data: {
        metadata: {
          design,
          size,
          color,
          shipped: "false",
        },
      },
      mode: "payment",
      success_url: "https://wearmy.design/success",
    });

    return { url: session.url };
  }
);
