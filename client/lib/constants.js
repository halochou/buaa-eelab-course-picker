// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Buaa Experimental Center Courses Management System',
  DESCRIPTION: 'Buaa Experimental Center Courses Management System developed by Halochou and geng.legion'
};
