import React, { useContext, useState } from 'react';
/* import {
  DesktopOutlined,
  UserOutlined,
  PlusCircleOutlined,
  DashboardOutlined,
} from '@ant-design/icons'; */
import { Layout, Menu } from 'antd';
import { useLocation } from 'react-router-dom';
// import { Link, useLocation } from 'react-router-dom';
import { LoginContextapi } from '../Components/Context/LoginContextapi';

const { Sider } = Layout;
/* function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
} */

// const items = [
//   getItem(<Link to="/">Dashboard</Link>, "1", <DashboardOutlined />),
//   getItem(<Link to="/courses">Courses</Link>, '2', <DesktopOutlined />),
//   getItem(<Link to="/assignments">Assignments</Link>, '3', <UserOutlined />),
// ];


// if (localStorage.getItem('isAdmin') === 'true') items.push(getItem(<Link to="/editContent">Add / Modify</Link>, '4', <PlusCircleOutlined />));

const SideMenu = () => {
  const {items} =useContext(LoginContextapi);
  const [collapsed, setCollapsed] = useState(false);
  function onSelect(setValue){
    return setValue;
  }
  /* Start - Hightlight sidemenu
Requirement: To change sidebar highlight
Credits: 
  https://reactrouter.com/en/6.25.1/hooks/use-location

1. uselocation hook to retrieve the active path or URL
2. using array method 'map()' on the 'items' array (This array is a list of objects that contains sidemenu items)
3. Arrow function inside map method:
    - 'item' is used as a parameter in arrow function to store current list.
      Ex:items = [object1, object2,...., object-n] | item = object1 (or) item = object2 (or) item = object-n based on the iteration.
    - get the path or route assigned to the sidemenu item using 'item.label.props.to'
    - compare this path with the path obtained from the uselocation hook and if it is 'true' then add new key-value pair
      i.e., className: 'ant-menu-item-selected' >> since all the selected sidemenu items are appended with this class by default. But here we are using this for the same purpose but while path is mannully changed on the url
        else className: ''
    - Expand the 'item' object and include the 'className' property of sider into it.

    map method example:
    const numbers = [1, 2, 3, 4];
    const squares = numbers.map(number => number * number);
    console.log(squares); // Output: [1, 4, 9, 16]
 */

  const location = useLocation();
  const renderMenuItems = items.map((item) => {
    var locationValidate
    const path = item.label.props.to;
    const pathIndex = location.pathname.lastIndexOf('/'); 
    /* The above code is to check for subpath like 'http://localhost:3000/editContent/editAssignment'
      In this the index of '/' after editContent is found

      If there is no subpath like 'http://localhost:3000/editContent'
      Then the pathIndex value will be 0
    */
    if (pathIndex !== 0) {
      // The parent path is found and validation is done
      var parentPath = location.pathname.slice(0, pathIndex);
      locationValidate = parentPath === path;
    }
    // If there is no subpath then the validation is diretly done
    else locationValidate = location.pathname === path;

    /* The true/false value in the 'locationValidate' is sent to onSelect function that only returns what is sent as parameter to it.
      This is then used in the 'selectedKeys' api parameter of the menu to make the active sidemenu component selected.
    */
    onSelect(locationValidate);
    return {
      ...item,
      className: locationValidate ? 'ant-menu-item-selected' : ''
    };
  });
  // End - Highlight sidemenu
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Menu
        theme="dark"
        // defaultSelectedKeys={['1']} 
        selectedKeys={onSelect}
        mode="inline"
        items={renderMenuItems} />
    </Sider>
  );
};
export default SideMenu;