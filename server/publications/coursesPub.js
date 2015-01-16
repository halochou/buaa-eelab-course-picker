Meteor.publish('courses', function () {
  return courses.find();
});
