export function AddQuillFonts(googleFontList: string[], quillInstance) {
  function getImport(q, importName) {
    return q.import(importName);
  }
  
  // Generate code-friendly font names
  function getFontNameDashes(font) {
    return font.toLowerCase().replace(/\s/g, '-');
  }
  
  // Specify Quill fonts
  const fontList = googleFontList;
  const fontNames = fontList.map((font) => getFontNameDashes(font));
  const fonts = getImport(quillInstance, 'attributors/style/font');
  fonts.whitelist = fontNames;
  quillInstance.register(fonts, true);
  
  // Add fonts to CSS style
  const fontStyles = fontList.reduce((acc, font) => {
    const fontName = getFontNameDashes(font);
    return (acc + `
  .ql-picker.ql-font .ql-picker-label[data-value=${fontName}]::before, 
  .ql-picker.ql-font .ql-picker-item[data-value=${fontName}]::before {
    font-family: ${font}, sans-serif;
    font-size: 1.2em;
  }
  .ql-font-${fontName} {
    font-family: ${font};
  }
    `);
  }, '');
  
  const fontImports = fontList.reduce(
    (acc: string, curFont: string) =>
      acc +
      `@import url('https://fonts.googleapis.com/css?family=${curFont}'); \n`,
    ''
  );
  
  const fontStyleText = `
  ${fontImports}
  
  ${fontStyles}
  `
  
  const fontObjs = fontList.map((f) => ({
    name: f,
    value: getFontNameDashes(f),
  }));  
  return {
    fontStyleText,
    fontObjs,
  }
}

