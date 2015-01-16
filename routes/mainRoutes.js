Router.route('/', function () {
  this.render('picker');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});
