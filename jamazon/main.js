/* eslint-disable no-unused-vars */
/* global app */

function card(item) {
  const $card = document.createElement('div')
  const $cardBody = document.createElement('div')
  const $cardTitle = document.createElement('h3')
  const $cardBrand = document.createElement('h6')
  const $cardImg = document.createElement('img')
  const $cardText = document.createElement('span')
  const $cardBtn = document.createElement('a')

  $card.classList.add('card')
  $card.setAttribute('data-item-id', item.itemId)
  $cardImg.classList.add('card-img-top')
  $cardImg.setAttribute('src', item.imageUrl)
  $cardImg.setAttribute('alt', 'Card image cap')
  $cardBody.classList.add('card-body', 'd-flex', 'justify-content-end', 'flex-column')
  $cardText.classList.add('card-text', 'd-flex', 'justify-content-center', 'badge', 'badge-pill', 'badge-success')
  $cardText.textContent = `$${item.price}`
  $cardText.setAttribute('id', 'card-badge')
  $cardTitle.classList.add('card-title', 'd-flex', 'justify-content-center')
  $cardTitle.textContent = item.name
  $cardBrand.classList.add('card-brand', 'd-flex', 'justify-content-center')
  $cardBrand.textContent = `By ${item.brand}`

  $card.appendChild($cardImg)
  $card.appendChild($cardBody)
  $cardBody.appendChild($cardText)
  $cardBody.appendChild($cardTitle)
  $cardBody.appendChild($cardBrand)
  $cardBody.appendChild($cardBtn)

  return $card
}

function catalog(catalog) {
  const $container = document.createElement('div')
  const $headCont = document.createElement('h2')
  const $headLogo = document.createElement('i')
  const $headRow = document.createElement('div')
  const $itemRow = document.createElement('div')

  $container.classList.add('container-fluid')
  $itemRow.classList.add('row')

  $container.appendChild($itemRow)

  for (let i = 0; i < catalog.items.length; i++) {
    const $cardCol = document.createElement('div')
    $cardCol.classList.add('card-col', 'col-xl-3', 'col-lg-4', 'col-sm-12', 'col-12')
    $cardCol.appendChild(card(catalog.items[i]))
    $itemRow.appendChild($cardCol)
  }
  return $container
}

function detailTemplate(item) {
  const $contAll = document.createElement('div')
  const $detailCont = document.createElement('div')
  const $detailImg = document.createElement('img')
  const $detailName = document.createElement('h1')
  const $detailBrand = document.createElement('h6')
  const $detailDesc = document.createElement('p')
  const $detailDet = document.createElement('p')
  const $detailPrice = document.createElement('span')
  const $detailInfo = document.createElement('div')
  const $imgCont = document.createElement('div')
  const $detailRow = document.createElement('div')
  const $cartBtn = document.createElement('button')
  const $returnBtn = document.createElement('button')

  $detailCont.classList.add('container', 'detail-cont')
  $detailInfo.classList.add('col', 'col-lg-9')
  $detailRow.classList.add('row')
  $imgCont.classList.add('col', 'col-lg-3')
  $detailImg.classList.add('detail-img')
  $detailName.classList.add('d-flex', 'justify-content-start')
  $cartBtn.classList.add('btn', 'btn-success')
  $returnBtn.classList.add('btn', 'btn-secondary')
  $detailPrice.classList.add('badge', 'badge-success')
  $detailPrice.setAttribute('id', 'detail-price')

  $detailImg.setAttribute('src', item.imageUrl)
  $cartBtn.setAttribute('id', 'addcart')
  $returnBtn.setAttribute('id', 'return')

  $detailName.textContent = item.name
  $detailBrand.textContent = `By ${item.brand}`
  $detailDesc.textContent = item.description
  $detailDet.textContent = item.details
  $detailPrice.textContent = '$' + item.price
  $cartBtn.textContent = 'add to cart'
  $returnBtn.textContent = 'continue shopping'

  $contAll.appendChild($detailRow)
  $detailCont.appendChild($detailRow)
  $detailRow.appendChild($imgCont)
  $imgCont.appendChild($detailImg)
  $detailRow.appendChild($detailInfo)
  $detailInfo.appendChild($detailName)
  $detailInfo.appendChild($detailBrand)
  $detailInfo.appendChild($detailDesc)
  $detailInfo.appendChild($detailDet)
  $detailCont.appendChild($cartBtn)
  $detailCont.appendChild($returnBtn)
  $detailInfo.appendChild($detailPrice)

  return $detailCont
}

function cartCount(cart) {
  const $countBadge = document.createElement('span')
  const $cartLogo = document.createElement('i')

  $countBadge.classList.add('btn', 'btn-warning')
  $countBadge.setAttribute('id', 'cart-button')
  $cartLogo.classList.add('fas', 'fa-shopping-cart')

  $countBadge.textContent = app.cart.items.length

  $countBadge.appendChild($cartLogo)

  return $countBadge
}

