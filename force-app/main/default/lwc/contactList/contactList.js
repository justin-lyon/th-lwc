import { LightningElement, wire } from 'lwc'

import getContacts from '@salesforce/apex/ContactController.getContacts'
// eslint-disable-next-line semi
import { reduceErrors } from 'c/ldsUtils';

import FIRST_NAME from '@salesforce/schema/Contact.FirstName'
import LAST_NAME from '@salesforce/schema/Contact.LastName'
import EMAIL from '@salesforce/schema/Contact.Email'

export default class ContactList extends LightningElement {
  columns = [
    { label: 'First Name', fieldName: FIRST_NAME.fieldApiName, type: 'text' },
    { label: 'Last Name', fieldName: LAST_NAME.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: EMAIL.fieldApiName, type: 'text' } ]

  @wire(getContacts)
  contacts

  // eslint-disable-next-line space-before-function-paren
  get errors() {
    return this.contacts.error ? reduceErrors(this.contacts.error) : []
  }
}