export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Logistics',
    icon: { icon: 'tabler-ship' },
    children: [
      {
        title: 'Dashboard',
        to: 'logistics',
      },
      {
        title: 'Shipments',
        to: 'Logistics-shipments',
      },
    ],
  },
  {
    title: 'Second page',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Login Page',
    to: { name: 'login' },
    icon: { icon: 'tabler-login' },
  },
  {
    title: 'Add user',
    to: { name: 'registre' },
    icon: { icon: 'tabler-login' },
  },
]
