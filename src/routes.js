import React from 'react'

// Sub-URL
const NewProduct = React.lazy(() => import('./pages/newProduct/NewProduct'))
const Product = React.lazy(() => import('./pages/product/Product'))



// Buttons


//Forms


// Icons


// Notifications

routes = [
    { path: '/newproduct', name: 'NewProduct', element: NewProduct },
    { path: '/product/:productId', name: 'Product', element: Product },


  ]

  export default routes;