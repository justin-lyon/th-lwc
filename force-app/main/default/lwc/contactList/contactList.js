import { LightningElement, wire } from 'lwc'
import FIRST_NAME from '@salesforce/schema/Contact.FirstName'
import LAST_NAME from '@salesforce/schema/Contact.LastName'
import EMAIL from '@salesforce/schema/Contact.Email'
import getContacts from '@salesforce/apex/ContactController.getContacts'

export default class ContactList extends LightningElement {
  columns = [
    { label: 'First Name', fieldName: FIRST_NAME.fieldApiName, type: 'text' },
    { label: 'Last Name', fieldName: LAST_NAME.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: EMAIL.fieldApiName, type: 'text' } ]

  @wire(getContacts)
  contacts
}