import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading'


class App extends Component {
  constructor(props) {
    super(props)
    // create a state!
    this.state = {
      users: [],
      loading: false
    };
    // bind if you dont do this, TypeError:cannot read property 'getUsers' of undefined. getUsers in the handleSubmit(event)...
    // so we must bind handlesubmit
    this.handleSubmit = this.handleSubmit.bind(this);
    this.newMethod = this.newMethod.bind(this);

  }
  getUsers() {
    this.setState({
      loading: true
    })
    //axios('https://api.randomuser.me/?nat=US&results=5').then(response => console.log(response))  
    axios('https://api.randomuser.me/?nat=US&results=5').then(response => this.setState({
      //users: response.data.results,
      // all the time, new users data
      // we want hold the old users data
      // so we can use rest opr. ' ... ' 
      users: [...this.state.users, ...response.data.results],
      // u can look at the crome's react dev tool in components old array obj. + new array obj(+5) +++.....  but if you reload your page, u can see 5 obj in array. because ''https://api.randomuser.me/?nat=US&results=5' , we are working simple API we havent got any backend :P, just simple response service.
      loading: false
    }))
  }
  handleSubmit(event) {
    event.preventDefault();
    this.getUsers();
    console.log('more users loaded');
  }

  UNSAFE_componentWillMount() {
    this.newMethod();
  }

  newMethod() {
    this.getUsers();
  }

  render() {
    // destructuring inline ...
    // we dont use all the time this.state..
    const { loading, users } = this.state;
    // we can delete 'this.state'  from  {loading,users} 
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="load users" />
        </form>
        <hr/>
        {!loading ?
          users.map(user => (
            // Iniqe key => each element have a unique Id
            <div key={user.id.value} >

              <h3 //stylyling 
                style={{ color: 'red' }}

              >{user.cell}</h3>
              <p>{user.name.first} {user.name.last}</p>
              <hr />


            </div>
          )) : <Loading message="message go to Loading.js in Loading components props" />
          // we can send state's argument in Loading's props <Loading message={this.state.users} />
        }
      </div>
    );
  }

}

export default App;
