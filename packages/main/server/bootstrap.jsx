Meteor.startup(() =>{
  if( Meteor.users.find().count() === 0 ){
    Accounts.createUser({
      email: "wmzhai@gmail.com",
      password: 'meteor'
    });
  }
})