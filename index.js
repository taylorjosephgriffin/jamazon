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
  $cardBody.appendChild($cardTitle)
  $cardBody.appendChild($cardBrand)
  $cardBody.appendChild($cardBtn)
  $cardBody.appendChild($cardText)

  return $card
}

function catalog(catalog) {
  const $container = document.createElement('div')
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

function eachDetail(itemId, catalog) {
  for (let i = 0; i < catalog.items.length; i++) {
    if (catalog.items[i].itemId === itemId) {
      return catalog.items[i]
    }
  }
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
  $itemCol.classList.add('col', 'col-xl-9', 'col-lg-4', 'offset-xl-4')
  $cartPrice.classList.add('badge', 'badge-success')
  $cartPrice.setAttribute('style', 'font-size: 20px')
  $itemRow.classList.add('row')
  $imgCol.classList.add('col', 'col-xl-4')
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
  const $checkoutBtn = document.createElement('button')

  let cartTotal = 0

  $cartCont.classList.add('container-fluid')

  $cartRow.classList.add('list-group')
  $cartCol.classList.add('col', 'col-4', 'offset-4')
  $newRow.classList.add('row')
  $cartHead.classList.add('cart-head', 'd-flex', 'justify-content-center')
  $returnBtn.classList.add('btn', 'btn-secondary')
  $checkoutBtn.classList.add('btn', 'btn-warning')

  if (app.cart.items.length === 0) {
    $cartHead.textContent = 'Your cart is empty...'
    $checkoutBtn.classList.add('hidden')
  }
  else {
    $cartHead.textContent = 'cart'
  }
  $returnBtn.textContent = 'continue shopping'
  $checkoutBtn.textContent = 'checkout'

  $cartCont.setAttribute('id', 'cart-item')
  $cartHead.setAttribute('style', 'text-transform: uppercase')
  $totalCont.setAttribute('id', 'total')
  $returnBtn.setAttribute('style', 'float: right')
  $returnBtn.setAttribute('id', 'returncart')
  $checkoutBtn.setAttribute('style', 'float: right')
  $checkoutBtn.setAttribute('id', 'checkout')

  $cartCont.appendChild($cartHead)
  $newRow.appendChild($cartCol)
  $cartCol.appendChild($cartRow)
  $cartCont.appendChild($newRow)
  $cartCol.appendChild($totalCont)
  $totalCont.appendChild($total)
  $totalCont.appendChild($checkoutBtn)
  $totalCont.appendChild($returnBtn)

  for (let i = 0; i < cart.items.length; i++) {
    $cartRow.appendChild(cartItem(app.cart, i))
    cartTotal += app.cart.items[i].price
    $total.textContent = 'Total: $' + cartTotal.toFixed(2)
  }
  return $cartCont
}

function checkout(cart) {
  const $formCont = document.createElement('div')
  const $checkoutHead = document.createElement('h3')
  const $form = document.createElement('form')
  const $emailGroup = document.createElement('div')
  const $emailLabel = document.createElement('label')
  const $emailInput = document.createElement('input')
  const $emailByLine = document.createElement('small')
  const $nameGroup = document.createElement('div')
  const $nameLabel = document.createElement('label')
  const $nameInput = document.createElement('input')
  const $addressGroup = document.createElement('div')
  const $addressLabel = document.createElement('label')
  const $addressInput = document.createElement('input')
  const $addressByLine = document.createElement('small')
  const $creditGroup = document.createElement('div')
  const $creditLabel = document.createElement('label')
  const $creditInput = document.createElement('input')
  const $creditByLine = document.createElement('small')
  const $completeButton = document.createElement('button')
  const $summaryCont = document.createElement('div')
  const $summaryRow = document.createElement('div')
  const $summaryCol = document.createElement('div')
  const $summary = document.createElement('div')
  const $summaryItems = document.createElement('div')

  $formCont.classList.add('container')
  $checkoutHead.classList.add('d-flex', 'justify-content-center')
  $form.classList.add('col', 'col-8', 'offset-2')
  $emailGroup.classList.add('form-group')
  $emailInput.classList.add('form-control')
  $emailByLine.classList.add('form-text', 'text-muted')
  $nameGroup.classList.add('form-group')
  $nameInput.classList.add('form-control')
  $addressGroup.classList.add('form-group')
  $addressInput.classList.add('form-control')
  $addressByLine.classList.add('form-text', 'text-muted')
  $creditGroup.classList.add('form-group')
  $creditInput.classList.add('form-control')
  $creditByLine.classList.add('form-text', 'text-muted')
  $completeButton.classList.add('btn', 'btn-success', 'offset-5')
  $summaryCont.classList.add('container')
  $summaryRow.classList.add('row')
  $summaryCol.classList.add('col', 'col-12')
  $summary.classList.add('summary')
  $summaryItems.classList.add('summary-items')

  $form.setAttribute('id', 'form')
  $form.setAttribute('name', 'checkout-form')
  $emailLabel.setAttribute('for', 'emailInput1')
  $emailInput.setAttribute('type', 'email')
  $emailInput.setAttribute('id', 'emailInput1')
  $emailInput.setAttribute('name', 'emailInput1')
  $emailInput.setAttribute('aria-describedby', 'emailHelp')
  $emailInput.setAttribute('placeholder', 'Enter email')
  $nameLabel.setAttribute('for', 'nameInput1')
  $nameInput.setAttribute('id', 'nameInput1')
  $nameInput.setAttribute('name', 'nameInput1')
  $nameInput.setAttribute('placeholder', 'Enter full name')
  $addressLabel.setAttribute('for', 'addressInput1')
  $addressInput.setAttribute('id', 'addressInput1')
  $addressInput.setAttribute('placeholder', 'Enter address')
  $creditLabel.setAttribute('for', 'creditCardNumber')
  $creditInput.setAttribute('id', 'creditCardNumber')
  $creditInput.setAttribute('placeholder', 'Enter credit card number')
  $completeButton.setAttribute('type', 'submit')
  $completeButton.setAttribute('id', 'complete-button')

  $checkoutHead.textContent = 'CHECKOUT'
  $emailLabel.textContent = 'Email Address'
  $emailByLine.textContent = 'Don\'t worry, your email address is safe with us.'
  $nameLabel.textContent = 'Name'
  $addressLabel.textContent = 'Address'
  $addressByLine.textContent = 'street name and number, city, state, zipcode'
  $creditLabel.textContent = 'Credit Card'
  $creditByLine.textContent = 'We accept Visa, MasterCard and Discover.'
  $completeButton.textContent = 'Complete'
  $summaryItems.textContent = 'Items: x' + app.cart.items.length

  $formCont.appendChild($checkoutHead)
  $formCont.appendChild($form)
  $form.appendChild($emailGroup)
  $emailGroup.appendChild($emailLabel)
  $emailGroup.appendChild($emailInput)
  $emailGroup.appendChild($emailByLine)
  $form.appendChild($nameGroup)
  $nameGroup.appendChild($nameLabel)
  $nameGroup.appendChild($nameInput)
  $form.appendChild($addressGroup)
  $addressGroup.appendChild($addressLabel)
  $addressGroup.appendChild($addressInput)
  $addressGroup.appendChild($addressByLine)
  $form.appendChild($creditGroup)
  $creditGroup.appendChild($creditLabel)
  $creditGroup.appendChild($creditInput)
  $creditGroup.appendChild($creditByLine)
  $form.appendChild($summaryCont)
  $summaryCont.appendChild($summaryRow)
  $summaryRow.appendChild($summaryCol)
  $summaryCol.appendChild($summaryItems)
  $summaryCol.appendChild($summary)
  $form.appendChild($completeButton)

  let total = 0
  for (let i = 0; i < app.cart.items.length; i++) {
    total += app.cart.items[i].price
  }
  $summary.textContent = 'Total: $' + total.toFixed(2)
  return $formCont
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

const $appCatalog = document.querySelector('[data-view="catalog"]')
const $appDetails = document.querySelector('[data-view="details"]')
const $cart = document.querySelector('[data-view="cart"]')
const $appCart = document.querySelector('#cart')
const $siteHead = document.querySelector('.header')
const $form = document.querySelector('form')
const $formCont = document.querySelector('.form-group')
const $checkout = document.querySelector('[data-view="checkout"]')

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
  else if (event.target.getAttribute('id') === 'checkout') {
    app.view = 'checkout'
  }
  renderAll()
})

$siteHead.addEventListener('click', function (event) {
  if (event.target.getAttribute('id') === 'header') {
    app.view = 'catalog'
  }
  renderAll()
})

$checkout.addEventListener('submit', function (event) {
  const $creditInputVal = document.getElementById('creditInput1')
  event.preventDefault()
  // remove '-' from input val
  alert('Success! Your order is being processed and will be sent out shortly.')
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
  else if (app.view === 'checkout') {
    $checkout.innerHTML = ''
    $checkout.appendChild(checkout(app.cart))
  }
  $cartLogo.innerHTML = ''
  $cartLogo.appendChild(cartCount(app.cart))
  showHidden(app.view)
}

renderAll()
