<script>
	import Link from './Link.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaCopyright from 'svelte-icons-pack/fa/FaCopyright';
</script>

<footer class="flex justify-center p-5 fixed bottom-0 bg-blue-600 text-blue-200 w-full">
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
	<Link url="mailto:myapos@gmail.com" description="Myron Apostolakis" target="_blank" />
</footer>
