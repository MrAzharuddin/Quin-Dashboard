<script>
  import router from "page";
  import routesData from "../routesData";
  import Navbar from "./components/Navbar.svelte";
  import Home from './components/pages/Home.svelte'
  import Table from './components/pages/Table.svelte'
  let page;
  let params;

  routesData.forEach(route => {
    router(
      route.path,
      (ctx, next) => {
        console.log(ctx);
        params = ctx.params;
        next();
      },
      () => {
        page = route.component;
      }
    );
  });

  router.start();
</script>


<main class="flex text-white items-start bg-[#272727]">
  <Navbar/>
  <!-- <svelte:component this={page} params={params} /> -->
  <div>
    <Home/>
    <Table/>
  </div>
</main>