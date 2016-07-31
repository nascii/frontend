import React from 'React';
import Codemirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-dark.css';
import './CodeEditor.css';

require('codemirror/mode/lua/lua.js');

const CodeEditor = ({value, onChange}) => (
  <Codemirror value={value} options={{
    lineNumbers: true,
    mode: 'lua',
    theme: 'base16-dark'
  }} onChange={onChange}/>
);

export default CodeEditor;
