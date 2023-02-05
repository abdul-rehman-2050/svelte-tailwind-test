<script lang='ts'>

/*
export let data:any;
    export let itemsPerPage = 10;
  
    let currentPage = 1;
    
    let totalPages:number;
    //let paginatedData;
    let paginatedData: { [key: string]: any }[] = data.slice(startIndex, endIndex);

  
    $: totalPages = Math.ceil(data.length / itemsPerPage);
    $: paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
    function handlePageChange(newPage:number) {
      currentPage = newPage;
    }

    */
  </script>
  
  <!-- <table>
    <tbody>
      {#each paginatedData as item}
        <tr>
          {#each item as cell}
            <td>{cell}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
  
  <div class="pagination">
    <button class="btn" disabled={currentPage === 1} on:click={() => handlePageChange(currentPage - 1)}>
      Previous
    </button>
  
    <span>{currentPage} of {totalPages}</span>
  
    <button class="btn" disabled={currentPage === totalPages} on:click={() => handlePageChange(currentPage + 1)}>
      Next
    </button>
  </div>
   -->