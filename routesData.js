import Home from "./src/components/pages/Home.svelte";
import Profile from "./src/components/pages/Profile.svelte";
import ErrorPage from "./src/components/pages/ErrorPage.svelte";
export default [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "*",
    component: ErrorPage,
  },
];
