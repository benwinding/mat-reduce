/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function Assignee() { }
if (false) {
    /** @type {?|undefined} */
    Assignee.prototype.selected_tag;
    /** @type {?|undefined} */
    Assignee.prototype.selected_obj;
    /** @type {?|undefined} */
    Assignee.prototype.assignee_id;
    /** @type {?} */
    Assignee.prototype.type;
    /** @type {?} */
    Assignee.prototype.name;
    /** @type {?} */
    Assignee.prototype.email;
    /** @type {?|undefined} */
    Assignee.prototype.mobile;
}
/** @enum {string} */
const AssigneeType = {
    contractor: 'Contractor',
    staffMember: 'Staff Member',
    myDetails: 'My Details',
};
export { AssigneeType };
/**
 * @record
 */
export function User() { }
if (false) {
    /** @type {?|undefined} */
    User.prototype.id;
    /** @type {?} */
    User.prototype.Email;
    /* Skipping unnamed member:
    'First Name': string;*/
    /* Skipping unnamed member:
    'Last Name': string;*/
    /** @type {?} */
    User.prototype.Phone;
}
/**
 * @record
 */
export function StaffMember() { }
if (false) {
    /** @type {?|undefined} */
    StaffMember.prototype.id;
    /** @type {?|undefined} */
    StaffMember.prototype.name;
    /** @type {?|undefined} */
    StaffMember.prototype.email;
    /** @type {?|undefined} */
    StaffMember.prototype.phone;
}
/**
 * @record
 */
export function Contractor() { }
if (false) {
    /** @type {?|undefined} */
    Contractor.prototype.id;
    /** @type {?|undefined} */
    Contractor.prototype.contactsArray;
}
/**
 * @record
 */
export function Contact() { }
if (false) {
    /** @type {?} */
    Contact.prototype.id;
    /** @type {?|undefined} */
    Contact.prototype.name;
    /** @type {?|undefined} */
    Contact.prototype.email;
    /** @type {?|undefined} */
    Contact.prototype.phone;
}
/**
 * @return {?}
 */
export function blankContact() {
    return {
        id: '',
        name: '',
        email: '',
        phone: '',
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1hc3NpZ25lZS5tb2RlbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2NvbXBvc2VkL2Zvcm0tYXNzaWduZWUubW9kZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSw4QkFRQzs7O0lBUEMsZ0NBQW1COztJQUNuQixnQ0FBbUI7O0lBQ25CLCtCQUFxQjs7SUFDckIsd0JBQW1COztJQUNuQix3QkFBYTs7SUFDYix5QkFBYzs7SUFDZCwwQkFBZ0I7Ozs7SUFJaEIsWUFBYSxZQUFZO0lBQ3pCLGFBQWMsY0FBYztJQUM1QixXQUFZLFlBQVk7Ozs7OztBQUcxQiwwQkFNQzs7O0lBTEMsa0JBQVk7O0lBQ1oscUJBQWM7Ozs7OztJQUdkLHFCQUFjOzs7OztBQUdoQixpQ0FLQzs7O0lBSkMseUJBQVk7O0lBQ1osMkJBQWM7O0lBQ2QsNEJBQWU7O0lBQ2YsNEJBQWU7Ozs7O0FBR2pCLGdDQUdDOzs7SUFGQyx3QkFBWTs7SUFDWixtQ0FBMEI7Ozs7O0FBRzVCLDZCQUtDOzs7SUFKQyxxQkFBVzs7SUFDWCx1QkFBYzs7SUFDZCx3QkFBZTs7SUFDZix3QkFBZTs7Ozs7QUFHakIsTUFBTSxVQUFVLFlBQVk7SUFDMUIsT0FBTztRQUNMLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO0tBQ1YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWcgfSBmcm9tICcuLi9tYXRlcmlhbC9UYWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFzc2lnbmVlIHtcbiAgc2VsZWN0ZWRfdGFnPzogVGFnO1xuICBzZWxlY3RlZF9vYmo/OiBhbnk7XG4gIGFzc2lnbmVlX2lkPzogc3RyaW5nO1xuICB0eXBlOiBBc3NpZ25lZVR5cGU7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgbW9iaWxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBBc3NpZ25lZVR5cGUge1xuICBjb250cmFjdG9yID0gJ0NvbnRyYWN0b3InLFxuICBzdGFmZk1lbWJlciA9ICdTdGFmZiBNZW1iZXInLFxuICBteURldGFpbHMgPSAnTXkgRGV0YWlscycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIGlkPzogc3RyaW5nO1xuICBFbWFpbDogc3RyaW5nO1xuICAnRmlyc3QgTmFtZSc6IHN0cmluZztcbiAgJ0xhc3QgTmFtZSc6IHN0cmluZztcbiAgUGhvbmU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGFmZk1lbWJlciB7XG4gIGlkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgcGhvbmU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udHJhY3RvciB7XG4gIGlkPzogc3RyaW5nO1xuICBjb250YWN0c0FycmF5PzogQ29udGFjdFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhY3Qge1xuICBpZDogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgcGhvbmU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBibGFua0NvbnRhY3QoKTogQ29udGFjdCB7XG4gIHJldHVybiB7XG4gICAgaWQ6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwaG9uZTogJycsXG4gIH07XG59XG5cbiJdfQ==