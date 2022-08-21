export const drawerItemsMain = [
  {
    key: 'Home',
    title: 'Home',
    routes: [{nav: 'MainDrawer', routeName: 'Home', title: 'Home'}],
  },
  {
    key: 'News',
    title: 'News',
    routes: [{nav: 'MainDrawer', routeName: 'News', title: 'News'}],
  },
  {
    key: 'Login',
    title: 'Login',
    routes: [{nav: 'MainDrawer', routeName: 'Login', title: 'Login'}],
  },
];

export const drawerItemsMainAdmin = [
  {
    key: 'Home',
    title: 'Home',
    routes: [{nav: 'MainDrawer', routeName: 'Home', title: 'Home'}],
  },

  {
    key: 'Profile',
    title: 'Profile',
    routes: [{nav: 'MainDrawer', routeName: 'Profile', title: 'Profile'}],
  },
  {
    key: 'News',
    title: 'News',
    routes: [{nav: 'MainDrawer', routeName: 'News', title: 'News'}],
  },
  {
    key: 'Event',
    title: 'Event',
    routes: [
      {nav: 'MainDrawer', routeName: 'EventList', title: 'Event List'},
      {nav: 'MainDrawer', routeName: 'ManageEvent', title: 'Manage Event'},
      {
        nav: 'MainDrawer',
        routeName: 'RegisParticipant',
        title: 'Register Participant',
      },
      {nav: 'MainDrawer', routeName: 'RegisUser', title: 'Register User'},
    ],
  },
  {
    key: 'Admin',
    title: 'Admin',
    routes: [{nav: 'MainDrawer', routeName: 'ManageAdmin', title: 'Admin'}],
  },
];

export const drawerItemsMainUser = [
  {
    key: 'Home',
    title: 'Home',
    routes: [{nav: 'MainDrawer', routeName: 'Home', title: 'Home'}],
  },
  {
    key: 'Profile',
    title: 'Profile',
    routes: [{nav: 'MainDrawer', routeName: 'Profile', title: 'Profile'}],
  },
  {
    key: 'News',
    title: 'News',
    routes: [{nav: 'MainDrawer', routeName: 'News', title: 'News'}],
  },
  {
    key: 'Event',
    title: 'Event',
    routes: [
      {nav: 'MainDrawer', routeName: 'Event List', title: 'Event List'},
      {
        nav: 'MainDrawer',
        routeName: 'Register Participant',
        title: 'Register Participant',
      },
      {nav: 'MainDrawer', routeName: 'Register User', title: 'Register User'},
    ],
  },
];
