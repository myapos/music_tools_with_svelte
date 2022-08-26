<script>
	export let className = '';

	const baseClasses = 'text-lg md:text-3xl font-bold uppercase text-red-900';

	let classes = `${baseClasses} ${className}`;
</script>

<h2 class={classes}>
	<slot />
</h2>
