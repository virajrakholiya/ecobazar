import * as React from 'react';
import IndexHeader from './Header/IndexHeader';
import IndexMain from './Main/IndexMain';
import IndexCategory from './Category/IndexCategory';
import IndexProduct from './Products/IndexProduct';

export default function ButtonUsage() {
  return <div className="p-3">
    <IndexHeader />
    <IndexMain  />
    <IndexCategory />
    <IndexProduct />
  </div>
}
