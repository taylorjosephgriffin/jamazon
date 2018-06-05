/* eslint-disable no-unused-vars */
/* global app */

function render(item) {
  let $card = document.createElement('div')
  let $cardBody = document.createElement('div')
  let $cardTitle = document.createElement('h3')
  let $cardBrand = document.createElement('h6')
  let $cardImg = document.createElement('img')
  let $cardText = document.createElement('span')
  let $cardBtn = document.createElement('a')

  $card.classList.add('card')
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

function renderCatalog(catalog) {
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
    $cardCol.classList.add('card-col', 'col-xl-2', 'col-lg-4', 'col-sm-6', 'col-12')
    $cardCol.appendChild(render(catalog.items[i]))
    $itemRow.appendChild($cardCol)
  }
  return $container
}

function renderAll() {
  let $app = document.querySelector('[data-view]')
  $app.appendChild(renderCatalog(app.catalog))
}

renderAll()
