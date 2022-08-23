<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSolidBars from 'svelte-icons-pack/fa/FaSolidBars';
</script>

<div class=" p-5 bg-blue-600 text-blue-200 w-full hidden md:flex md:justify-between">
	<div class="text-center w-full md:text-xl">Mobile Menu</div>
	<div>
		<Icon
			src={FaSolidBars}
			size="2rem"
			color="var(--menu-text-blue-200)"
			title="mobile_menu_bar_toggler"
		/>
	</div>
</div>
