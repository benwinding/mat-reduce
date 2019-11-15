/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} Quill
 * @return {?}
 */
export function AddQuillInlineStyles(Quill) {
    // configure Quill to use inline styles so the email's format properly
    /** @type {?} */
    var DirectionAttribute = Quill.import('attributors/attribute/direction');
    Quill.register(DirectionAttribute, true);
    /** @type {?} */
    var AlignClass = Quill.import('attributors/class/align');
    Quill.register(AlignClass, true);
    /** @type {?} */
    var BackgroundClass = Quill.import('attributors/class/background');
    Quill.register(BackgroundClass, true);
    /** @type {?} */
    var ColorClass = Quill.import('attributors/class/color');
    Quill.register(ColorClass, true);
    /** @type {?} */
    var DirectionClass = Quill.import('attributors/class/direction');
    Quill.register(DirectionClass, true);
    /** @type {?} */
    var FontClass = Quill.import('attributors/class/font');
    Quill.register(FontClass, true);
    /** @type {?} */
    var SizeClass = Quill.import('attributors/class/size');
    Quill.register(SizeClass, true);
    /** @type {?} */
    var AlignStyle = Quill.import('attributors/style/align');
    Quill.register(AlignStyle, true);
    /** @type {?} */
    var BackgroundStyle = Quill.import('attributors/style/background');
    Quill.register(BackgroundStyle, true);
    /** @type {?} */
    var ColorStyle = Quill.import('attributors/style/color');
    Quill.register(ColorStyle, true);
    /** @type {?} */
    var DirectionStyle = Quill.import('attributors/style/direction');
    Quill.register(DirectionStyle, true);
    /** @type {?} */
    var FontStyle = Quill.import('attributors/style/font');
    Quill.register(FontStyle, true);
    /** @type {?} */
    var SizeStyle = Quill.import('attributors/style/size');
    Quill.register(SizeStyle, true);
    // create new Quill instance after...
    /** @type {?} */
    var BaseImageFormat = Quill.import('formats/image');
    /** @type {?} */
    var ImageFormatAttributesList = ['alt', 'height', 'width', 'style'];
    var ImageFormat = /** @class */ (function (_super) {
        tslib_1.__extends(ImageFormat, _super);
        function ImageFormat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} domNode
         * @return {?}
         */
        ImageFormat.formats = /**
         * @param {?} domNode
         * @return {?}
         */
        function (domNode) {
            return ImageFormatAttributesList.reduce((/**
             * @param {?} formats
             * @param {?} attribute
             * @return {?}
             */
            function (formats, attribute) {
                if (domNode.hasAttribute(attribute)) {
                    formats[attribute] = domNode.getAttribute(attribute);
                }
                return formats;
            }), {});
        };
        /**
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        ImageFormat.prototype.format = /**
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        function (name, value) {
            if (ImageFormatAttributesList.indexOf(name) > -1) {
                if (value) {
                    this.domNode.setAttribute(name, value);
                }
                else {
                    this.domNode.removeAttribute(name);
                }
            }
            else {
                _super.prototype.format.call(this, name, value);
            }
        };
        return ImageFormat;
    }(BaseImageFormat));
    Quill.register(ImageFormat, true);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXF1aWxsLWlubGluZS1zdHlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3VzaW5nLTNyZC1wYXJ0eS9lZGl0b3ItbW9kdWxlcy9hZGQtcXVpbGwtaW5saW5lLXN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNLFVBQVUsb0JBQW9CLENBQUMsS0FBVTs7O1FBRXZDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsaUNBQWlDLENBQUM7SUFDMUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQzs7UUFFbkMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUM7SUFDMUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7O1FBRTNCLGVBQWUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDO0lBQ3BFLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDOztRQUVoQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztJQUMxRCxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQzs7UUFFM0IsY0FBYyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsNkJBQTZCLENBQUM7SUFDbEUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7O1FBRS9CLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDO0lBQ3hELEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDOztRQUUxQixTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztJQUN4RCxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7UUFFMUIsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUM7SUFDMUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7O1FBRTNCLGVBQWUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDO0lBQ3BFLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDOztRQUVoQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztJQUMxRCxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQzs7UUFFM0IsY0FBYyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsNkJBQTZCLENBQUM7SUFDbEUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7O1FBRS9CLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDO0lBQ3hELEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDOztRQUUxQixTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztJQUN4RCxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7O1FBRzFCLGVBQWUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQzs7UUFDL0MseUJBQXlCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFFckU7UUFBMEIsdUNBQWU7UUFBekM7O1FBb0JBLENBQUM7Ozs7O1FBbkJRLG1CQUFPOzs7O1FBQWQsVUFBZSxPQUFPO1lBQ3BCLE9BQU8seUJBQXlCLENBQUMsTUFBTTs7Ozs7WUFBQyxVQUFDLE9BQU8sRUFBRSxTQUFTO2dCQUN6RCxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ25DLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN0RDtnQkFDRCxPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDOzs7Ozs7UUFDRCw0QkFBTTs7Ozs7UUFBTixVQUFPLElBQUksRUFBRSxLQUFLO1lBQ2hCLElBQUkseUJBQXlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNoRCxJQUFJLEtBQUssRUFBRTtvQkFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3hDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNwQzthQUNGO2lCQUFNO2dCQUNMLGlCQUFNLE1BQU0sWUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDM0I7UUFDSCxDQUFDO1FBQ0gsa0JBQUM7SUFBRCxDQUFDLEFBcEJELENBQTBCLGVBQWUsR0FvQnhDO0lBRUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBBZGRRdWlsbElubGluZVN0eWxlcyhRdWlsbDogYW55KSB7XHJcbiAgLy8gY29uZmlndXJlIFF1aWxsIHRvIHVzZSBpbmxpbmUgc3R5bGVzIHNvIHRoZSBlbWFpbCdzIGZvcm1hdCBwcm9wZXJseVxyXG4gIGNvbnN0IERpcmVjdGlvbkF0dHJpYnV0ZSA9IFF1aWxsLmltcG9ydCgnYXR0cmlidXRvcnMvYXR0cmlidXRlL2RpcmVjdGlvbicpO1xyXG4gIFF1aWxsLnJlZ2lzdGVyKERpcmVjdGlvbkF0dHJpYnV0ZSwgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IEFsaWduQ2xhc3MgPSBRdWlsbC5pbXBvcnQoJ2F0dHJpYnV0b3JzL2NsYXNzL2FsaWduJyk7XHJcbiAgUXVpbGwucmVnaXN0ZXIoQWxpZ25DbGFzcywgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IEJhY2tncm91bmRDbGFzcyA9IFF1aWxsLmltcG9ydCgnYXR0cmlidXRvcnMvY2xhc3MvYmFja2dyb3VuZCcpO1xyXG4gIFF1aWxsLnJlZ2lzdGVyKEJhY2tncm91bmRDbGFzcywgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IENvbG9yQ2xhc3MgPSBRdWlsbC5pbXBvcnQoJ2F0dHJpYnV0b3JzL2NsYXNzL2NvbG9yJyk7XHJcbiAgUXVpbGwucmVnaXN0ZXIoQ29sb3JDbGFzcywgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IERpcmVjdGlvbkNsYXNzID0gUXVpbGwuaW1wb3J0KCdhdHRyaWJ1dG9ycy9jbGFzcy9kaXJlY3Rpb24nKTtcclxuICBRdWlsbC5yZWdpc3RlcihEaXJlY3Rpb25DbGFzcywgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IEZvbnRDbGFzcyA9IFF1aWxsLmltcG9ydCgnYXR0cmlidXRvcnMvY2xhc3MvZm9udCcpO1xyXG4gIFF1aWxsLnJlZ2lzdGVyKEZvbnRDbGFzcywgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFNpemVDbGFzcyA9IFF1aWxsLmltcG9ydCgnYXR0cmlidXRvcnMvY2xhc3Mvc2l6ZScpO1xyXG4gIFF1aWxsLnJlZ2lzdGVyKFNpemVDbGFzcywgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IEFsaWduU3R5bGUgPSBRdWlsbC5pbXBvcnQoJ2F0dHJpYnV0b3JzL3N0eWxlL2FsaWduJyk7XHJcbiAgUXVpbGwucmVnaXN0ZXIoQWxpZ25TdHlsZSwgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IEJhY2tncm91bmRTdHlsZSA9IFF1aWxsLmltcG9ydCgnYXR0cmlidXRvcnMvc3R5bGUvYmFja2dyb3VuZCcpO1xyXG4gIFF1aWxsLnJlZ2lzdGVyKEJhY2tncm91bmRTdHlsZSwgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IENvbG9yU3R5bGUgPSBRdWlsbC5pbXBvcnQoJ2F0dHJpYnV0b3JzL3N0eWxlL2NvbG9yJyk7XHJcbiAgUXVpbGwucmVnaXN0ZXIoQ29sb3JTdHlsZSwgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IERpcmVjdGlvblN0eWxlID0gUXVpbGwuaW1wb3J0KCdhdHRyaWJ1dG9ycy9zdHlsZS9kaXJlY3Rpb24nKTtcclxuICBRdWlsbC5yZWdpc3RlcihEaXJlY3Rpb25TdHlsZSwgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IEZvbnRTdHlsZSA9IFF1aWxsLmltcG9ydCgnYXR0cmlidXRvcnMvc3R5bGUvZm9udCcpO1xyXG4gIFF1aWxsLnJlZ2lzdGVyKEZvbnRTdHlsZSwgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFNpemVTdHlsZSA9IFF1aWxsLmltcG9ydCgnYXR0cmlidXRvcnMvc3R5bGUvc2l6ZScpO1xyXG4gIFF1aWxsLnJlZ2lzdGVyKFNpemVTdHlsZSwgdHJ1ZSk7XHJcbiAgLy8gY3JlYXRlIG5ldyBRdWlsbCBpbnN0YW5jZSBhZnRlci4uLlxyXG5cclxuICBjb25zdCBCYXNlSW1hZ2VGb3JtYXQgPSBRdWlsbC5pbXBvcnQoJ2Zvcm1hdHMvaW1hZ2UnKTtcclxuICBjb25zdCBJbWFnZUZvcm1hdEF0dHJpYnV0ZXNMaXN0ID0gWydhbHQnLCAnaGVpZ2h0JywgJ3dpZHRoJywgJ3N0eWxlJ107XHJcblxyXG4gIGNsYXNzIEltYWdlRm9ybWF0IGV4dGVuZHMgQmFzZUltYWdlRm9ybWF0IHtcclxuICAgIHN0YXRpYyBmb3JtYXRzKGRvbU5vZGUpIHtcclxuICAgICAgcmV0dXJuIEltYWdlRm9ybWF0QXR0cmlidXRlc0xpc3QucmVkdWNlKChmb3JtYXRzLCBhdHRyaWJ1dGUpID0+IHtcclxuICAgICAgICBpZiAoZG9tTm9kZS5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xyXG4gICAgICAgICAgZm9ybWF0c1thdHRyaWJ1dGVdID0gZG9tTm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdHM7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgIH1cclxuICAgIGZvcm1hdChuYW1lLCB2YWx1ZSkge1xyXG4gICAgICBpZiAoSW1hZ2VGb3JtYXRBdHRyaWJ1dGVzTGlzdC5pbmRleE9mKG5hbWUpID4gLTEpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMuZG9tTm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRvbU5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdXBlci5mb3JtYXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBRdWlsbC5yZWdpc3RlcihJbWFnZUZvcm1hdCwgdHJ1ZSk7XHJcbn1cclxuIl19