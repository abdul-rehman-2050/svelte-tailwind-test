

<!-- Modal.svelte -->
<script>
  import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();
  export let show = true;
  const close = () => {
    show = false;
    dispatch('close');
  };
</script>

{#if show}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="flex fixed top-0 left-0 w-full h-screen  items-center bg-black bg-opacity-80 z-50" on:click={close} >

    <div class="mx-auto my-3 w-full max-w-xl  rounded-lg shadow-xl p-5" on:click|stopPropagation>
      
      <slot/>
      
    </div>
  </div>
{/if}
