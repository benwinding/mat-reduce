/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { blankContact } from './form-assignee.models';
/**
 * @param {?} c
 * @return {?}
 */
export function GetFirstContact(c) {
    if (!c) {
        /** @type {?} */
        var blank_1 = blankContact();
        blank_1.name = 'NO CONTRACTOR FOUND';
        return blank_1;
    }
    if (c.contactsArray && !!c.contactsArray.length) {
        return c.contactsArray[0];
    }
    /** @type {?} */
    var blank = blankContact();
    blank.name = 'NO CONTACT FOUND';
    return blank;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2NvbXBvc2VkL2NvbnRhY3QtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBRWxFLE1BQU0sVUFBVSxlQUFlLENBQUMsQ0FBYTtJQUMzQyxJQUFJLENBQUMsQ0FBQyxFQUFFOztZQUNBLE9BQUssR0FBRyxZQUFZLEVBQUU7UUFDNUIsT0FBSyxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQztRQUNuQyxPQUFPLE9BQUssQ0FBQztLQUNkO0lBQ0QsSUFBSSxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtRQUMvQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0I7O1FBQ0ssS0FBSyxHQUFHLFlBQVksRUFBRTtJQUM1QixLQUFLLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0lBQ2hDLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyYWN0b3IsIGJsYW5rQ29udGFjdCB9IGZyb20gJy4vZm9ybS1hc3NpZ25lZS5tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gR2V0Rmlyc3RDb250YWN0KGM6IENvbnRyYWN0b3IpIHtcbiAgaWYgKCFjKSB7XG4gICAgY29uc3QgYmxhbmsgPSBibGFua0NvbnRhY3QoKTtcbiAgICBibGFuay5uYW1lID0gJ05PIENPTlRSQUNUT1IgRk9VTkQnO1xuICAgIHJldHVybiBibGFuaztcbiAgfVxuICBpZiAoYy5jb250YWN0c0FycmF5ICYmICEhYy5jb250YWN0c0FycmF5Lmxlbmd0aCkge1xuICAgIHJldHVybiBjLmNvbnRhY3RzQXJyYXlbMF07XG4gIH1cbiAgY29uc3QgYmxhbmsgPSBibGFua0NvbnRhY3QoKTtcbiAgYmxhbmsubmFtZSA9ICdOTyBDT05UQUNUIEZPVU5EJztcbiAgcmV0dXJuIGJsYW5rO1xufVxuIl19