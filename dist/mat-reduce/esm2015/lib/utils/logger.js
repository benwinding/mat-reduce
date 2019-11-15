/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class SimpleLog {
    /**
     * @param {?} debug
     */
    constructor(debug) {
        this.debug = debug;
    }
    /**
     * @return {?}
     */
    get log() {
        if (!this.debug) {
            return (/**
             * @param {...?} any
             * @return {?}
             */
            (...any) => { });
        }
        /** @type {?} */
        const boundLogFn = console.log.bind(console, 'mat-reduce:: ');
        return boundLogFn;
    }
    /**
     * @return {?}
     */
    get warn() {
        if (!this.debug) {
            return (/**
             * @param {...?} any
             * @return {?}
             */
            (...any) => { });
        }
        /** @type {?} */
        const boundLogFn = console.warn.bind(console, 'mat-reduce:: ');
        return boundLogFn;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SimpleLog.prototype.debug;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXJlZHVjZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sT0FBTyxTQUFTOzs7O0lBQ3BCLFlBQW9CLEtBQWM7UUFBZCxVQUFLLEdBQUwsS0FBSyxDQUFTO0lBQUcsQ0FBQzs7OztJQUV0QyxJQUFXLEdBQUc7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmOzs7O1lBQU8sQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUUsQ0FBQyxFQUFDO1NBQ3ZCOztjQUNLLFVBQVUsR0FBcUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQ25ELE9BQU8sRUFDUCxlQUFlLENBQ2hCO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELElBQVcsSUFBSTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2Y7Ozs7WUFBTyxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRSxDQUFDLEVBQUM7U0FDdkI7O2NBQ0ssVUFBVSxHQUFxQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDcEQsT0FBTyxFQUNQLGVBQWUsQ0FDaEI7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0NBQ0Y7Ozs7OztJQXZCYSwwQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2ltcGxlTG9nIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWJ1ZzogYm9vbGVhbikge31cblxuICBwdWJsaWMgZ2V0IGxvZygpIHtcbiAgICBpZiAoIXRoaXMuZGVidWcpIHtcbiAgICAgIHJldHVybiAoLi4uYW55KSA9PiB7fTtcbiAgICB9XG4gICAgY29uc3QgYm91bmRMb2dGbjogKC4uLmFueSkgPT4gdm9pZCA9IGNvbnNvbGUubG9nLmJpbmQoXG4gICAgICBjb25zb2xlLFxuICAgICAgJ21hdC1yZWR1Y2U6OiAnXG4gICAgKTtcbiAgICByZXR1cm4gYm91bmRMb2dGbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd2FybigpIHtcbiAgICBpZiAoIXRoaXMuZGVidWcpIHtcbiAgICAgIHJldHVybiAoLi4uYW55KSA9PiB7fTtcbiAgICB9XG4gICAgY29uc3QgYm91bmRMb2dGbjogKC4uLmFueSkgPT4gdm9pZCA9IGNvbnNvbGUud2Fybi5iaW5kKFxuICAgICAgY29uc29sZSxcbiAgICAgICdtYXQtcmVkdWNlOjogJ1xuICAgICk7XG4gICAgcmV0dXJuIGJvdW5kTG9nRm47XG4gIH1cbn1cbiJdfQ==