/* eslint-disable no-unused-vars */
/* global app */

function card(item) {
  let $card = document.createElement('div')
  let $cardBody = document.createElement('div')
  let $cardTitle = document.createElement('h3')
  let $cardBrand = document.createElement('h6')
  let $cardImg = document.createElement('img')
  let $cardText = document.createElement('span')
  let $cardBtn = document.createElement('a')

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
  let $container = document.createElement('div')
  let $headCont = document.createElement('h2')
  let $headLogo = document.createElement('i')
  let $headRow = document.createElement('div')
  let $itemRow = document.createElement('div')

  $headCont.textContent = 'jamazon'
  $headCont.classList.add('col', 'd-flex', 'justify-content-left')
  $container.classList.add('container-fluid')
  $headLogo.classList.add('fas', 'fa-headphones')
  $headRow.classList.add('row')
  $itemRow.classList.add('row')

  $headCont.appendChild($headLogo)
  $headRow.appendChild($headCont)
  $container.appendChild($headRow)
  $container.appendChild($itemRow)

  for (let i = 0; i < catalog.items.length; i++) {
    let $cardCol = document.createElement('div')
    $cardCol.classList.add('card-col', 'col-xl-2', 'col-lg-4', 'col-sm-12', 'col-12')
    $cardCol.appendChild(card(catalog.items[i]))
    $itemRow.appendChild($cardCol)
  }
  return $container
}

function renderCatalog() {
  let $app = document.querySelector('[data-view]')
  $app.appendChild(catalog(app.catalog))
}

function detailTemplate(item) {
  let $detailCont = document.createElement('div')
  let $detailImg = document.createElement('img')
  let $detailName = document.createElement('h1')
  let $detailBrand = document.createElement('h6')
  let $detailDesc = document.createElement('p')
  let $detailDet = document.createElement('p')
  let $detailPrice = document.createElement('span')
  let $detailInfo = document.createElement('div')
  let $imgCont = document.createElement('div')
  let $detailRow = document.createElement('div')

  $detailCont.classList.add('container')
  $detailInfo.classList.add('col', 'col-lg-9')
  $detailRow.classList.add('row')
  $imgCont.classList.add('col', 'col-lg-3')

  $detailImg.setAttribute('src', item.imageUrl)

  $detailName.textContent = item.name
  $detailBrand.textContent = `By ${item.brand}`
  $detailDesc.textContent = item.description
  $detailDet.textContent = item.details
  $detailPrice.textConent = item.price

  $detailImg.classList.add('detail-img', 'd-flex', 'justify-content-start')
  $detailName.classList.add('d-flex', 'justify-content-start')

  $detailCont.appendChild($detailRow)
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

let $app = document.querySelector('[data-view]')

$app.addEventListener('click', function (element) {
  let item = element.target.parentNode.closest('.card')
  let itemId = item.getAttribute('data-item-id')
  if (item) {
    app.view = 'details'
    app.details.item = app.catalog.items[itemId - 1]
  }
})

renderCatalog()
