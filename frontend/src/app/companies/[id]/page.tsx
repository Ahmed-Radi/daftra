import ContentPage from '@/components/ContentPage'
import { ISearchParamProps } from '@/types'

const CompaniesPage = ({ params, searchParams }: ISearchParamProps) => {
  const { id } = params;

  return (
    <ContentPage>Companies {id}</ContentPage>
  )
}

export default CompaniesPage