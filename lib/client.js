import sanityClient from "@sanity/slient";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "qi2frmkn",
  dataset: "production",
  apiVersion: "2022-10-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
