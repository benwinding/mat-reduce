import Quill from 'quill'

function getImport(q, importName) {
  return q.import(importName);
}
const Parchment = getImport(Quill, 'parchment')

class IndentAttributor extends Parchment.Attributor.Style {
  constructor(...args) {
    super(...args)
  }
}
const fontSizes =['1em', '2em', '3em', '4em', '5em', '6em'];
let FontStyle = new IndentAttributor('fontsize', 'font-size', {
  scope: Parchment.Scope.BLOCK,
  whitelist: [...fontSizes, 'normal']
})

const FontSizeStyleText = fontSizes.reduce((acc, fontSize) => {
  return (acc + `
.ql-picker.ql-fontsize > .ql-picker-options > .ql-picker-label[data-value='${fontSize}']::before, 
.ql-picker.ql-fontsize > .ql-picker-options > .ql-picker-item[data-value='${fontSize}']::before {
  font-size: ${fontSize};
}
.ql-fontsize-${fontSize} {
  font-size: ${fontSize};
}
  `);
}, '');

export { FontStyle, FontSizeStyleText }