<script>
	import NTable from '../../componenets/NTable.svelte';
</script>

<h1>Simple Hello Route</h1>

<NTable
	items={[
		{
			createdAt: '2023-02-05T03:42:38.940Z',
			name: 'Amber Jaskolski',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/255.jpg',
			email: 'Ethel.Stiedemann@yahoo.com',
			phone: '1-759-582-6069',
			address: 'Suite 669',
			id: '1'
		},
		{
			createdAt: '2023-02-04T19:30:32.708Z',
			name: 'Lawrence Barrows',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1073.jpg',
			email: 'Blaise9@hotmail.com',
			phone: '333-615-0721',
			address: 'Suite 039',
			id: '2'
		}
	]}
	schema={[
        { label: 'ID', key: 'id' },
		{ label: 'Created At', key: 'createdAt' },
		{ label: 'Name', key: 'name' },
		{ label: 'Avatar', key: 'avatar' },
		{ label: 'Email', key: 'email' },
		{ label: 'Phone', key: 'phone' },
		{ label: 'Address', key: 'address' }
	]}
/>
