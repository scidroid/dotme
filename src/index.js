import App from "./components/App.svelte";
import"./style.css"
import "tailwindcss/tailwind.css"

const app = new App({
  target: document.querySelector("main"),
  props: {
    name: "SciDroid's WebSite",
  },
});

export default app;
