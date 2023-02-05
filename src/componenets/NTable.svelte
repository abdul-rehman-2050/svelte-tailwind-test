<script>
	/**
	 * @type {any}
	 */
	export let items;
	/**
	 * @type {any}
	 */
	export let schema;
</script>

<table class="table-auto">
	<thead>
		<tr>
			{#each schema as column}
				<th class={column.class || 'p-2'}>{column.label}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each items as item}
			<tr>
				{#each schema as column}
					<td class={column.class || 'p-2'}>
						{#if column.component}
							<svelte:component this={column.component} src={item[column.key]} alt={'Avatar'} />
						{:else}
							{item[column.key]}
						{/if}
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
