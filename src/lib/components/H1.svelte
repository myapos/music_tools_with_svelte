<script>
	export let className = '';

	const baseClasses = 'text-2xl md:text-3xl font-bold uppercase text-red-900';

	let classes = `${baseClasses} ${className}`;
</script>

<h1 class={classes}>
	<slot />
</h1>
