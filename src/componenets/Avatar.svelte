<!-- Avatar.svelte -->
<div class="flex items-center justify-center h-12 w-12 rounded-full">
    <img class="h-full w-full object-cover" src={src} alt={alt}>
  </div>
  
<script lang="ts">
    export let src:string;
    export let alt:string;
</script>  