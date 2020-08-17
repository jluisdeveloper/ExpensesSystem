import React from 'react';

const Dashboard = React.lazy(() => import('./Components/Dashboard/Dashboard'));
const Users = React.lazy(() => import('./Components/Users/Users'));
const Categories = React.lazy(() => import('./Components/Categories/Categories'));
const Entries = React.lazy(() => import('./Components/Entries/Entries'));


const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true, name: 'Usuarios', component: Users },
  { path: '/categories', exact: true, name: 'Categorias', component: Categories },
  { path: '/entries', exact: true, name: 'Ventas', component: Entries },
];

export default routes;
