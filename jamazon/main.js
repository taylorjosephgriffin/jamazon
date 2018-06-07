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
  $cardBody.classList.add('card-body')
  $cardText.classList.add('card-text', 'd-flex', 'justify-content-center', 'badge', 'badge-pill', 'badge-success')
  $cardText.textContent = `$${item.price}`
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

  $headCont.textContent = 'jamazon'
  $headCont.classList.add('col', 'd-flex', 'justify-content-left')
  $container.classList.add('container-fluid')
  $headLogo.classList.add('fas', 'fa-headphones')
  $headRow.classList.add('row', 'header')
  $itemRow.classList.add('row')

  $headCont.appendChild($headLogo)
  $headRow.appendChild($headCont)
  $container.appendChild($headRow)
  $container.appendChild($itemRow)

  for (let i = 0; i < catalog.items.length; i++) {
    const $cardCol = document.createElement('div')
    $cardCol.classList.add('card-col', 'col-xl-2', 'col-lg-4', 'col-sm-12', 'col-12')
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

  const $header = document.querySelector('.header')

  $detailCont.classList.add('container')
  $detailInfo.classList.add('col', 'col-lg-9')
  $detailRow.classList.add('row')
  $imgCont.classList.add('col', 'col-lg-3')
  $detailImg.classList.add('detail-img', 'd-flex', 'justify-content-start')
  $detailName.classList.add('d-flex', 'justify-content-start')
  $cartBtn.classList.add('btn', 'btn-success', 'd-inline-flex', 'justify-content-around')

  $detailImg.setAttribute('src', item.imageUrl)
  $cartBtn.setAttribute('id', 'addcart')

  $detailName.textContent = item.name
  $detailBrand.textContent = `By ${item.brand}`
  $detailDesc.textContent = item.description
  $detailDet.textContent = item.details
  $detailPrice.textContent = '$' + item.price
  $cartBtn.textContent = 'add to cart'

  $contAll.appendChild($detailRow)
  $detailCont.appendChild($detailRow)
  $detailPrice.appendChild($cartBtn)
  $detailRow.appendChild($imgCont)
  $imgCont.appendChild($detailImg)
  $detailRow.appendChild($detailInfo)
  $detailInfo.appendChild($detailName)
  $detailInfo.appendChild($detailBrand)
  $detailInfo.appendChild($detailDesc)
  $detailInfo.appendChild($detailDet)
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

const $app = document.querySelector('[data-view]')

$app.addEventListener('click', function (element) {
  const item = element.target.parentNode.closest('.card')
  if (item) {
    const itemId = item.getAttribute('data-item-id')
    app.view = 'details'
    app.details.item = app.catalog.items[itemId - 1]
    renderAll()
  }
})

function cartCount(cart) {
  const $countBadge = document.createElement('span')
  const $cartLogo = document.createElement('i')

  $countBadge.classList.add('badge', 'badge-warning')
  $cartLogo.classList.add('fas', 'fa-shopping-cart')

  $countBadge.textContent = app.cart.items.length

  $countBadge.appendChild($cartLogo)

  return $countBadge
}

const $appDetails = document.querySelector('[data-view="details"]')

$appDetails.addEventListener('click', function (element) {
  if (element.target.getAttribute('id', 'addcart')) {
    app.cart.items.push([app.details.item])
  }
  renderAll()
})

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

function renderAll() {
  const $appCatalog = document.querySelector('[data-view="catalog"]')
  const $appDetails = document.querySelector('[data-view="details"]')
  const $cartLogo = document.querySelector('#cart')
  if (app.view === 'catalog') {
    $appCatalog.appendChild(catalog(app.catalog))
  }
  else if (app.view === 'details') {
    $appDetails.innerHTML = ''
    $appDetails.appendChild(detailTemplate(app.details.item))
  }
  $cartLogo.innerHTML = ''
  $cartLogo.appendChild(cartCount(app.cart))
  showHidden(app.view)
}

renderAll()
