import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import useIsCollapsed from '@/hooks/use-is-collapsed'
import { LayoutHeader } from '@/components/custom/layout'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'

export default function AppShell() {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed()
  return (
    <div className='relative h-full overflow-hidden bg-background'>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        id='content'
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-56'} h-full`}
      >
        <div className={`relative w-screen h-20 overflow-x-hidden`}>
          <LayoutHeader className='fixed z-10 border-b w-full md:top-0 lg:top-0 left-0 sm:top-20'>
            <div className={`${isCollapsed ? 'md:ml-14' : 'md:ml-56'}`}><Search /></div>
            <div className='ml-auto flex items-center space-x-4'>
              <ThemeSwitch />
              <UserNav />
            </div>
          </LayoutHeader>
        </div>

        <Outlet />
      </main>
    </div>
  )
}
