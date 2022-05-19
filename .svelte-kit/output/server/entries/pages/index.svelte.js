import { c as create_ssr_component, v as validate_component } from "../../chunks/index-6b489d84.js";
import { S as SearchMovies, P as PopularMovies } from "../../chunks/SearchMovies-9f65d867.js";
async function load({ fetch }) {
  const res = await fetch(``);
  const data = await res.json();
  console.log(data);
  if (res.ok) {
    return { props: { popular: data.results } };
  }
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  return `<section>${validate_component(SearchMovies, "SearchMovies").$$render($$result, {}, {}, {})}
    ${validate_component(PopularMovies, "PopularMovies").$$render($$result, { popular }, {}, {})}</section>`;
});
export { Routes as default, load };
