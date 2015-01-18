Template['picker'].helpers({
    'courses': function() {
        return courses.find().fetch();
    },
    'currentCount': function(){
        return this.members.length;
    },
    'currentCountRate': function(){
        var currentcountrate;
        currentcountrate = (this.members.length * 100.0 / this.maxCount);
        return currentcountrate;
    }   
});

Template['picker'].events({
    'click .enroll': function(evt,tpl) {
        // targetId = $(evt.currentTarget).data("id");
        courses.update({
            _id: this._id
        }, {
            $push: {'members': Meteor.userId()}
        });
    }
});

Template['picker'].rendered = function () {
    $('.progress').progress();
};