import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        buttonClicked: function() {
            console.log('send');

            var success = function(response) {
                console.log(response);
                console.log("Wow it worked: "+response.message);
            };

            var failure = function(response) {
                console.log("That just totally failed: "+response.message);
            };

            var task = {
                name: 'Start taking advantage of WebSockets with Ember CLI and Rails',
                completed: false
            };

            this.send('trigger', 'tasks.create', task, success, failure );
        },

        subscribeButton: function() {
            console.log('subscribe');

            this.send('subscribe', 'public_channel' );

            var channel_event = function(data) {
                alert("channel event received"+data);
            };

            this.send('bind_channel_event', 'public_channel', 'test_event', channel_event );
        },

        unsubscribeButton: function() {
            console.log('unsubscribe');
        },

        privateSubscribeButton: function() {
            console.log('private subscribe');
        },

        privateUnsubscribeButton: function() {
            console.log('private unsubscribe');
        }
    }
});
