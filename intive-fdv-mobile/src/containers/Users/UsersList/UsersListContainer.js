import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Container, Header, Content, List, ListItem, Left, Icon, Body, Right, Text } from 'native-base';

//TODo talvez haya que poner en el index.js de esa carpeta
import { fetchUsers } from '../../../stores/actions/UsersActions';

class UsersListContainer extends Component<Props> {

    componentWillMount() {
        this.props.fetchUsers();
    }

    getUserById = (idUser) => {
        console.log('getUserById', this.props);
        //console.log('this.props.navigation', this.props.navigation);
       // this.props.navigation.navegate('UserDetail', { idSelected: idUser})
    }

    getUsers() {
        const { users } = this.props;
        return users.data.map((user) => {
            return (
              <ListItem avatar key={user.index}>
                <Left>
                </Left>
                <Body>
                  <Text>{user.surname}, {user.name}</Text>
                  <Text note>{user.country.name} - {user.country.birthdate}</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" onPress={() => this.getUserById(user.index)}/>
                </Right>
              </ListItem>
            )
        })
    }
    render() {
      //console.log('render', this.props);
      //console.log('this.props.navigation', this.props.navigation);
        return (
          <Container>
            <Header />
            <Content>
              <List>
              {this.props.users.isFetching && <Text>Loading</Text>}
                    {
                        this.props.users.data.length ? this.getUsers() : null
                    }

                </List>
            </Content>
          </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);