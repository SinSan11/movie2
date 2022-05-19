<script context="module">
    export async function load({fetch}){
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=69d9d05794b643b24d94cae8a255cd07&language=en-US&page=1`
            // din api key inn her Sindre
        );
        const data = await res.json();
        console.log(data);
        if(res.ok){
            return{
                props: {popular: data.results}
            };
        }
    }
</script>

<script>

    
    import.meta.env.VITE_API

    import PopularMovies from '../components/PopularMovies.svelte';
    import SearchMovies from '../components/SearchMovies.svelte';
    export let popular;
    import {fly} from 'svelte/transition';
</script>

<section in:fly={{ y: 50, duration: 500, delay: 500}} out:fly={{ duration: 500 }}>
    <SearchMovies />
    <PopularMovies {popular}/>
</section>