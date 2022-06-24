<script lang="ts">
	import layerOptions from '$data/layerOptions.json';

	// export let assets: any = {};
	export let currentCharacter;

	console.log(currentCharacter);

	let open = true;
	let showCopied = false;

	console.log('collapse');

	function copy() {
		navigator.clipboard.writeText(JSON.stringify(currentCharacter, undefined, 2));

		showCopied = true;
		setTimeout(() => {
			showCopied = false;
		}, 1000);
	}
</script>

<div class:close={!open} id="drawer">
	<!-- <svg
		on:click={() => {
			open = !open;
		}}
	>
		<circle cx="20px" cy="20px" r="20px" />
	</svg> -->
	<h2>Current Character</h2>
	<!-- <p>✅ <i>Click on asset to add or remove from list.</i></p> -->
	<p>👁 <i>Click on this modal to collapse it to the side.</i></p>
	{#each Object.keys(layerOptions) as layer}
		<div>
			<h4>{layer}</h4>
			<select name={layer} id={layer} bind:value={currentCharacter[layer]}>
				{#each layerOptions[layer] as asset}
					<option value={asset}>{asset.replaceAll('_', ' ')}</option>
				{/each}
			</select>
		</div>
	{/each}
	<pre>
        {JSON.stringify(currentCharacter, undefined, 2)}
	</pre>

	<button on:click|stopPropagation={copy}>Copy</button>
	{#if showCopied}
		<p>Copied to clipboard</p>
	{/if}
</div>

<style>
	h2,
	h4,
	p {
		font-family: monospace;
	}

	h4 {
		margin: 0;
		margin-top: 3px;
	}

	#drawer {
		padding: 20px;
		background-color: antiquewhite;
		position: fixed;
		top: 0px;
		height: 100vh;
		right: 0;
		width: 250px;
	}

	svg {
		position: absolute;
		left: -20px;
		fill: antiquewhite;
	}

	button {
		float: right;
	}

	select {
		width: 100%;
	}

	.close {
		/* Move off the screen */
		transform: translateX(100%);
	}

	.close svg {
		fill: gold;
	}
</style>
