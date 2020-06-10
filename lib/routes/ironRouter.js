import '../../client/AppLayout.html';
Router.configure({
    layoutTemplate : 'applayout'
})
Router.route('/', function(){
    this.render('login');
});
Router.route('/applayout', function () {
    this.render('applayout');
    // if(Meteor.user()){
    //   this.render('appLayout');
    // } 
}); 
