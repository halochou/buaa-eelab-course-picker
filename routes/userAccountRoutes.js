Router.route('userAccount', function () {
  this.render('userAccount');
  SEO.set({ title: 'Account -' + Meteor.App.NAME });
});
