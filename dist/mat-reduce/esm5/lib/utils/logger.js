/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SimpleLog = /** @class */ (function () {
    function SimpleLog(debug) {
        this.debug = debug;
    }
    Object.defineProperty(SimpleLog.prototype, "log", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.debug) {
                return (/**
                 * @param {...?} any
                 * @return {?}
                 */
                function () {
                    var any = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        any[_i] = arguments[_i];
                    }
                });
            }
            /** @type {?} */
            var boundLogFn = console.log.bind(console, 'mat-reduce:: ');
            return boundLogFn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleLog.prototype, "warn", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.debug) {
                return (/**
                 * @param {...?} any
                 * @return {?}
                 */
                function () {
                    var any = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        any[_i] = arguments[_i];
                    }
                });
            }
            /** @type {?} */
            var boundLogFn = console.warn.bind(console, 'mat-reduce:: ');
            return boundLogFn;
        },
        enumerable: true,
        configurable: true
    });
    return SimpleLog;
}());
export { SimpleLog };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SimpleLog.prototype.debug;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXJlZHVjZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBQ0UsbUJBQW9CLEtBQWM7UUFBZCxVQUFLLEdBQUwsS0FBSyxDQUFTO0lBQUcsQ0FBQztJQUV0QyxzQkFBVywwQkFBRzs7OztRQUFkO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2Y7Ozs7Z0JBQU87b0JBQUMsYUFBTTt5QkFBTixVQUFNLEVBQU4scUJBQU0sRUFBTixJQUFNO3dCQUFOLHdCQUFNOztnQkFBTSxDQUFDLEVBQUM7YUFDdkI7O2dCQUNLLFVBQVUsR0FBcUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQ25ELE9BQU8sRUFDUCxlQUFlLENBQ2hCO1lBQ0QsT0FBTyxVQUFVLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywyQkFBSTs7OztRQUFmO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2Y7Ozs7Z0JBQU87b0JBQUMsYUFBTTt5QkFBTixVQUFNLEVBQU4scUJBQU0sRUFBTixJQUFNO3dCQUFOLHdCQUFNOztnQkFBTSxDQUFDLEVBQUM7YUFDdkI7O2dCQUNLLFVBQVUsR0FBcUIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3BELE9BQU8sRUFDUCxlQUFlLENBQ2hCO1lBQ0QsT0FBTyxVQUFVLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFDSCxnQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7Ozs7Ozs7SUF2QmEsMEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNpbXBsZUxvZyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVidWc6IGJvb2xlYW4pIHt9XG5cbiAgcHVibGljIGdldCBsb2coKSB7XG4gICAgaWYgKCF0aGlzLmRlYnVnKSB7XG4gICAgICByZXR1cm4gKC4uLmFueSkgPT4ge307XG4gICAgfVxuICAgIGNvbnN0IGJvdW5kTG9nRm46ICguLi5hbnkpID0+IHZvaWQgPSBjb25zb2xlLmxvZy5iaW5kKFxuICAgICAgY29uc29sZSxcbiAgICAgICdtYXQtcmVkdWNlOjogJ1xuICAgICk7XG4gICAgcmV0dXJuIGJvdW5kTG9nRm47XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdhcm4oKSB7XG4gICAgaWYgKCF0aGlzLmRlYnVnKSB7XG4gICAgICByZXR1cm4gKC4uLmFueSkgPT4ge307XG4gICAgfVxuICAgIGNvbnN0IGJvdW5kTG9nRm46ICguLi5hbnkpID0+IHZvaWQgPSBjb25zb2xlLndhcm4uYmluZChcbiAgICAgIGNvbnNvbGUsXG4gICAgICAnbWF0LXJlZHVjZTo6ICdcbiAgICApO1xuICAgIHJldHVybiBib3VuZExvZ0ZuO1xuICB9XG59XG4iXX0=