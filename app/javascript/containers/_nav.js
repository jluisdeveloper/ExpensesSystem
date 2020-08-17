export default [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Modulo Principal']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/',
    icon: 'cil-speedometer',
    badge: {
      color: 'info',
      text: 'PRINCIPAL',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Reportes',
    to: '/reports',
    icon: 'cil-chart-line',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Administracion']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Usuarios',
    to: '/users',
    icon: 'cil-group',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Categorias',
    to: '/categories',
    icon: 'cil-tags',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Ventas',
    to: '/entries',
    icon: 'cil-dollar',
  },
  {
    _tag: 'CSidebarNavDivider'
  }
]

