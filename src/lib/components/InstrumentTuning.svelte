<script lang="ts">
	export let descriptionClassName: string;
	export let toneClassName: string;
	export let instrument: string;
	export let tone: string;
</script>

<div class={descriptionClassName}>{instrument} </div>
<div class={toneClassName}>
	{tone}
</div>
