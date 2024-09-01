import ContentPage from '@/components/ContentPage'
import { ISearchParamProps } from '@/types'

const ApplicationsNamePage = ({ params }: ISearchParamProps) => {
  const { name } = params;

  return (
    <ContentPage>Applications {name}</ContentPage>
  )
}

export default ApplicationsNamePage