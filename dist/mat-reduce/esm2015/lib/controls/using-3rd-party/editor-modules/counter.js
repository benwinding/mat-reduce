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
export default class Counter {
    /**
     * @param {?} quill
     * @param {?} options
     */
    constructor(quill, options) {
        this.updateTrigger = new Subject();
        this.quill = quill;
        this.options = options;
        /** @type {?} */
        const container = document.querySelector(this.options.container);
        this.quill.on('text-change', (/**
         * @return {?}
         */
        () => {
            this.updateTrigger.next();
        }));
        this.updateTrigger.pipe(debounceTime(2000)).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const length = this.calculate();
            container.innerHTML = length + ' ' + this.options.units;
            // console.log('form-html-editor: updating counter =' + container.innerHTML);
        }));
    }
    /**
     * @return {?}
     */
    calculate() {
        /** @type {?} */
        const text = this.quill.getText().trim();
        if (this.options.units === 'words') {
            return !text ? 0 : text.split(/\s+/).length;
        }
        if (this.options.units === 'kb') {
            /** @type {?} */
            const html = this.quill.root.innerHTML;
            return Math.round(html.length / 1024);
        }
        return text.length;
    }
}
if (false) {
    /** @type {?} */
    Counter.prototype.quill;
    /** @type {?} */
    Counter.prototype.options;
    /** @type {?} */
    Counter.prototype.updateTrigger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvdXNpbmctM3JkLXBhcnR5L2VkaXRvci1tb2R1bGVzL2NvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFOUMsd0NBR0M7OztJQUZDLHVDQUFrQjs7SUFDbEIsbUNBQWdDOzs7OztBQUdsQyxtQ0FJQzs7O0lBSEMsMkJBQVE7O0lBQ1IsZ0NBQWE7O0lBQ2IsNkJBQVU7O0FBR1osTUFBTSxDQUFDLE9BQU8sT0FBTyxPQUFPOzs7OztJQUsxQixZQUFZLEtBQUssRUFBRSxPQUFPO1FBRjFCLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUc1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7Y0FFakIsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFFaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYTs7O1FBQUUsR0FBRyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7O2tCQUNuRCxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMvQixTQUFTLENBQUMsU0FBUyxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDeEQsNkVBQTZFO1FBQy9FLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFNBQVM7O2NBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFO1FBRXhDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFO1lBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDN0M7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTs7a0JBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Q0FDRjs7O0lBakNDLHdCQUFxQjs7SUFDckIsMEJBQTRCOztJQUM1QixnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3F1aWxsJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFF1aWxsQ291bnRlckNvbmZpZyB7XHJcbiAgY29udGFpbmVyOiBzdHJpbmc7XHJcbiAgdW5pdHM6ICd3b3JkcycgfCAnY2hhcnMnIHwgJ2tiJztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBRdWlsbEluc3RhbmNlIHtcclxuICBvbjogYW55O1xyXG4gIGdldFRleHQ6IGFueTtcclxuICByb290OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIge1xyXG4gIHF1aWxsOiBRdWlsbEluc3RhbmNlO1xyXG4gIG9wdGlvbnM6IFF1aWxsQ291bnRlckNvbmZpZztcclxuICB1cGRhdGVUcmlnZ2VyID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocXVpbGwsIG9wdGlvbnMpIHtcclxuICAgIHRoaXMucXVpbGwgPSBxdWlsbDtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuY29udGFpbmVyKTtcclxuXHJcbiAgICB0aGlzLnF1aWxsLm9uKCd0ZXh0LWNoYW5nZScsICgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVUcmlnZ2VyLm5leHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudXBkYXRlVHJpZ2dlci5waXBlKGRlYm91bmNlVGltZSgyMDAwKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5jYWxjdWxhdGUoKTtcclxuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGxlbmd0aCArICcgJyArIHRoaXMub3B0aW9ucy51bml0cztcclxuICAgICAgLy8gY29uc29sZS5sb2coJ2Zvcm0taHRtbC1lZGl0b3I6IHVwZGF0aW5nIGNvdW50ZXIgPScgKyBjb250YWluZXIuaW5uZXJIVE1MKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlKCkge1xyXG4gICAgY29uc3QgdGV4dCA9IHRoaXMucXVpbGwuZ2V0VGV4dCgpLnRyaW0oKTtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnVuaXRzID09PSAnd29yZHMnKSB7XHJcbiAgICAgIHJldHVybiAhdGV4dCA/IDAgOiB0ZXh0LnNwbGl0KC9cXHMrLykubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy51bml0cyA9PT0gJ2tiJykge1xyXG4gICAgICBjb25zdCBodG1sID0gdGhpcy5xdWlsbC5yb290LmlubmVySFRNTDtcclxuICAgICAgcmV0dXJuIE1hdGgucm91bmQoaHRtbC5sZW5ndGggLyAxMDI0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0Lmxlbmd0aDtcclxuICB9XHJcbn1cclxuIl19