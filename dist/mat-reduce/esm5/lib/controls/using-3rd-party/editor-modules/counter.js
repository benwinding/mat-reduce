/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import 'quill';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
/**
 * @record
 */
export function QuillCounterConfig() { }
if (false) {
    /** @type {?} */
    QuillCounterConfig.prototype.container;
    /** @type {?} */
    QuillCounterConfig.prototype.units;
}
/**
 * @record
 */
export function QuillInstance() { }
if (false) {
    /** @type {?} */
    QuillInstance.prototype.on;
    /** @type {?} */
    QuillInstance.prototype.getText;
    /** @type {?} */
    QuillInstance.prototype.root;
}
var Counter = /** @class */ (function () {
    function Counter(quill, options) {
        var _this = this;
        this.updateTrigger = new Subject();
        this.quill = quill;
        this.options = options;
        /** @type {?} */
        var container = document.querySelector(this.options.container);
        this.quill.on('text-change', (/**
         * @return {?}
         */
        function () {
            _this.updateTrigger.next();
        }));
        this.updateTrigger.pipe(debounceTime(2000)).subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var length = _this.calculate();
            container.innerHTML = length + ' ' + _this.options.units;
            // console.log('form-html-editor: updating counter =' + container.innerHTML);
        }));
    }
    /**
     * @return {?}
     */
    Counter.prototype.calculate = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var text = this.quill.getText().trim();
        if (this.options.units === 'words') {
            return !text ? 0 : text.split(/\s+/).length;
        }
        if (this.options.units === 'kb') {
            /** @type {?} */
            var html = this.quill.root.innerHTML;
            return Math.round(html.length / 1024);
        }
        return text.length;
    };
    return Counter;
}());
export default Counter;
if (false) {
    /** @type {?} */
    Counter.prototype.quill;
    /** @type {?} */
    Counter.prototype.options;
    /** @type {?} */
    Counter.prototype.updateTrigger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvdXNpbmctM3JkLXBhcnR5L2VkaXRvci1tb2R1bGVzL2NvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFOUMsd0NBR0M7OztJQUZDLHVDQUFrQjs7SUFDbEIsbUNBQWdDOzs7OztBQUdsQyxtQ0FJQzs7O0lBSEMsMkJBQVE7O0lBQ1IsZ0NBQWE7O0lBQ2IsNkJBQVU7O0FBR1o7SUFLRSxpQkFBWSxLQUFLLEVBQUUsT0FBTztRQUExQixpQkFlQztRQWpCRCxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFHNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O1lBRWpCLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBRWhFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQWE7OztRQUFFO1lBQzNCLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQzs7Z0JBQzlDLE1BQU0sR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFO1lBQy9CLFNBQVMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN4RCw2RUFBNkU7UUFDL0UsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsMkJBQVM7OztJQUFUOztZQUNRLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRTtRQUV4QyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTtZQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7O2dCQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUztZQUN0QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7Ozs7SUFqQ0Msd0JBQXFCOztJQUNyQiwwQkFBNEI7O0lBQzVCLGdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncXVpbGwnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUXVpbGxDb3VudGVyQ29uZmlnIHtcclxuICBjb250YWluZXI6IHN0cmluZztcclxuICB1bml0czogJ3dvcmRzJyB8ICdjaGFycycgfCAna2InO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFF1aWxsSW5zdGFuY2Uge1xyXG4gIG9uOiBhbnk7XHJcbiAgZ2V0VGV4dDogYW55O1xyXG4gIHJvb3Q6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciB7XHJcbiAgcXVpbGw6IFF1aWxsSW5zdGFuY2U7XHJcbiAgb3B0aW9uczogUXVpbGxDb3VudGVyQ29uZmlnO1xyXG4gIHVwZGF0ZVRyaWdnZXIgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihxdWlsbCwgb3B0aW9ucykge1xyXG4gICAgdGhpcy5xdWlsbCA9IHF1aWxsO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5jb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMucXVpbGwub24oJ3RleHQtY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVRyaWdnZXIubmV4dCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVUcmlnZ2VyLnBpcGUoZGVib3VuY2VUaW1lKDIwMDApKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmNhbGN1bGF0ZSgpO1xyXG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gbGVuZ3RoICsgJyAnICsgdGhpcy5vcHRpb25zLnVuaXRzO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnZm9ybS1odG1sLWVkaXRvcjogdXBkYXRpbmcgY291bnRlciA9JyArIGNvbnRhaW5lci5pbm5lckhUTUwpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGUoKSB7XHJcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5xdWlsbC5nZXRUZXh0KCkudHJpbSgpO1xyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMudW5pdHMgPT09ICd3b3JkcycpIHtcclxuICAgICAgcmV0dXJuICF0ZXh0ID8gMCA6IHRleHQuc3BsaXQoL1xccysvKS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnVuaXRzID09PSAna2InKSB7XHJcbiAgICAgIGNvbnN0IGh0bWwgPSB0aGlzLnF1aWxsLnJvb3QuaW5uZXJIVE1MO1xyXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChodG1sLmxlbmd0aCAvIDEwMjQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRleHQubGVuZ3RoO1xyXG4gIH1cclxufVxyXG4iXX0=