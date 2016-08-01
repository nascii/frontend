import React from 'React';
import Codemirror from 'react-codemirror';
import Button from 'components/Button';
import CodeTabs from 'containers/CodeTabs';
import Menu from 'components/Menu';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-dark.css';
import styles from './CodeEditor.css';

require('codemirror/mode/lua/lua.js');

const CodeEditor = ({id, value, onChange, onSubmit}) => (
  <div>
    <CodeTabs />
    <Codemirror value={value} options={{
      lineNumbers: true,
      mode: 'lua',
      theme: 'base16-dark'
    }} onChange={onChange}/>
    <div className={styles.submit}>
      <Button onPress={() => onSubmit(id)}/>
    </div>
  </div>
);

export default CodeEditor;
