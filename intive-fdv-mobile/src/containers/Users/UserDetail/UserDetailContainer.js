import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

//TODo talvez haya que poner en el index.js de esa carpeta
import { fetchUsers } from '../../../stores/actions/UsersActions';

class UsersDetailContainer extends Component {

    componentWillMount() {
        //TODO talvez recuperar de navegation
        this.props.fetchUserById(2);
    }

    getUser() {
        const { user } = this.props;
        return (
            <Card>
                <CardItem header>
                  <Text>Detail user</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text> {user.surname}, {user.name}</Text>
                    <Text> {user.country.alpha2Code}, {user.country.name}</Text>
                    <Text> {user.birthdate}</Text>
                  </Body>
                </CardItem>
             </Card>
          )
    }
    render() {
        return (
          <Container>
            <Header />
            <Content>
              {this.props.user.isFetching && <Text>Loading</Text>}
                {
                    this.props.user.data ? this.getUser() : null
                }
            </Content>
          </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserById: () => dispatch(fetchUserById())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersDetailContainer)
