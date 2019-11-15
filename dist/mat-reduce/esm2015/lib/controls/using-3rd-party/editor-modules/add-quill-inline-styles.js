/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} Quill
 * @return {?}
 */
export function AddQuillInlineStyles(Quill) {
    // configure Quill to use inline styles so the email's format properly
    /** @type {?} */
    const DirectionAttribute = Quill.import('attributors/attribute/direction');
    Quill.register(DirectionAttribute, true);
    /** @type {?} */
    const AlignClass = Quill.import('attributors/class/align');
    Quill.register(AlignClass, true);
    /** @type {?} */
    const BackgroundClass = Quill.import('attributors/class/background');
    Quill.register(BackgroundClass, true);
    /** @type {?} */
    const ColorClass = Quill.import('attributors/class/color');
    Quill.register(ColorClass, true);
    /** @type {?} */
    const DirectionClass = Quill.import('attributors/class/direction');
    Quill.register(DirectionClass, true);
    /** @type {?} */
    const FontClass = Quill.import('attributors/class/font');
    Quill.register(FontClass, true);
    /** @type {?} */
    const SizeClass = Quill.import('attributors/class/size');
    Quill.register(SizeClass, true);
    /** @type {?} */
    const AlignStyle = Quill.import('attributors/style/align');
    Quill.register(AlignStyle, true);
    /** @type {?} */
    const BackgroundStyle = Quill.import('attributors/style/background');
    Quill.register(BackgroundStyle, true);
    /** @type {?} */
    const ColorStyle = Quill.import('attributors/style/color');
    Quill.register(ColorStyle, true);
    /** @type {?} */
    const DirectionStyle = Quill.import('attributors/style/direction');
    Quill.register(DirectionStyle, true);
    /** @type {?} */
    const FontStyle = Quill.import('attributors/style/font');
    Quill.register(FontStyle, true);
    /** @type {?} */
    const SizeStyle = Quill.import('attributors/style/size');
    Quill.register(SizeStyle, true);
    // create new Quill instance after...
    /** @type {?} */
    const BaseImageFormat = Quill.import('formats/image');
    /** @type {?} */
    const ImageFormatAttributesList = ['alt', 'height', 'width', 'style'];
    class ImageFormat extends BaseImageFormat {
        /**
         * @param {?} domNode
         * @return {?}
         */
        static formats(domNode) {
            return ImageFormatAttributesList.reduce((/**
             * @param {?} formats
             * @param {?} attribute
             * @return {?}
             */
            (formats, attribute) => {
                if (domNode.hasAttribute(attribute)) {
                    formats[attribute] = domNode.getAttribute(attribute);
                }
                return formats;
            }), {});
        }
        /**
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        format(name, value) {
            if (ImageFormatAttributesList.indexOf(name) > -1) {
                if (value) {
                    this.domNode.setAttribute(name, value);
                }
                else {
                    this.domNode.removeAttribute(name);
                }
            }
            else {
                super.format(name, value);
            }
        }
    }
    Quill.register(ImageFormat, true);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXF1aWxsLWlubGluZS1zdHlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3VzaW5nLTNyZC1wYXJ0eS9lZGl0b3ItbW9kdWxlcy9hZGQtcXVpbGwtaW5saW5lLXN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxLQUFVOzs7VUFFdkMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQztJQUMxRSxLQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDOztVQUVuQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztJQUMxRCxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQzs7VUFFM0IsZUFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUM7SUFDcEUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7O1VBRWhDLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDO0lBQzFELEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDOztVQUUzQixjQUFjLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQztJQUNsRSxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7VUFFL0IsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUM7SUFDeEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7O1VBRTFCLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDO0lBQ3hELEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDOztVQUUxQixVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztJQUMxRCxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQzs7VUFFM0IsZUFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUM7SUFDcEUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7O1VBRWhDLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDO0lBQzFELEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDOztVQUUzQixjQUFjLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQztJQUNsRSxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7VUFFL0IsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUM7SUFDeEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7O1VBRTFCLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDO0lBQ3hELEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDOzs7VUFHMUIsZUFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDOztVQUMvQyx5QkFBeUIsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUVyRSxNQUFNLFdBQVksU0FBUSxlQUFlOzs7OztRQUN2QyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU87WUFDcEIsT0FBTyx5QkFBeUIsQ0FBQyxNQUFNOzs7OztZQUFDLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFO2dCQUM3RCxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ25DLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN0RDtnQkFDRCxPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDOzs7Ozs7UUFDRCxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUs7WUFDaEIsSUFBSSx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hELElBQUksS0FBSyxFQUFFO29CQUNULElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDeEM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3BDO2FBQ0Y7aUJBQU07Z0JBQ0wsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDM0I7UUFDSCxDQUFDO0tBQ0Y7SUFFRCxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIEFkZFF1aWxsSW5saW5lU3R5bGVzKFF1aWxsOiBhbnkpIHtcclxuICAvLyBjb25maWd1cmUgUXVpbGwgdG8gdXNlIGlubGluZSBzdHlsZXMgc28gdGhlIGVtYWlsJ3MgZm9ybWF0IHByb3Blcmx5XHJcbiAgY29uc3QgRGlyZWN0aW9uQXR0cmlidXRlID0gUXVpbGwuaW1wb3J0KCdhdHRyaWJ1dG9ycy9hdHRyaWJ1dGUvZGlyZWN0aW9uJyk7XHJcbiAgUXVpbGwucmVnaXN0ZXIoRGlyZWN0aW9uQXR0cmlidXRlLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgQWxpZ25DbGFzcyA9IFF1aWxsLmltcG9ydCgnYXR0cmlidXRvcnMvY2xhc3MvYWxpZ24nKTtcclxuICBRdWlsbC5yZWdpc3RlcihBbGlnbkNsYXNzLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgQmFja2dyb3VuZENsYXNzID0gUXVpbGwuaW1wb3J0KCdhdHRyaWJ1dG9ycy9jbGFzcy9iYWNrZ3JvdW5kJyk7XHJcbiAgUXVpbGwucmVnaXN0ZXIoQmFja2dyb3VuZENsYXNzLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgQ29sb3JDbGFzcyA9IFF1aWxsLmltcG9ydCgnYXR0cmlidXRvcnMvY2xhc3MvY29sb3InKTtcclxuICBRdWlsbC5yZWdpc3RlcihDb2xvckNsYXNzLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgRGlyZWN0aW9uQ2xhc3MgPSBRdWlsbC5pbXBvcnQoJ2F0dHJpYnV0b3JzL2NsYXNzL2RpcmVjdGlvbicpO1xyXG4gIFF1aWxsLnJlZ2lzdGVyKERpcmVjdGlvbkNsYXNzLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgRm9udENsYXNzID0gUXVpbGwuaW1wb3J0KCdhdHRyaWJ1dG9ycy9jbGFzcy9mb250Jyk7XHJcbiAgUXVpbGwucmVnaXN0ZXIoRm9udENsYXNzLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgU2l6ZUNsYXNzID0gUXVpbGwuaW1wb3J0KCdhdHRyaWJ1dG9ycy9jbGFzcy9zaXplJyk7XHJcbiAgUXVpbGwucmVnaXN0ZXIoU2l6ZUNsYXNzLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgQWxpZ25TdHlsZSA9IFF1aWxsLmltcG9ydCgnYXR0cmlidXRvcnMvc3R5bGUvYWxpZ24nKTtcclxuICBRdWlsbC5yZWdpc3RlcihBbGlnblN0eWxlLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgQmFja2dyb3VuZFN0eWxlID0gUXVpbGwuaW1wb3J0KCdhdHRyaWJ1dG9ycy9zdHlsZS9iYWNrZ3JvdW5kJyk7XHJcbiAgUXVpbGwucmVnaXN0ZXIoQmFja2dyb3VuZFN0eWxlLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgQ29sb3JTdHlsZSA9IFF1aWxsLmltcG9ydCgnYXR0cmlidXRvcnMvc3R5bGUvY29sb3InKTtcclxuICBRdWlsbC5yZWdpc3RlcihDb2xvclN0eWxlLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgRGlyZWN0aW9uU3R5bGUgPSBRdWlsbC5pbXBvcnQoJ2F0dHJpYnV0b3JzL3N0eWxlL2RpcmVjdGlvbicpO1xyXG4gIFF1aWxsLnJlZ2lzdGVyKERpcmVjdGlvblN0eWxlLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgRm9udFN0eWxlID0gUXVpbGwuaW1wb3J0KCdhdHRyaWJ1dG9ycy9zdHlsZS9mb250Jyk7XHJcbiAgUXVpbGwucmVnaXN0ZXIoRm9udFN0eWxlLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgU2l6ZVN0eWxlID0gUXVpbGwuaW1wb3J0KCdhdHRyaWJ1dG9ycy9zdHlsZS9zaXplJyk7XHJcbiAgUXVpbGwucmVnaXN0ZXIoU2l6ZVN0eWxlLCB0cnVlKTtcclxuICAvLyBjcmVhdGUgbmV3IFF1aWxsIGluc3RhbmNlIGFmdGVyLi4uXHJcblxyXG4gIGNvbnN0IEJhc2VJbWFnZUZvcm1hdCA9IFF1aWxsLmltcG9ydCgnZm9ybWF0cy9pbWFnZScpO1xyXG4gIGNvbnN0IEltYWdlRm9ybWF0QXR0cmlidXRlc0xpc3QgPSBbJ2FsdCcsICdoZWlnaHQnLCAnd2lkdGgnLCAnc3R5bGUnXTtcclxuXHJcbiAgY2xhc3MgSW1hZ2VGb3JtYXQgZXh0ZW5kcyBCYXNlSW1hZ2VGb3JtYXQge1xyXG4gICAgc3RhdGljIGZvcm1hdHMoZG9tTm9kZSkge1xyXG4gICAgICByZXR1cm4gSW1hZ2VGb3JtYXRBdHRyaWJ1dGVzTGlzdC5yZWR1Y2UoKGZvcm1hdHMsIGF0dHJpYnV0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChkb21Ob2RlLmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XHJcbiAgICAgICAgICBmb3JtYXRzW2F0dHJpYnV0ZV0gPSBkb21Ob2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm9ybWF0cztcclxuICAgICAgfSwge30pO1xyXG4gICAgfVxyXG4gICAgZm9ybWF0KG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgIGlmIChJbWFnZUZvcm1hdEF0dHJpYnV0ZXNMaXN0LmluZGV4T2YobmFtZSkgPiAtMSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5kb21Ob2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZG9tTm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN1cGVyLmZvcm1hdChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIFF1aWxsLnJlZ2lzdGVyKEltYWdlRm9ybWF0LCB0cnVlKTtcclxufVxyXG4iXX0=