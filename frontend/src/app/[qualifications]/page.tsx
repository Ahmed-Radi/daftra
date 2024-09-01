import ContentPage from "@/components/ContentPage"
import { ISearchParamProps } from "@/types"

const QualificationsPage = ({ params }: ISearchParamProps) => {
  const { qualifications } = params
  return (
    <ContentPage>{qualifications}</ContentPage>
  )
}

export default QualificationsPage