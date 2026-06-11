import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex min-h-screen w-[80%] mx-auto'>
            <DashboardSidebar/>
            <div>{children}</div>
        </div>
    );
};

export default DashboardLayout;