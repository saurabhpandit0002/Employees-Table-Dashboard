import logo from './logo.svg';
import './App.css';
import appbar from './component/appbar';
import MenuAppBar from './component/appbar';

import PersistentDrawerLeft1 from './component/appbar';
import { useTheme } from '@emotion/react';



function App() {
  const theme =useTheme();
  console.log(theme);
 
  return (
   <div
    style={{backgroundColor:"#F8F9FA"}}><PersistentDrawerLeft1/>
  
   </div>
  );
}

export default App;
