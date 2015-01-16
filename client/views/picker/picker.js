Template['picker'].helpers({
    'courses': function() {
        return courses.find().fetch();
    },
    'currentCount': function(){
        return 10;
    },
    'maxCount': function(){
        targetId = $(evt.currentTarget).data("id");
        return courses.findOne({_id: targetId}).maxCount;
    }
});

Template['picker'].events({
    'click .enroll': function(evt,tpl) {

        targetId = $(evt.currentTarget).data("id");
        courses.update({
            _id: targetId
        }, {
            $push: {'members': Meteor.userId()}
        });
    }
});

Template['picker'].rendered = function () {
    $('.progress').progress();
};