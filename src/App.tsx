import { useEffect, useState } from 'react'
import './App.css'
import { getStores } from './service/fetch'
import HeaderStore from './components/HeaderStore'
import DescriptionStore from './components/DescriptionProduct/DescriptionProduct'
import ListCardsProduct from './components/ListCardsProduct/ListCardsProduct'
import ContactUsSection from './components/ContactUsSection/ContactUsSection'

function App() {

  const [store, setStore] = useState<any>({
    name: '',
    products: [],
    description: '',
    urlVideo: '',
  })

  useEffect(() => {
    getStores().then((res) => {
      console.log("RES", res)
      setStore(res);
    });
  }, [])

  return (
    <div className='container'>
      <HeaderStore
        title={store?.name}
        urlHeader={store?.urlHeader}
      />
      <DescriptionStore 
        description={store?.description}
        urlVideo={store?.urlVideo}
      />
      <ListCardsProduct
        products={store?.products}
      />
      <ContactUsSection />
    </div>
  )
}

export default App
