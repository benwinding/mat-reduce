import { Contractor, blankContact } from './form-assignee.models';

export function GetFirstContact(c: Contractor) {
  if (!c) {
    const blank = blankContact();
    blank.name = 'NO CONTRACTOR FOUND';
    return blank;
  }
  if (c.contactsArray && !!c.contactsArray.length) {
    return c.contactsArray[0];
  }
  const blank = blankContact();
  blank.name = 'NO CONTACT FOUND';
  return blank;
}
