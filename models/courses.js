courses = new Mongo.Collection('courses');

courses.attachSchema(
    new SimpleSchema({
    title: {
      type: String
    },
    tutor: {
      type: String
    },
    content: {
      type: String
    },
    maxCount: {
      type: Number
    },
    members: {
      type: [String]
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  courses.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
