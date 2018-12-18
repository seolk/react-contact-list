import React from 'react'
import { Table } from 'semantic-ui-react'
import Contact from './Contact'
// import Logo from  '../imgs/logo.png'

const Contacts = ({ contacts, remove, edit }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Option</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        contacts.map(contact => (
          <Contact key={contact.id} {...contact} remove={remove} edit={edit} />
        ))
      }
      {/* <img src={Logo} /> */}
    </Table.Body>
  </Table>
)

export default Contacts;