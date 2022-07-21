<script lang="ts">
	import layerOptions from '$data/layerOptions.json';

	// export let assets: any = {};
	export let currentCharacter;

	let open = true;
	let showCopied = false;

	function copy() {
		navigator.clipboard.writeText(JSON.stringify(currentCharacter, undefined, 2));

		showCopied = true;
		setTimeout(() => {
			showCopied = false;
		}, 1000);
	}
</script>

<div class:close={!open} id="drawer">
	<button
		class="hidden"
		on:click|stopPropagation={() => {
			open = !open;
		}}
	>
		<svg height="40" width="40">
			<circle cx="20px" cy="20px" r="20px" />
		</svg>
	</button>
	<h2>Current Character</h2>
	<!-- <p>✅ <i>Click on asset to add or remove from list.</i></p> -->
	<p>👁 <i>Click on the half-circle to collapse it to the side.</i></p>
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

	button.hidden {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
</style>
