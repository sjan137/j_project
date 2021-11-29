import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import { ReactComponent as House } from '../../svg/home-outline.svg';
import { ReactComponent as Bus } from '../../svg/bus-outline.svg';
import { ReactComponent as Ticket } from '../../svg/ticket-outline.svg';
import { ReactComponent as Card } from '../../svg/card-outline.svg';
import { ReactComponent as Trending } from '../../svg/trending-up-outline.svg';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: '홈',
    path: '/dashboard/home',
    icon: <House />
  },
  {
    title: '교통',
    path: '/dashboard/transportation',
    icon: <Bus />
  },
  {
    title: '문화',
    path: '/dashboard/culture',
    icon: <Ticket />
  },
  {
    title: '소비',
    path: '/dashboard/consumption',
    icon: <Card />
  },
  {
    title: '생활',
    path: '/dashboard/living',
    icon: <Trending />
  }
  // {
  //   title: 'dashboard',
  //   path: '/dashboard/app',
  //   icon: getIcon(pieChart2Fill)
  // },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: getIcon(peopleFill)
  // },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon(shoppingBagFill)
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon(fileTextFill)
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon(lockFill)
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon(personAddFill)
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon(alertTriangleFill)
  // }
];

export default sidebarConfig;
