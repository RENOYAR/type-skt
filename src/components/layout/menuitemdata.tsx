export const menuItemData = [
  {
    id: 1,
    title: 'Dashoboard',
    icon: 'icon-dashboard',
    hicon: 'icon-dashboard-active',
    url: '/',
  },
  {
    id: 2,
    title: 'Map',
    icon: 'icon-map',
    hicon: 'icon-map-active',
    url: '/Space000',
    submenu: [
      {
        id: 21,
        title: 'Space 관리',
        url: '/Space000',
      },
      {
        id: 22,
        title: '측위 영역 관리',
        url: '#',
      },
      {
        id: 23,
        title: 'Anchor Mapping',
        url: '#',
      },
      {
        id: 24,
        title: '배경 Layer 설정',
        url: '#',
      },
      {
        id: 25,
        title: 'Marker Mapping',
        url: '#',
      },
    ],
  },
  {
    id: 3,
    title: 'Tag',
    icon: 'icon-tag',
    hicon: 'icon-tag-active',
    url: '#',
  },
  {
    id: 4,
    title: 'Anchor',
    icon: 'icon-anchor',
    hicon: 'icon-anchor-active',
    url: '#',
  },
  {
    ic: 5,
    title: 'RTLS 설정',
    icon: 'icon-rtls',
    hicon: 'icon-rtls-active',
    url: '#',
  },
];
