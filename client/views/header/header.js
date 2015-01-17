Template['header'].helpers({
});

Template['header'].events({
    "click .logout": function() {
        Meteor.logout();
        
    }
});
