import * as React from 'react';
import IndexHeader from './Header/IndexHeader';
import IndexMain from './Main/IndexMain';
import IndexCategory from './Category/IndexCategory';

export default function ButtonUsage() {
  return <div className="p-3">
    <IndexHeader />
    <IndexMain  />
    <IndexCategory />
  </div>
}
