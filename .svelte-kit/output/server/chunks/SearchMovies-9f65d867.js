import { c as create_ssr_component, a as add_attribute, e as escape, b as each, v as validate_component, n as null_to_empty } from "./index-6b489d84.js";
var MovieCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "img.svelte-weku6m{width:100%;height:65vh;object-fit:cover;border-radius:1rem;margin-bottom:1rem}h2.svelte-weku6m{font-size:0.9rem}.description.svelte-weku6m{height:5vh}p.svelte-weku6m{font-size:0.7rem}.movie-card.svelte-weku6m{display:flex;flex-direction:column;justify-content:space-around;padding:1rem}",
  map: null
};
const MovieCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css$2);
  return `<div class="${"movie-card svelte-weku6m"}"><a sveltekit:prefetch sveltekit:noscroll${add_attribute("href", "/movie/" + movie.id, 0)}><img${add_attribute("src", "https://image.tmdb.org/t/p/w500" + movie.poster_path, 0)}${add_attribute("alt", movie.title, 0)} class="${"svelte-weku6m"}"></a>
    <div class="${"description svelte-weku6m"}"><h2 class="${"svelte-weku6m"}">${escape(movie.title)}</h2>
        <p class="${"svelte-weku6m"}">${escape(movie.release_date)}</p></div>
</div>`;
});
var PopularMovies_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h3.svelte-irf69y{padding:0 1rem}.popular-movies.svelte-irf69y{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem}",
  map: null
};
const PopularMovies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  $$result.css.add(css$1);
  return `<h3 class="${"svelte-irf69y"}">Popular Movies</h3>

<div class="${"popular-movies svelte-irf69y"}">${each(popular, (movie) => {
    return `${validate_component(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
var SearchMovies_svelte_svelte_type_style_lang = "";
const css = {
  code: ".search.svelte-187eyah{position:relative;width:30%;margin:1rem}button.svelte-187eyah{font-size:0.7rem;padding:0rem 1rem;background:rgb(96, 110, 201);color:white;font-weight:bold;border:none;position:absolute;bottom:50%;right:0;transform:translate(0, 50%);height:100%;border-top-right-radius:10px;border-bottom-right-radius:10px;cursor:pointer}input.svelte-187eyah{width:100%;border:none;font-size:1rem;font-family:'Poppins', sans-serif;outline:none;color:rgb(255, 255, 255);padding:0.5rem 0.1rem;transition:background 0.75s ease-out;font-weight:bold;background:rgb(63,63,63);border-radius:10px;padding:1rem}label.svelte-187eyah{position:absolute;font-size:0.8rem;top:50%;left:0;transform:translate(0, -50%);pointer-events:none;color:#fff;padding:0rem 1rem}input.selected.svelte-187eyah{background:rgb(50, 50, 50)}",
  map: null
};
const SearchMovies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputValue = "";
  $$result.css.add(css);
  return `<form class="${"search svelte-187eyah"}">${`<label for="${"search_movie"}" class="${"svelte-187eyah"}">Search movie</label>`}

    <input name="${"search_movie"}" type="${"text"}" class="${escape(null_to_empty("")) + " svelte-187eyah"}"${add_attribute("value", inputValue, 0)}>

    ${``}

</form>`;
});
export { PopularMovies as P, SearchMovies as S };
