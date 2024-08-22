import { Outlet } from 'react-router-dom'
import Left from '../Left/Left'
import Center from '../Center/Center'


function MainLayout() {

return (
<>
<div className='main-layout'>
    <div className='left-component'>
        <Left />
    </div>
    <div className='center-component'>
        <Center />
    </div>
    
    <Outlet />
    
    
    
    
    
    
    
    
    </div>    
</>
);
}

export default MainLayout;