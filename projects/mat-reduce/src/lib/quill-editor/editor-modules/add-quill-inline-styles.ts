function getImport(q, importName) {
  return q.import(importName);
}

export function AddQuillInlineStyles(Quill: any) {
  // configure Quill to use inline styles so the email's format properly
  const DirectionAttribute = getImport(Quill, 'attributors/attribute/direction');
  Quill.register(DirectionAttribute, true);

  const AlignClass = getImport(Quill, 'attributors/class/align');
  Quill.register(AlignClass, true);

  const BackgroundClass = getImport(Quill, 'attributors/class/background');
  Quill.register(BackgroundClass, true);

  const ColorClass = getImport(Quill, 'attributors/class/color');
  Quill.register(ColorClass, true);

  const DirectionClass = getImport(Quill, 'attributors/class/direction');
  Quill.register(DirectionClass, true);

  const FontClass = getImport(Quill, 'attributors/class/font');
  Quill.register(FontClass, true);

  const SizeClass = getImport(Quill, 'attributors/class/size');
  Quill.register(SizeClass, true);

  const AlignStyle = getImport(Quill, 'attributors/style/align');
  Quill.register(AlignStyle, true);

  const BackgroundStyle = getImport(Quill, 'attributors/style/background');
  Quill.register(BackgroundStyle, true);

  const ColorStyle = getImport(Quill, 'attributors/style/color');
  Quill.register(ColorStyle, true);

  const DirectionStyle = getImport(Quill, 'attributors/style/direction');
  Quill.register(DirectionStyle, true);

  const FontStyle = getImport(Quill, 'attributors/style/font');
  Quill.register(FontStyle, true);

  const SizeStyle = getImport(Quill, 'attributors/style/size');
  Quill.register(SizeStyle, true);
  // create new Quill instance after...

  const BaseImageFormat = getImport(Quill, 'formats/image');
  const ImageFormatAttributesList = ['alt', 'height', 'width', 'style'];

  class ImageFormat extends BaseImageFormat {
    static formats(domNode) {
      return ImageFormatAttributesList.reduce((formats, attribute) => {
        if (domNode.hasAttribute(attribute)) {
          formats[attribute] = domNode.getAttribute(attribute);
        }
        return formats;
      }, {});
    }
    format(name, value) {
      if (ImageFormatAttributesList.indexOf(name) > -1) {
        if (value) {
          this.domNode.setAttribute(name, value);
        } else {
          this.domNode.removeAttribute(name);
        }
      } else {
        super.format(name, value);
      }
    }
  }

  Quill.register(ImageFormat, true);
}
