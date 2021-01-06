<!-- ___PRODUCTS____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="products">Products</h2>

<section class="text-2 contain">
  <p>A product is what represents the premium (subscription or transactional) access to your video content. Access to a product can be given to a customer on a recurring basis (a subscription), expiring (a rental), or indefinite (full purchase).</p>
</section>

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="product-retrieve">Retrieve a Product</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve a product</h5>

> Definiton

```shell
GET /products/:id
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/products/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self":        { "href": "https://api.vhx.tv/products/1" },
    "collections": { "href": "https://api.vhx.tv/collections?product=:href" },
    "customers":   { "href": "https://api.vhx.tv/customers?product=:href" }
  },
  "_embedded": {},
  "id": 1,
  "name": "Subscription NOW",
  "description": "Subscribe to Subscription NOW today!",
  "thumbnail": {},
  "price": {
    "monthly": {
      "cents": 800,
      "currency": "USD",
      "formatted": "$8"
    },
    "yearly": {
      "cents": 6500,
      "currency": "USD",
      "formatted": "$65"
    }
  },
  "is_active": true,
  "series_count": 100,
  "movies_count": 100,
  "playlists_count": 100,
  "created_at": "2014-02-25T20:19:30Z",
  "updated_at": "2014-02-25T20:19:30Z"
}
```
<section class="text-2 contain">
  <p>Retrieves an existing product.</p>
</section>

<table>
  <thead>
    <tr class="text-2">
      <th class="padding-medium nowrap">Arguments</th>
      <th class="padding-medium" width="100%">Description</th>
    </tr>
  </thead>

  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">href</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The <code>href</code> of the product being retrieved.</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="product-list">List all Products</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all products</h5>

> Definiton


```shell
GET /products
```

> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/products" \
  -d query="term" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/products?page=1&query=term" },
    "first": { "href": "https://api.vhx.tv/products?query=term" },
    "prev":  { "href": null },
    "next":  { "href": "https://api.vhx.tv/products?page=2&query=term" },
    "last":  { "href": "https://api.vhx.tv/products?page=5&query=term" }
  },
  "count": 100,
  "total": 500,
  "_embedded": {
    "products": []
  }
}
```

<section class="text-2 contain margin-bottom-medium">
  <p>Products can be listed for your account. A paginated result is returned.</p>
</section>

<table>
  <thead>
    <tr class="text-2">
      <th class="padding-medium nowrap">Arguments</th>
      <th class="padding-medium" width="100%">Description</th>
    </tr>
  </thead>

  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">query</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The query to search and filter the results.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">active</strong>
        <span class="is-block text--transparent text-3">boolean</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>
        Set to <code>true</code> to only returns products that are actively available to customers.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">sort</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The sort to order the results. Options are <code>alphabetical</code>, <code>newest</code>, <code>oldest</code>, or <code>position</code>.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">page</strong>
        <span class="is-block text--transparent text-3">integer</span>
        <span class="text--transparent text-3">optional, default is 1</span>
      </td>
      <td>The page number of the paginated result.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">per_page</strong>
        <span class="is-block text--transparent text-3">integer</span>
        <span class="text--transparent text-3">optional, default is 50</span>
      </td>
      <td>The page size of the paginated result.</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="product-prices-list">List Prices for a Product</h3>
> <h5 class="head-5 text--white margin-bottom-medium">List prices for a product</h5>

> Definition

```shell
GET /products/:id/prices
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/products/1/prices" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "USD": {
    "monthly": {
      "price": 2999,
      "formatted": "$29.99"
    },
    "yearly": {
      "price": 20000,
      "formatted": "$200"
    }
  },
  "SEK": {
    "monthly": {
      "id": 205697,
      "price": 25103,
      "formatted": "251.03 kr"
    },
    "yearly": {
      "id": 46604,
      "price": 957764,
      "formatted": "9,577.64 kr"
    }
  }
}
```

<section class="text-2 contain">
  <p>Lists the prices for a product in all accepted currencies.</p>
  <p>Prices for subscription products will include <code>yearly</code> and <code>monthly</code> attributes for each currency. Prices for non-subscription products will have <code>purchase</code> and <code>rental</code> attributes instead.</p>
</section>
