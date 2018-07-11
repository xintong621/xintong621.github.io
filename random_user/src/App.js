import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Router, Switch, Route } from 'react-router'
import './App.css';

import history from './routerHistory';

import { fetchUsers } from './actions'

import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

class App extends Component {

  state = {
    num: 1000
  }

  componentWillMount() {
    this.props.dispatch(fetchUsers());
  }

  resetNum(e) {
    this.setState({ num: e.target.value });
  }

  render() {
    const { users, userDetail, loading } = this.props;
    return (
      <div className="App">
       <Router history={history}>
          <Switch>
            <Route exact={true} path="/" render={()=>
              <div>
                <h4>How many users do you want to get?</h4>
                <input value={this.state.num} onChange={this.resetNum.bind(this)} />
                <button disabled={loading} onClick={
                  function () { this.props.dispatch(fetchUsers(this.state.num)); }.bind(this)
                }>{loading ? 'loading...' : 'Refresh!'}</button>
                <UserList users={users} />
              </div>
            }/>
            <Route exact={true} path="/detail" render={()=><UserDetail userDetail={userDetail} />}/>
          </Switch>
        </Router>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  users: state.users,
  userDetail: state.userDetail,
  loading: state.loading
});

export default connect(mapStateToProps)(App);
