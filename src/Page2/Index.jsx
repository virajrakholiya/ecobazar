import React from 'react'
import Product from '../Page2/Product'
import IndexHeader from '../Header/IndexHeader'
import ExtraContent from './ExtraContent'
import ShowCase from './ShowCase'
import IndexFooter from './../Footer/IndexFooter';
function Index() {
  return (
    <div>
       <IndexHeader />
       <Product />
       <ExtraContent />
       <ShowCase />
       <IndexFooter />
    </div>
  )
}

export default Index