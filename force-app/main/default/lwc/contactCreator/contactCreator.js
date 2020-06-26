import { LightningElement } from 'lwc'
import CONTACT_DESCRIBE from '@salesforce/schema/Contact'
import FIRST_NAME from '@salesforce/schema/Contact.FirstName'
import LAST_NAME from '@salesforce/schema/Contact.LastName'
import EMAIL from '@salesforce/schema/Contact.Email'

import ShowToastEvent from 'lightning/platformShowToastEvent'

export default class ContactCreator extends LightningElement {
  objectApiName = CONTACT_DESCRIBE
  fields = [
    FIRST_NAME,
    LAST_NAME,
    EMAIL ]

  // eslint-disable-next-line space-before-function-paren
  handleSuccess(event) {
    const toast = new ShowToastEvent({
      title: 'Contact Created',
      message: 'Record ID: ' + event.detail.id,
      variant: 'success' })

    this.dispatchEvent(toast)
  }
}
