import React from 'react';
import { Button, Table, Modal } from 'semantic-ui-react';
import ContactForm from './ContactForm'
// import '../Styles.css'
const Contact = ({ id, firstName, phone, remove, edit }) => (
  <Table.Row id={id}>
    <Table.Cell>{firstName}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button color="red" onClick={() => remove(id) }>
        Delete
    </Button>
    <Modal trigger={
      <Button color="yellow">
        Edit
      </Button>
    }>
    <Modal.Header>Edit Form</Modal.Header>
      <ContactForm
        id={id}
        firstName={firstName}
        phone={phone}
        edit={edit}
      />
    </Modal>
    </Table.Cell>
  </Table.Row>
)

export default Contact