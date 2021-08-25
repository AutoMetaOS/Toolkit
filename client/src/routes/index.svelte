<script>
	import Card from "$lib/Card.svelte";
	import routes from "$lib/routes.json";
</script>

<div class="w-80 m-20 p-20 ƒ ƒ∑">
	<div class="w-100 †c">Search Coming soon...</div>

	{#each routes as route}
		<Card content={route} />
	{/each}
</div>
