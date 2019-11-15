/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
var FormControlWithLabel = /** @class */ (function (_super) {
    tslib_1.__extends(FormControlWithLabel, _super);
    function FormControlWithLabel(value, validators, label) {
        var _this = _super.call(this, value, validators) || this;
        _this.label = label;
        return _this;
    }
    return FormControlWithLabel;
}(FormControl));
export { FormControlWithLabel };
if (false) {
    /** @type {?} */
    FormControlWithLabel.prototype.label;
}
var FormArrayWithLabel = /** @class */ (function (_super) {
    tslib_1.__extends(FormArrayWithLabel, _super);
    function FormArrayWithLabel(value, validators, label) {
        var _this = _super.call(this, value, validators) || this;
        _this.label = label;
        return _this;
    }
    return FormArrayWithLabel;
}(FormArray));
export { FormArrayWithLabel };
if (false) {
    /** @type {?} */
    FormArrayWithLabel.prototype.label;
}
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
FormGroupTypeSafe = /** @class */ (function (_super) {
    tslib_1.__extends(FormGroupTypeSafe, _super);
    function FormGroupTypeSafe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormGroupTypeSafe.prototype.setValue = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        _super.prototype.setValue.call(this, newValue);
    };
    return FormGroupTypeSafe;
}(FormGroup));
/**
 * @abstract
 * @template T
 */
export { FormGroupTypeSafe };
if (false) {
    /** @type {?} */
    FormGroupTypeSafe.prototype.value;
    /** @type {?} */
    FormGroupTypeSafe.prototype.label;
    /**
     * @abstract
     * @param {?} propertyFunction
     * @return {?}
     */
    FormGroupTypeSafe.prototype.getSafe = function (propertyFunction) { };
    /**
     * @abstract
     * @param {?} propertyFunction
     * @param {?} control
     * @return {?}
     */
    FormGroupTypeSafe.prototype.setControlSafe = function (propertyFunction, control) { };
}
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
FormArrayTypeSafe = /** @class */ (function (_super) {
    tslib_1.__extends(FormArrayTypeSafe, _super);
    function FormArrayTypeSafe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    FormArrayTypeSafe.prototype.at = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return (/** @type {?} */ (_super.prototype.at.call(this, index)));
    };
    return FormArrayTypeSafe;
}(FormArray));
/**
 * @abstract
 * @template T
 */
export { FormArrayTypeSafe };
if (false) {
    /** @type {?} */
    FormArrayTypeSafe.prototype.value;
}
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
FormControlTypeSafe = /** @class */ (function (_super) {
    tslib_1.__extends(FormControlTypeSafe, _super);
    function FormControlTypeSafe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormControlTypeSafe.prototype.setValue = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        _super.prototype.setValue.call(this, newValue);
    };
    return FormControlTypeSafe;
}(FormControl));
/**
 * @abstract
 * @template T
 */
