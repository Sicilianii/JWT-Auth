import React from 'react';

function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className={'bg-[#E0E5EC] w-full h-full absolute transform translate-x-[-50%] translate-y-[-50%] justify-center items-center left-1/2 top-1/2 flex'}>{children}</div>
    );
}

export default Layout;