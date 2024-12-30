import * as React from 'react';
import IndexHeader from './Header/IndexHeader';
import IndexMain from './Main/IndexMain';
import IndexCategory from './Category/IndexCategory';
import IndexProduct from './Products/IndexProduct';
import IndexTestiomial from './Testiomial/IndexTestiomial';
import IndexNewsLetter from './Footer/IndexFooter';
import Index from './Page2/Index';
export default function ButtonUsage() {
  return <div className="p-3">
    {/* <IndexHeader />
    <IndexMain  />
    <IndexCategory />
    <IndexProduct />
    <IndexTestiomial />
    <IndexNewsLetter /> */}
    <Index />
  </div>
}
