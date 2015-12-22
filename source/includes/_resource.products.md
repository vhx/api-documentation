<!-- ___PRODUCTS____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="products">Products</h2>

<section class="text-2 contain">
  <p>A product is what holds your premium video content. Access to a product can be given to a customer on a recurring basis (a subscription), expiring (a rental), or indefinite (full purchase).</p>
</section>

<h3 class="text-2 text--navy text--bold margin-top-large margin-bottom-medium" id="product-retrieve">Retrieve a Product</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve a product</h5>

> Definiton

```shell
GET /products/:id
```

```ruby
Vhx::Product.find()
```

```javascript
vhx.products.retrieve();
```

```php
<?php$product = \VHX\Product::retrieve();
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/products/:id" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
product = Vhx::Product.find(15)
```

```javascript
vhx.products.retrieve({
  id: 15
}, function(err, product) {
  // asynchronously called
});
```

```php
<?php$product = \VHX\Product::retrieve(15);
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/products/1" }
  },
  "_embedded": {},
  "id": 1,
  "title": "Subscription NOW",
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
        <strong class="is-block text--navy">id</strong>
        <span class="is-block text--transparent text-3">integer</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The id of the product being retrieved.</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 text--navy text--bold margin-top-large margin-bottom-medium" id="product-list">List all Products</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all products</h5>

> Definiton


```shell
GET /products
```

```ruby
Vhx::Product.list()
```

```javascript
vhx.products.list();
```

```php
<?php$product = \VHX\Product::all();
```

> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/products" \
  -d query="term" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
Vhx::Product.list({
  query: 'term'
})
```

```javascript
vhx.products.list({
  query: 'term'
}, function(err, products) {
   // asynchronously called
});
```

```php
<?php$products = \VHX\Products::all({
  query: 'term'
});
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
        <span class="text--transparent text-3">optional, default is null</span>
      </td>
      <td>The query to search and filter the paginated results.</td>
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
