import { useRouter } from 'next/router'
import { I18nContext } from 'next-i18next'
import { useContext } from 'react'
import axios from 'axios'


export default function test({ data }) {
  const router = useRouter();
  const { locale } = router;
  return (

    <div>
      {data.map((data, item) => (
        <div>
          {data.cat.map(data => <img src={data.code} />)}
        </div>
      ))}
    </div>
  )
}



export async function getServerSideProps() {
  // Call external API from here directly
  const response = await axios.get('http://127.0.0.1:8000/api/project');
  const data = response.data
  console.log(data)

  return {
    props: { data: data },
  }
}
