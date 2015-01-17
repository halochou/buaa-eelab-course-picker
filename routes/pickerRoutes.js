Router.route('/picker', function () {
  this.render('picker');
  SEO.set({ title: 'Course Selecting -' + Meteor.App.NAME });
});