<script lang="ts">
	import GModal from './GModal.svelte';
	import AddUpdateCustomerForm from './AddUpdateCustomerForm.svelte';
	import { customerStore, type CustomerData } from '../stores/cutomerStore';
	import { onMount, onDestroy } from 'svelte';

	let customers: CustomerData[] = [];
	let unsubscribe: (() => void) | null = null;
	let selectedUserId = null;

	onMount(async () => {
		unsubscribe = customerStore.customers.subscribe((value) => {
			customers = value;
		});
	});

	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
		}
	});

	let showModal = false;

	let selectedCustomer: CustomerData | null;
	function handleEdit(customerId: string) {
		selectedUserId = customerId;
		selectedCustomer = customerStore.filterById(customerId);
		showModal = true;
	}

	function handleDelete(customerId: string): any {
		customerStore.removeCustomerById(customerId);
	}

	function handleAdd() {
		selectedCustomer = null;
		showModal = true;
	}
	const handleClose = () => {
		showModal = false;
	};
</script>

<div>
	<GModal show={showModal} on:close={handleClose}>
		<AddUpdateCustomerForm on:close={handleClose} customer={selectedCustomer} />
	</GModal>
	<div class="flex">
		<div class="flex-col mx-auto">
			<div class="text-right">
				<button class="btn btn-blue" on:click={handleAdd}>Add New Customer</button>
			</div>
			<div>
				<table class="table-auto shadow-lg bg-slate-500 bg-opacity-5 mx-auto mt-3">
					<thead>
						<tr>
							<th class="px-4 py-2">#</th>
							<th class="px-4 py-2">Name</th>
							<th class="px-4 py-2">Email</th>
							<th class="px-4 py-2">Phone</th>
							<th class="px-4 py-2">Address</th>
							<th class="px-4 py-2">Actions</th>
						</tr>
					</thead>
					<tbody>
						{#each customers as customer, i (i)}
							<tr>
								<td class="px-4 py-2">{i + 1}</td>
								<td class="px-4 py-2">{customer.name}</td>
								<td class="px-4 py-2">{customer.email}</td>
								<td class="px-4 py-2">{customer.phone}</td>
								<td class="px-4 py-2">{customer.address}</td>
								<td class="px-4 py-2">
									<div class="flex">
										<button
											class=" hover:bg-gray-600 hover:shadow-sm hover:rounded-md p-1 "
											on:click={() => handleEdit(customer.id)}
										>
											<svg
												class="w-5 h-5"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M3 17.25V21H6.75L17.81 9.93L14.06 6.18L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6 20.71 5.63L18.37 3.29C18 3 18 2.35 18 2C18 1.65 18.37 1.29 18.71 1.04L20.71 3.04C21.1 2.65 21.1 2 20.71 1.63L18.04 3.29L20.71 5.96V7.04Z"
													fill="#666"
												/>
											</svg>
										</button>
										<button
											class=" hover:bg-gray-600 hover:shadow-sm hover:rounded-md p-1"
											on:click={() => handleDelete(customer.id)}
										>
											<svg
												class="w-5 h-5"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
													fill="#B22222"
												/>
											</svg>
										</button>
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<style>
	.btn {
		@apply font-bold py-2 px-4 rounded;
	}
	.btn-blue {
		@apply bg-blue-500 text-white;
	}
	.btn-blue:hover {
		@apply bg-blue-700;
	}
</style>
