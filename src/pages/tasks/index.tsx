import { Layout, LayoutBody } from '@/components/custom/layout'
import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import { tasks } from './data/tasks'

export default function Tasks() {
  return (
    <Layout>
      <LayoutBody className='flex flex-col' fixedHeight>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <DataTable data={tasks} columns={columns} />
        </div>
      </LayoutBody>
    </Layout>
  )
}
