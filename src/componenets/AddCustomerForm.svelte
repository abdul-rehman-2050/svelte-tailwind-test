<script>
     import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();
  
  
</script>


<div class="relative">
    <button class="absolute top-0 right-0 p-2 text-gray-700 hover:text-gray-300"  on:click={()=>dispatch('close')}>
      <svg
        class="w-6 h-6"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    <!-- Your content here -->
 
  
<form class="bg-gray-600  p-6 rounded-lg shadow-md">
    <h2 class="text-lg font-medium mb-4">Add Customer</h2>
  
    <div class="mb-4">
      <label class="block font-medium mb-2" for="name">
        Name
      </label>
      <input
        class="bg-gray-200 p-2 rounded-lg w-full"
        id="name"
        type="text"
        placeholder="Enter name"
      />
    </div>
  
   
    <div class="mb-4">
      <label class="block font-medium mb-2" for="phone">
        Phone
      </label>
      <input
        class="bg-gray-200 p-2 rounded-lg w-full"
        id="phone"
        type="text"
        placeholder="Enter phone number"
      />
    </div>
  
    <div class="mb-4">
      <label class="block font-medium mb-2" for="email">
        Email
      </label>
      <input
        class="bg-gray-200 p-2 rounded-lg w-full"
        id="email"
        type="email"
        placeholder="Enter email address"
      />
    </div>

    <div class="mb-4">
        <label class="block font-medium mb-2" for="address">
          Address
        </label>
        <textarea
          class="bg-gray-200 p-2 rounded-lg w-full"
          id="address"
          
          placeholder="Enter address"
        />
      </div>
    
  
    <button class="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
      Submit
    </button>
  </form>
</div>