function cartItem(cart, index) {
  const $cartCol = document.createElement('li')
  const $itemCont = document.createElement('div')
  const $itemRow = document.createElement('div')
  const $itemCol = document.createElement('div')
  const $imgRow = document.createElement('div')
  const $imgCol = document.createElement('div')
  const $cartName = document.createElement('h1')
  const $cartBrand = document.createElement('h6')
  const $cartPrice = document.createElement('span')
  const $img = document.createElement('img')

  $img.setAttribute('src', app.cart.items[index].imageUrl)

  $cartCol.classList.add('list-group-item')
  $itemCont.classList.add('container-fluid')
  $itemCol.classList.add('col', 'col-6', 'col-xl-6')
  $cartPrice.classList.add('badge', 'badge-success')
  $cartPrice.setAttribute('style', 'font-size: 20px')
  $itemRow.classList.add('row')
  $imgCol.classList.add('col', 'col-6', 'col-xl-6')
  $img.classList.add('cart-image', 'img-responsive')

  $cartName.textContent = app.cart.items[index].name
  $cartBrand.textContent = app.cart.items[index].brand
  $cartPrice.textContent = '$' + app.cart.items[index].price

  $imgCol.appendChild($img)
  $cartCol.appendChild($imgCol)
  $cartCol.appendChild($itemCol)
  $cartCol.appendChild($itemCont)
  $itemCol.appendChild($cartName)
  $itemCol.appendChild($cartBrand)
  $itemCol.appendChild($cartPrice)

  return $cartCol
}

function cartSummary(cart) {
  const $cartCont = document.createElement('div')
  const $cartRow = document.createElement('ul')
  const $cartCol = document.createElement('div')
  const $newRow = document.createElement('div')
  const $cartHead = document.createElement('h3')
  const $totalCont = document.createElement('div')
  const $total = document.createElement('h3')
  const $returnBtn = document.createElement('button')

  let cartTotal = 0

  $cartCont.classList.add('container-fluid')

  $cartRow.classList.add('list-group')
  $cartCol.classList.add('col', 'col-6', 'offset-3')
  $newRow.classList.add('row')
  $cartHead.classList.add('cart-head', 'd-flex', 'justify-content-center')
  $returnBtn.classList.add('btn', 'btn-secondary')

  $cartHead.textContent = 'cart'
  $returnBtn.textContent = 'continue shopping'

  $cartCont.setAttribute('id', 'cart-item')
  $cartHead.setAttribute('style', 'text-transform: uppercase')
  $totalCont.setAttribute('id', 'total')
  $returnBtn.setAttribute('style', 'float: right')
  $returnBtn.setAttribute('id', 'returncart')

  $cartCont.appendChild($cartHead)
  $newRow.appendChild($cartCol)
  $cartCol.appendChild($cartRow)
  $cartCont.appendChild($newRow)
  $cartCol.appendChild($totalCont)
  $totalCont.appendChild($total)
  $totalCont.appendChild($returnBtn)

  for (let i = 0; i < cart.items.length; i++) {
    $cartRow.appendChild(cartItem(app.cart, i))
    cartTotal += app.cart.items[i].price
    $total.textContent = 'Total: $' + cartTotal.toFixed(2)
  }
  return $cartCont
}

function showHidden(view) {
  const $eachView = document.querySelectorAll('[data-view]')
  $eachView.forEach(function (element) {
    if (element.getAttribute('data-view') !== view) {
      element.classList.add('hidden')
    }
    else {
      element.classList.remove('hidden')
    }
  })
}

function eachDetail(itemId, catalog) {
  for (let i = 0; i < catalog.items.length; i++) {
    if (catalog.items[i].itemId === itemId) {
      return catalog.items[i]
    }
  }
}

const $appCatalog = document.querySelector('[data-view="catalog"]')
const $appDetails = document.querySelector('[data-view="details"]')
const $cart = document.querySelector('[data-view="cart"]')
const $appCart = document.querySelector('#cart')

$appCatalog.addEventListener('click', function (event) {
  const item = event.target.parentNode.closest('.card')
  if (item) {
    let itemId = item.getAttribute('data-item-id')
    app.view = 'details'
    app.details.item = eachDetail(Number(itemId), app.catalog)
    catalog(app.catalog)
    renderAll()
  }
})

$appDetails.addEventListener('click', function (event) {
  if (event.target.getAttribute('id') === 'addcart') {
    app.cart.items.push(app.details.item)
  }
  renderAll()
})

$appDetails.addEventListener('click', function (event) {
  if (event.target.getAttribute('id') === 'return') {
    app.view = 'catalog'
  }
  renderAll()
})

$appCart.addEventListener('click', function (event) {
  if (event.target.getAttribute('id') === 'cart-button') {
    app.view = 'cart'
  }
  renderAll()
})

$cart.addEventListener('click', function (event) {
  if (event.target.getAttribute('id') === 'returncart') {
    app.view = 'catalog'
  }
  renderAll()
})

function renderAll() {
  const $appCatalog = document.querySelector('[data-view="catalog"]')
  const $appDetails = document.querySelector('[data-view="details"]')
  const $cartLogo = document.querySelector('#cart')
  if (app.view === 'catalog') {
    $appCatalog.innerHTML = ''
    $appCatalog.appendChild(catalog(app.catalog))
  }
  else if (app.view === 'details') {
    $appDetails.innerHTML = ''
    $appDetails.appendChild(detailTemplate(app.details.item))
  }
  else if (app.view === 'cart') {
    $cart.innerHTML = ''
    $cart.appendChild(cartSummary(app.cart))
  }
  $cartLogo.innerHTML = ''
  $cartLogo.appendChild(cartCount(app.cart))
  showHidden(app.view)
}

renderAll()
