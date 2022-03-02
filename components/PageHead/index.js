import Head from 'next/head'
import { NextSeo } from 'next-seo';

const PageHead = () =>{
    return(
      <NextSeo
      title="Developer DAO FM 🎧"
      description="A place where you can chill and listen to Lofi music while building cool things!"
      canonical="https://www.developerdaofm.com/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Developer DAO FM 🎧',
        description: 'A place where you can chill and listen to Lofi music while building cool things!',
        images: [
          {
            url: 'https://i.ibb.co/tPLLryx/1.png',
            width: 800,
            height: 600,
            alt: 'Developer DAO FM',
            type: 'image/jpeg',
          },
          {
            url: 'https://i.ibb.co/wdwWkdz/3669469.png',
            width: 900,
            height: 800,
            alt: 'Developer DAO FM',
            type: 'image/jpeg',
          },
          { url: 'https://www.example.ie/og-image-03.jpg' },
          { url: 'https://www.example.ie/og-image-04.jpg' },
        ],
        site_name: 'Developer DAO FM',
      }}
      twitter={{
        handle: 'developer_dao',
        site: 'developerdaofm.com',
        cardType: 'summary_large_image',
      }}
    />

    //   <NextSeo
    //   title="Developer DAO FM 🎧"
    //   description="a place where  you can chill and listen to lofi music"
    // />
    // <title></title>
    // <meta name="description" content="" />
    // <link rel="icon" href="/Frame 2.png" sizes="16x16" />
    )
}
export default PageHead

