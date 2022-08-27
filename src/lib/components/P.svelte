<script>
	export let className = '';
</script>

<p class=" {className?.length > 0 ? className : ''} mt-2 tracking-wider">
	<slot />
</p>
