import React, { Component } from 'react'

const UserContext = React.createContext();
//Provider, Consumer

export class UserProvider extends Component {
    state = {
        users: [
          {
            id: 1,
            name: "İsmail ÇELİK",
            salary: "8000",
            department: "Bilişim"
          },
          {
            id: 2,
            name: "İsmail ÇELİK",
            salary: "8000",
            department: "Bilişim"
          },
          {
            id: 3,
            name: "İsmail ÇELİK",
            salary: "8000",
            department: "Bilişim"
          }
        ]
      }
    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;