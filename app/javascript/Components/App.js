import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('../containers/TheLayout'));

class App extends Component {
  render() {
    return(
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/" name="Dashboard" render={props => <TheLayout {...props}/>} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default App;

// import React, { Component } from 'react';
// import axios from 'axios'
//
// import Users from "./Users/Users";
// import CategoriesList from "./Categories/CategoriesList";
// import Entry from "./Entry/Entry";
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentUser: {},
//       categories: [],
//       users: []
//     }
//   }
//
//   componentDidMount() {
//     this.getCurrentUser();
//     this.getUserList();
//     this.getCategoriesList();
//   }
//
//   getCurrentUser = async() => {
//     let that = this;
//     await axios.get('/current_user')
//       .then((response)=>{
//         that.setState({
//           currentUser: response.data.current_user,
//         })
//       }).catch((error)=> {
//         console.log(error)
//       })
//   }
//
//   getUserList = (users) => {
//     this.setState({
//       users
//     })
//   }
//
//   getCategoriesList = categories => {
//     this.setState({
//       categories : categories
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <Users
//           getUserList = { this.getUserList }
//         />
//         <CategoriesList
//           getCategoriesList = { this.getCategoriesList }
//           categories = { this.state.categories }
//         />
//         {/*App Component*/}
//
//
//
//         <Entry
//           currentUser = { this.state.currentUser }
//           categories = { this.state.categories }
//           users = { this.state.users }
//         />
//       </div>
//     );
//   }
// }
//
// export default App;