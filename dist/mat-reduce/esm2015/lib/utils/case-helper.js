/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} input
 * @return {?}
 */
export function ConvertToTitleCase(input) {
    /** @type {?} */
    const capitalsWithSpaces = input.replace(/([A-Z])/g, ' $1').trim();
    /** @type {?} */
    const underscoresToSpaces = capitalsWithSpaces.replace(/_/g, ' ');
    return underscoresToSpaces
        .split(' ')
        .map((/**
     * @param {?} p
     * @return {?}
     */
    p => p.charAt(0).toUpperCase() + p.substr(1).toLowerCase()))
        .join(' ');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZS1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2Nhc2UtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEtBQWE7O1VBQ3hDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRTs7VUFDNUQsbUJBQW1CLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7SUFDakUsT0FBTyxtQkFBbUI7U0FDdkIsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLEdBQUc7Ozs7SUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBQztTQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIENvbnZlcnRUb1RpdGxlQ2FzZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICBjb25zdCBjYXBpdGFsc1dpdGhTcGFjZXMgPSBpbnB1dC5yZXBsYWNlKC8oW0EtWl0pL2csICcgJDEnKS50cmltKCk7XHJcbiAgY29uc3QgdW5kZXJzY29yZXNUb1NwYWNlcyA9IGNhcGl0YWxzV2l0aFNwYWNlcy5yZXBsYWNlKC9fL2csICcgJyk7XHJcbiAgcmV0dXJuIHVuZGVyc2NvcmVzVG9TcGFjZXNcclxuICAgIC5zcGxpdCgnICcpXHJcbiAgICAubWFwKHAgPT4gcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHAuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAuam9pbignICcpO1xyXG59XHJcbiJdfQ==