export { FormControlTypeSafe };
if (false) {
    /** @type {?} */
    FormControlTypeSafe.prototype.value;
    /** @type {?} */
    FormControlTypeSafe.prototype.valueChanges;
}
var FormBuilderTypedService = /** @class */ (function (_super) {
    tslib_1.__extends(FormBuilderTypedService, _super);
    function FormBuilderTypedService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @template T
     * @param {?=} formState
     * @param {?=} validatorOrOpts
     * @param {?=} asyncValidator
     * @return {?}
     */
    FormBuilderTypedService.prototype.control = /**
     * @template T
     * @param {?=} formState
     * @param {?=} validatorOrOpts
     * @param {?=} asyncValidator
     * @return {?}
     */
    function (formState, validatorOrOpts, asyncValidator) {
        /** @type {?} */
        var control = (/** @type {?} */ (_super.prototype.control.call(this, formState, validatorOrOpts, asyncValidator)));
        return control;
    };
    /**
     * @template T
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    FormBuilderTypedService.prototype.array = /**
     * @template T
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    function (controlsConfig, extra) {
        /** @type {?} */
        var arr = (/** @type {?} */ (_super.prototype.array.call(this, controlsConfig, extra)));
        return arr;
    };
    // override group to be type safe
    // override group to be type safe
    /**
     * @template T
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    FormBuilderTypedService.prototype.group = 
    // override group to be type safe
    /**
     * @template T
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    function (controlsConfig, extra) {
        /*NOTE the return FormGroupTypeSafe<T> */
        /*NOTE the return FormGroupTypeSafe<T> */
        // instantiate group from angular type
        /** @type {?} */
        var gr = (/** @type {?} */ (_super.prototype.group.call(this, controlsConfig, extra)));
        if (extra) {
            gr.label = extra['label'];
        }
        /** @type {?} */
        var getPropertyName = (/**
         * @param {?} propertyFunction
         * @return {?}
         */
        function (propertyFunction) {
            //  https://github.com/dsherret/ts-nameof - helped me with the code below, THANX!!!!
            // propertyFunction.toString() sample value:
            //   function(x) { return x.hero.address.postcode;}
            // we need the 'hero.address.postcode'
            // for gr.get('hero.address.postcode') function
            /** @type {?} */
            var properties = propertyFunction
                .toString()
                .split('.')
                .splice(1);
            /** @type {?} */
            var r = properties.join('.');
            return r;
        });
        if (gr) {
            // implement getSafe method
            gr.getSafe = (/**
             * @param {?} propertyFunction
             * @return {?}
             */
            function (propertyFunction) {
                /** @type {?} */
                var getStr = getPropertyName(propertyFunction);
                // console.log(getStr);
                /** @type {?} */
                var p = (/** @type {?} */ (gr.get(getStr)));
                return p;
            });
            // implement setControlSafe
            gr.setControlSafe = (/**
             * @param {?} propertyFunction
             * @param {?} control
             * @return {?}
             */
            function (propertyFunction, control) {
                /** @type {?} */
                var getStr = getPropertyName(propertyFunction);
                // console.log(getStr);
                gr.setControl(getStr, control);
            });
        }
        return gr;
    };
    FormBuilderTypedService.decorators = [
        { type: Injectable }
    ];
    return FormBuilderTypedService;
}(FormBuilder));
export { FormBuilderTypedService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1idWlsZGVyLXR5cGVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Zvcm0tYnVpbGRlci10eXBlZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsV0FBVyxFQUNYLFNBQVMsRUFJVixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUFBMEMsZ0RBQVc7SUFDbkQsOEJBQVksS0FBVSxFQUFFLFVBQWUsRUFBUyxLQUFhO1FBQTdELFlBQ0Usa0JBQU0sS0FBSyxFQUFFLFVBQVUsQ0FBQyxTQUN6QjtRQUYrQyxXQUFLLEdBQUwsS0FBSyxDQUFROztJQUU3RCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBMEMsV0FBVyxHQUlwRDs7OztJQUgwQyxxQ0FBb0I7O0FBSy9EO0lBQXdDLDhDQUFTO0lBQy9DLDRCQUFZLEtBQVUsRUFBRSxVQUFlLEVBQVMsS0FBYTtRQUE3RCxZQUNFLGtCQUFNLEtBQUssRUFBRSxVQUFVLENBQUMsU0FDekI7UUFGK0MsV0FBSyxHQUFMLEtBQUssQ0FBUTs7SUFFN0QsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQUpELENBQXdDLFNBQVMsR0FJaEQ7Ozs7SUFIMEMsbUNBQW9COzs7Ozs7QUFTL0Q7Ozs7O0lBQW1ELDZDQUFTO0lBQTVEOztJQWlCQSxDQUFDOzs7OztJQWJDLG9DQUFROzs7O0lBQVIsVUFBUyxRQUFXO1FBQ2xCLGlCQUFNLFFBQVEsWUFBQyxRQUFRLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBV0gsd0JBQUM7QUFBRCxDQUFDLEFBakJELENBQW1ELFNBQVMsR0FpQjNEOzs7Ozs7OztJQWZDLGtDQUFTOztJQUNULGtDQUFjOzs7Ozs7SUFNZCxzRUFFbUI7Ozs7Ozs7SUFDbkIsc0ZBR1E7Ozs7OztBQUlWOzs7OztJQUFtRCw2Q0FBUztJQUE1RDs7SUFLQSxDQUFDOzs7OztJQUhDLDhCQUFFOzs7O0lBQUYsVUFBRyxLQUFhO1FBQ2QsT0FBTyxtQkFBQSxpQkFBTSxFQUFFLFlBQUMsS0FBSyxDQUFDLEVBQU8sQ0FBQztJQUNoQyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBbUQsU0FBUyxHQUszRDs7Ozs7Ozs7SUFKQyxrQ0FBVzs7Ozs7O0FBTWI7Ozs7O0lBQXFELCtDQUFXO0lBQWhFOztJQU1BLENBQUM7Ozs7O0lBSEMsc0NBQVE7Ozs7SUFBUixVQUFTLFFBQVc7UUFDbEIsaUJBQU0sUUFBUSxZQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFORCxDQUFxRCxXQUFXLEdBTS9EOzs7Ozs7OztJQUxDLG9DQUFTOztJQUNULDJDQUE0Qjs7QUFNOUI7SUFDNkMsbURBQVc7SUFEeEQ7O0lBbUZBLENBQUM7Ozs7Ozs7O0lBakZDLHlDQUFPOzs7Ozs7O0lBQVAsVUFDRSxTQUFlLEVBQ2YsZUFJUSxFQUNSLGNBQTZEOztZQUV2RCxPQUFPLEdBQUcsbUJBQUEsaUJBQU0sT0FBTyxZQUMzQixTQUFTLEVBQ1QsZUFBZSxFQUNmLGNBQWMsQ0FDZixFQUEwQjtRQUMzQixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7Ozs7O0lBQ0QsdUNBQUs7Ozs7OztJQUFMLFVBQ0UsY0FHNEIsRUFDNUIsS0FFUTs7WUFFRixHQUFHLEdBQUcsbUJBQUEsaUJBQU0sS0FBSyxZQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsRUFBd0I7UUFFdEUsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0QsaUNBQWlDOzs7Ozs7OztJQUNqQyx1Q0FBSzs7Ozs7Ozs7SUFBTCxVQUNFLGNBQXNDLEVBQ3RDLEtBRVE7UUFFUix5Q0FBeUM7Ozs7WUFHbkMsRUFBRSxHQUFHLG1CQUFBLGlCQUFNLEtBQUssWUFBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQXdCO1FBQ3JFLElBQUksS0FBSyxFQUFFO1lBQ1QsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0I7O1lBRUssZUFBZTs7OztRQUFHLFVBQUMsZ0JBQTBCOzs7Ozs7O2dCQU0zQyxVQUFVLEdBQUcsZ0JBQWdCO2lCQUNoQyxRQUFRLEVBQUU7aUJBQ1YsS0FBSyxDQUFDLEdBQUcsQ0FBQztpQkFDVixNQUFNLENBQUMsQ0FBQyxDQUFDOztnQkFFTixDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDOUIsT0FBTyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUE7UUFFRCxJQUFJLEVBQUUsRUFBRTtZQUNOLDJCQUEyQjtZQUMzQixFQUFFLENBQUMsT0FBTzs7OztZQUFHLFVBQUMsZ0JBQXFDOztvQkFDM0MsTUFBTSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQzs7O29CQUUxQyxDQUFDLEdBQUcsbUJBQUEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBd0I7Z0JBQ2hELE9BQU8sQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFBLENBQUM7WUFFRiwyQkFBMkI7WUFDM0IsRUFBRSxDQUFDLGNBQWM7Ozs7O1lBQUcsVUFDbEIsZ0JBQXFDLEVBQ3JDLE9BQXdCOztvQkFFbEIsTUFBTSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDaEQsdUJBQXVCO2dCQUN2QixFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUEsQ0FBQztTQUNIO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOztnQkFsRkYsVUFBVTs7SUFtRlgsOEJBQUM7Q0FBQSxBQW5GRCxDQUM2QyxXQUFXLEdBa0Z2RDtTQWxGWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbCxcclxuICBGb3JtQXJyYXksXHJcbiAgRm9ybUJ1aWxkZXIsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUdyb3VwLFxyXG4gIFZhbGlkYXRvckZuLFxyXG4gIEFic3RyYWN0Q29udHJvbE9wdGlvbnMsXHJcbiAgQXN5bmNWYWxpZGF0b3JGblxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xXaXRoTGFiZWwgZXh0ZW5kcyBGb3JtQ29udHJvbCB7XHJcbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSwgdmFsaWRhdG9yczogYW55LCBwdWJsaWMgbGFiZWw6IHN0cmluZykge1xyXG4gICAgc3VwZXIodmFsdWUsIHZhbGlkYXRvcnMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1BcnJheVdpdGhMYWJlbCBleHRlbmRzIEZvcm1BcnJheSB7XHJcbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSwgdmFsaWRhdG9yczogYW55LCBwdWJsaWMgbGFiZWw6IHN0cmluZykge1xyXG4gICAgc3VwZXIodmFsdWUsIHZhbGlkYXRvcnMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRm9ybUdyb3VwQ29udHJvbHNPZjxUPiA9IHtcclxuICBbUCBpbiBrZXlvZiBUXTogRm9ybUNvbnRyb2wgfCBGb3JtR3JvdXAgfCBGb3JtQXJyYXkgfCBGb3JtQ29udHJvbFdpdGhMYWJlbFxyXG59O1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZvcm1Hcm91cFR5cGVTYWZlPFQ+IGV4dGVuZHMgRm9ybUdyb3VwIHtcclxuICAvLyBnaXZlIHRoZSB2YWx1ZSBhIGN1c3RvbSB0eXBlIHNcclxuICB2YWx1ZTogVDtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIHNldFZhbHVlKG5ld1ZhbHVlOiBUKSB7XHJcbiAgICBzdXBlci5zZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGUgaGVscGVyIG1ldGhvZHMgdG8gYWNoaWV2ZSB0aGlzIHN5bnRheCBlZzogdGhpcy5mb3JtLmdldFNhZmUoeCA9PiB4Lmhlcm9OYW1lKS5wYXRjaFZhbHVlKCdIaW1hbicpXHJcbiAgcHVibGljIGFic3RyYWN0IGdldFNhZmUoXHJcbiAgICBwcm9wZXJ0eUZ1bmN0aW9uOiAodHlwZVZhbDogVCkgPT4gYW55XHJcbiAgKTogQWJzdHJhY3RDb250cm9sO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBzZXRDb250cm9sU2FmZShcclxuICAgIHByb3BlcnR5RnVuY3Rpb246ICh0eXBlVmFsOiBUKSA9PiBhbnksXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2xcclxuICApOiB2b2lkO1xyXG4gIC8vIElmIHlvdSBuZWVkIG1vcmUgZnVuY3Rpb24gaW1wbGVtZW50IGRlY2xhcmUgdGhlbSBoZXJlIGJ1dCBpbXBsZW1lbnQgdGhlbSBvbiBGb3JtQnVpbGRlclR5cGVkU2VydmljZS5ncm91cCBpbnN0YW50aWF0aW9uLlxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm9ybUFycmF5VHlwZVNhZmU8VD4gZXh0ZW5kcyBGb3JtQXJyYXkge1xyXG4gIHZhbHVlOiBUW107XHJcbiAgYXQoaW5kZXg6IG51bWJlcik6IEZvcm1Db250cm9sVHlwZVNhZmU8VD4gfCBGb3JtR3JvdXBUeXBlU2FmZTxUPiB7XHJcbiAgICByZXR1cm4gc3VwZXIuYXQoaW5kZXgpIGFzIGFueTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGb3JtQ29udHJvbFR5cGVTYWZlPFQ+IGV4dGVuZHMgRm9ybUNvbnRyb2wge1xyXG4gIHZhbHVlOiBUO1xyXG4gIHZhbHVlQ2hhbmdlczogT2JzZXJ2YWJsZTxUPjtcclxuICBzZXRWYWx1ZShuZXdWYWx1ZTogVCkge1xyXG4gICAgc3VwZXIuc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm9ybUJ1aWxkZXJUeXBlZFNlcnZpY2UgZXh0ZW5kcyBGb3JtQnVpbGRlciB7XHJcbiAgY29udHJvbDxUPihcclxuICAgIGZvcm1TdGF0ZT86IGFueSxcclxuICAgIHZhbGlkYXRvck9yT3B0cz86XHJcbiAgICAgIHwgVmFsaWRhdG9yRm5cclxuICAgICAgfCBWYWxpZGF0b3JGbltdXHJcbiAgICAgIHwgQWJzdHJhY3RDb250cm9sT3B0aW9uc1xyXG4gICAgICB8IG51bGwsXHJcbiAgICBhc3luY1ZhbGlkYXRvcj86IEFzeW5jVmFsaWRhdG9yRm4gfCBBc3luY1ZhbGlkYXRvckZuW10gfCBudWxsXHJcbiAgKTogRm9ybUNvbnRyb2xUeXBlU2FmZTxUPiB7XHJcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuY29udHJvbChcclxuICAgICAgZm9ybVN0YXRlLFxyXG4gICAgICB2YWxpZGF0b3JPck9wdHMsXHJcbiAgICAgIGFzeW5jVmFsaWRhdG9yXHJcbiAgICApIGFzIEZvcm1Db250cm9sVHlwZVNhZmU8VD47XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcbiAgYXJyYXk8VD4oXHJcbiAgICBjb250cm9sc0NvbmZpZzpcclxuICAgICAgfCBGb3JtR3JvdXBDb250cm9sc09mPFQ+W11cclxuICAgICAgfCBGb3JtR3JvdXBUeXBlU2FmZTxUPltdXHJcbiAgICAgIHwgRm9ybUNvbnRyb2xUeXBlU2FmZTxUPltdLFxyXG4gICAgZXh0cmE/OiB7XHJcbiAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICAgIH0gfCBudWxsXHJcbiAgKTogRm9ybUFycmF5VHlwZVNhZmU8VD4ge1xyXG4gICAgY29uc3QgYXJyID0gc3VwZXIuYXJyYXkoY29udHJvbHNDb25maWcsIGV4dHJhKSBhcyBGb3JtQXJyYXlUeXBlU2FmZTxUPjtcclxuXHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH1cclxuICAvLyBvdmVycmlkZSBncm91cCB0byBiZSB0eXBlIHNhZmVcclxuICBncm91cDxUPihcclxuICAgIGNvbnRyb2xzQ29uZmlnOiBGb3JtR3JvdXBDb250cm9sc09mPFQ+LFxyXG4gICAgZXh0cmE/OiB7XHJcbiAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICAgIH0gfCBudWxsXHJcbiAgKTogRm9ybUdyb3VwVHlwZVNhZmU8VD4ge1xyXG4gICAgLypOT1RFIHRoZSByZXR1cm4gRm9ybUdyb3VwVHlwZVNhZmU8VD4gKi9cclxuXHJcbiAgICAvLyBpbnN0YW50aWF0ZSBncm91cCBmcm9tIGFuZ3VsYXIgdHlwZVxyXG4gICAgY29uc3QgZ3IgPSBzdXBlci5ncm91cChjb250cm9sc0NvbmZpZywgZXh0cmEpIGFzIEZvcm1Hcm91cFR5cGVTYWZlPFQ+O1xyXG4gICAgaWYgKGV4dHJhKSB7XHJcbiAgICAgIGdyLmxhYmVsID0gZXh0cmFbJ2xhYmVsJ107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvcGVydHlOYW1lID0gKHByb3BlcnR5RnVuY3Rpb246IEZ1bmN0aW9uKTogc3RyaW5nID0+IHtcclxuICAgICAgLy8gIGh0dHBzOi8vZ2l0aHViLmNvbS9kc2hlcnJldC90cy1uYW1lb2YgLSBoZWxwZWQgbWUgd2l0aCB0aGUgY29kZSBiZWxvdywgVEhBTlghISEhXHJcbiAgICAgIC8vIHByb3BlcnR5RnVuY3Rpb24udG9TdHJpbmcoKSBzYW1wbGUgdmFsdWU6XHJcbiAgICAgIC8vICAgZnVuY3Rpb24oeCkgeyByZXR1cm4geC5oZXJvLmFkZHJlc3MucG9zdGNvZGU7fVxyXG4gICAgICAvLyB3ZSBuZWVkIHRoZSAnaGVyby5hZGRyZXNzLnBvc3Rjb2RlJ1xyXG4gICAgICAvLyBmb3IgZ3IuZ2V0KCdoZXJvLmFkZHJlc3MucG9zdGNvZGUnKSBmdW5jdGlvblxyXG4gICAgICBjb25zdCBwcm9wZXJ0aWVzID0gcHJvcGVydHlGdW5jdGlvblxyXG4gICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgLnNwbGl0KCcuJylcclxuICAgICAgICAuc3BsaWNlKDEpO1xyXG5cclxuICAgICAgY29uc3QgciA9IHByb3BlcnRpZXMuam9pbignLicpO1xyXG4gICAgICByZXR1cm4gcjtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGdyKSB7XHJcbiAgICAgIC8vIGltcGxlbWVudCBnZXRTYWZlIG1ldGhvZFxyXG4gICAgICBnci5nZXRTYWZlID0gKHByb3BlcnR5RnVuY3Rpb246ICh0eXBlVmFsOiBUKSA9PiBhbnkpOiBBYnN0cmFjdENvbnRyb2wgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdldFN0ciA9IGdldFByb3BlcnR5TmFtZShwcm9wZXJ0eUZ1bmN0aW9uKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhnZXRTdHIpO1xyXG4gICAgICAgIGNvbnN0IHAgPSBnci5nZXQoZ2V0U3RyKSBhcyBGb3JtR3JvdXBUeXBlU2FmZTxUPjtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIGltcGxlbWVudCBzZXRDb250cm9sU2FmZVxyXG4gICAgICBnci5zZXRDb250cm9sU2FmZSA9IChcclxuICAgICAgICBwcm9wZXJ0eUZ1bmN0aW9uOiAodHlwZVZhbDogVCkgPT4gYW55LFxyXG4gICAgICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbFxyXG4gICAgICApOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBnZXRTdHIgPSBnZXRQcm9wZXJ0eU5hbWUocHJvcGVydHlGdW5jdGlvbik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZ2V0U3RyKTtcclxuICAgICAgICBnci5zZXRDb250cm9sKGdldFN0ciwgY29udHJvbCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdyO1xyXG4gIH1cclxufVxyXG4iXX0=