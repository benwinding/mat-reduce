import { Tag } from '../material/Tag';

export interface Assignee {
  selected_tag?: Tag;
  selected_obj?: any;
  assignee_id?: string;
  type: AssigneeType;
  name: string;
  email: string;
  mobile?: string;
}

export enum AssigneeType {
  contractor = 'Contractor',
  staffMember = 'Staff Member',
  myDetails = 'My Details',
}

export interface User {
  id?: string;
  Email: string;
  'First Name': string;
  'Last Name': string;
  Phone: string;
}

export interface StaffMember {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
}

export interface Contractor {
  id?: string;
  contactsArray?: Contact[];
}

export interface Contact {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
}

export function blankContact(): Contact {
  return {
    id: '',
    name: '',
    email: '',
    phone: '',
  };
}

