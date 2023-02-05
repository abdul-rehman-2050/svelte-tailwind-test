<script>
	import Avatar from '../../componenets/Avatar.svelte';
import NTable from '../../componenets/NTable.svelte';
    import "../../tw_index.css"
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
		{
			label: 'Created At',
			key: 'createdAt',
			class:
				'px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'
		},
		{
			label: 'Name',
			key: 'name',
			class:
				'px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'
		},
		{
			label: 'Avatar',
			key: 'avatar',
			class: 'px-6 py-3 border-b border-gray-200 bg-gray-50 text-center text-left text-xs leading-4 font-medium text-gray-500',
            component: Avatar,
		},
		{
			label: 'Email',
			key: 'email',
			class:
				'px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500'
		},
		{
			label: 'Phone',
			key: 'phone',
			class:
				'px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500'
		}
	]}
/>
