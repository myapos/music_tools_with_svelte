<script>
	import Link from './Link.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaCopyright from 'svelte-icons-pack/fa/FaCopyright';
</script>

<div class="flex items-center">
	<Icon
		src={FaCopyright}
		size="1rem"
		color="var(--menu-text-blue-200)"
		title="copright"
		className="mr-2"
	/>
	2022
</div>
<Link
	url="mailto:myapos@gmail.com"
	description="Myron Apostolakis"
	target="_blank"
	className="p-5 cursor"
/>
