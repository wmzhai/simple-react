UserLogin = React.createClass({

  onSubmit(e){
    e.preventDefault();

    var self = this;

    var email = $(e.target).find("[name=email]").val();
    var password = e.target.password.value;

    console.log(email);
    console.log(password);

    Meteor.loginWithPassword(email, password, function(err){
      if(err){
        console.log(err.reason);
      } else{
        FlowRouter.go('Home');
      }
    });
  },

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>Login</h1>
            <form onSubmit={this.onSubmit}>
              <input type="text" name="email" placeholder="Enter email..." className="form-control"/>
              <input type="password" name="password" placeholder="Enter password..." className="form-control"/>
              <input type="submit" value="Login" className="btn btn-default"/>
            </form>

          </div>
        </div>

      </div>
    )
  }
});