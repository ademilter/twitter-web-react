import React from 'react'

import Layout from '../components/layout'
import Tweet from '../components/tweet'

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Adem ilter"
        slug="ademilter"
        datetime={new Date('2020-08-02')}
        text={`bu eğitim videoların önüne logo ekleyerek sponsor olmak isteyen şirketler katıl butonuna tıklayabilir Right-facing fistLeft-facing fist siz motivasyon sağlayın, sektör daha fazla türkçe içerikle zenginleşsin`}
      />
      <Tweet
        name="Adem ilter"
        slug="ademilter"
        datetime={new Date('2020-08-02')}
        text={`postcss özelinde video çektim ama içinde yok yok :))

babel, ast, sass, ...`}
      />
    </Layout>
  )
}

export default HomePage
