<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	import { customerStore, type CustomerData } from '../stores/cutomerStore';

	export let customer: CustomerData | null;

	const dispatch = createEventDispatcher();
	let customer2: CustomerData = {
		id: '',
		name: '',
		phone: '',
		email: '',
		address: ''
	};

	onMount(async () => {
		if (customer) {
			customer2 = customer;
		}
	});

	
	function generateUUID(): string {
		let dt = new Date().getTime();
		const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			const r = (dt + Math.random() * 16) % 16 | 0;
			dt = Math.floor(dt / 16);
			return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
		});
		return uuid;
	}

	const handleSubmit = () => {
		if (customer) {
			customerStore.updateCustomerById(customer.id, {
				id: customer.id,
				name: customer2.name,
				email: customer2.email,
				phone: customer2.phone,
				address: customer2.address
			});
		} else {
			customerStore.addCustomer({
				id: generateUUID(),
				name: customer2.name,
				email: customer2.email,
				phone: customer2.phone,
				address: customer2.address
			});
			customer2.name = '';
			customer2.email = '';
			customer2.phone = '';
			customer2.address = '';
		}
		dispatch('close');
	};
</script>

<form on:submit|preventDefault={handleSubmit} class="bg-gray-600 p-6 rounded-lg shadow-md">
	<div class="mb-4">
		<input
			type="text"
			class="bg-gray-700 border p-2 w-full"
			bind:value={customer2.name}
			placeholder="Name"
		/>
	</div>
	<div class="mb-4">
		<input
			type="email"
			class=" bg-gray-700 border p-2 w-full"
			bind:value={customer2.email}
			placeholder="Email"
		/>
	</div>
	<div class="mb-4">
		<input
			type="text"
			class="bg-gray-700 border p-2 w-full"
			bind:value={customer2.phone}
			placeholder="Phone"
		/>
	</div>
	<div class="mb-4">
		<textarea
			class="bg-gray-700 border p-2 w-full"
			bind:value={customer2.address}
			placeholder="Address"
			rows="5"
			cols="25"
		/>
	</div>
	<button class="bg-blue-500 text-white p-2 rounded-full" type="submit"
		>{customer?.id ? 'Update ' : 'Add '}Customer</button
	>
</form>

<style>
</style>
