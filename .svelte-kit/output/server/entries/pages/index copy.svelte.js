import { c as create_ssr_component, v as validate_component } from "../../chunks/index-6b489d84.js";
import { S as SearchMovies, P as PopularMovies } from "../../chunks/SearchMovies-9f65d867.js";
async function load({ fetch }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9d921390a35cc7b5e06bf01989a3161e&language=en-US&page=1`);
  const data = await res.json();
  console.log(data);
  if (res.ok) {
    return { props: { popular: data.results } };
  }
}
const Indexu20copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  return `<section>${validate_component(SearchMovies, "SearchMovies").$$render($$result, {}, {}, {})}
    ${validate_component(PopularMovies, "PopularMovies").$$render($$result, { popular }, {}, {})}</section>`;
});
export { Indexu20copy as default, load };
