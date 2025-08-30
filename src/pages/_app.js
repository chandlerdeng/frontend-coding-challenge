import "../styles/globals.css";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Button from "../components/Button";
import Grid from "../components/Grid";
import Page from "../components/Page";
import ImageTextSection from "../components/ImageTextSection";

const components = {
  button: Button,
  grid: Grid,
  "image-text-section": ImageTextSection,
  "default-page": Page,
};

storyblokInit({
  accessToken: "7AYvqGn4sJQV8tWRrG4g7Att",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
