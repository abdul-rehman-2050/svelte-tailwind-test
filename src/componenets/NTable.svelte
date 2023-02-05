<table>
    <thead>
      <tr>
        {#each schema as column}
          <th>{column.label}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each items as item}
        <tr>
          {#each schema as column}
            <td>{item[column.key]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
  
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
  