<script>
	export let className = '';

	const baseClasses = 'my-2 text-sm md:text-3xl font-bold uppercase text-red-900';

	let classes = `${baseClasses} ${className}`;
</script>

<h2 class={classes}>
	<slot />
</h2>
