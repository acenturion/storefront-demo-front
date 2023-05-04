import { useEffect, useState } from 'react'
import './App.css'
import { getStores } from './service/fetch'
import HeaderStore from './components/HeaderStore'
import CardProduct from './components/CardProduct/CardProduct'
import DescriptionStore from './components/DescriptionProduct/DescriptionProduct'

function App() {

  const [store, setStore] = useState({
    name: '',
    products: [],
    description: '',
    urlVideo: '',
  })

  useEffect(() => {
    getStores().then(res => {
      console.log("RES", res)
      setStore(res);
    });
  }, [])

  return (
    <div className='container'>
      <HeaderStore
        title={store?.name}
      />
      <DescriptionStore
        description={store?.description}
        urlVideo={store?.urlVideo}
      />
      <CardProduct
        products={store?.products}
      />
    </div>
  )
}

export default App
