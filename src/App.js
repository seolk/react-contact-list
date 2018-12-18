import React, { Component } from 'react';
import { Container, Header, Button, Icon, Segment } from 'semantic-ui-react';
import Contacts from './contacts/Contacts';
import ContactForm from './contacts/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 1, firstName: 'Bob', phone: "123-123-1234" },
      { id: 2, firstName: 'Jerry', phone: "123-543-1234" },
      { id: 3, firstName: 'Cosmo', phone: "123-186-1234" }
    ],
    showForm: true,
  }

  toggleForm = () => this.setState({showForm: !this.state.showForm})

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  addContact = (contactData) => {
    let newContact = { id: this.getId(), ...contactData }
    this.setState({ contacts: [newContact, ...this.state.contacts] })
  }

  removeContact = (id) => {
    const newContacts = this.state.contacts.filter ( contact => {
      if (contact.id !== id)
        return contact
    })
    this.setState({ contacts: [...newContacts]})
  }

  updateContact = (contactData, id) => {
    // remove the contact and replace it with the new one
    // let removeIndex = this.state.contacts.map( (Item) => {
    //   return Item.id
    // }).indexOf(id)

    // removeIndex && this.state.contacts.splice(removeIndex, 1)
    // this.addContact(contactData)

    // or change the contact in state
    let contacts = this.state.contacts

    contacts.map( c => {
      if (c.id === id) {
        c.firstName = contactData.firstName
        c.phone = contactData.phone
      }

      this.setState({ contacts: [...contacts]})
    })
  }

  render() {
    const { showForm, contacts } = this.state
    return (
      <Container>
        <Header as="h1">React Contact list</Header>
        <br />
        <Segment>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={showForm ? 'angle double up' : 'angle double down'} />
          </Button>
        {showForm ? <ContactForm add={ this.addContact } /> : null }
        </Segment>
        <br />
        <Contacts 
          contacts={contacts} 
          remove={this.removeContact} 
          edit={this.updateContact}
        />
      </Container>
    );
  }
}

export default App;
