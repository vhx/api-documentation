<!-- ___PRODUCTS____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="browse">Browse</h2>

<section class="text-2 contain">
  <p></p>
</section>

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="browse-all">List all Browse items</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all Browse items</h5>

> Definition

```shell
GET /browse
```

```ruby
# Not yet available for the Ruby client.
```

```node
// Not yet available for the Node client.
```

```javascript
vhxjs.browse.all();
```

```php
 // Not available for the PHP client
```

> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/browse" \
  -d product="https://api.vhx.tv/products/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
# Not yet available for the Ruby client.
```

```node
// Not yet available for the Node client.
```

```javascript
vhxjs.browse.all({
  product: 'https://api.vhx.tv/products/1'
}, function(err, products) {
   // asynchronously called
});
```

```php
// Not yet available for the PHP client.
```

> Example Response

```json
{
  "_links": {
    "self": {
      "href": "https://api.vhx.tv/browse?product=https%3A%2F%2Fapi.vhx.tv%2Fproducts%2F1"
    },
    "first": {
      "href": "https://api.vhx.tv/browse?product=https%3A%2F%2Fapi.vhx.tv%2Fproducts%2F1"
    },
    "prev": {
      "href": null
    },
    "next": {
      "href": null
    },
    "last": {
      "href": "https://api.vhx.tv/browse?product=https%3A%2F%2Fapi.vhx.tv%2Fproducts%2F1"
    }
  },
  "count": 3,
  "total": 3,
  "_embedded": {
    "items": [
      {
        "_links": {
          "items": {
            "href": "https://api.vhx.tv/collections/1/items?product=https%3A%2F%2Fapi.vhx.tv%2Fproducts%2F1"
          },
          "self": {
            "href": "https://api.vhx.tv/collections/1?product=https%3A%2F%2Fapi.vhx.tv%2Fproducts%2F1"
          },
          "collection_page": {
            "href": "https://subdomain.vhx.tv/collection"
          }
        },
        "name": "Item Name",
        "slug": "Item Slug",
        "items_count": 4,
        "thumbnail": {
          "small": "https://dr56wvhu2c8zo.cloudfront.net/image-small.jpg",
          "medium": "https://dr56wvhu2c8zo.cloudfront.net/image-medium.jpg",
          "large": "https://dr56wvhu2c8zo.cloudfront.net/image-large.jpg",
          "source": "https://dr56wvhu2c8zo.cloudfront.net/image-source.jpg",
          "blurred": "https://dr56wvhu2c8zo.cloudfront.net/image-blurred.jpg",
        }
      }
    ]
  }
}
```

<section class="text-2 contain margin-bottom-medium">
  <p>Retrieves a set of item rows for collections (and categories) in your account catered toward building a easy to browse consumer facing interface. You must specify a product (i.e. a subscription product) parameter to scope the browse retrieval to it.</p>
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
      <td class="nowrap">
        <strong class="is-block text--navy">product</strong>
        <span class="is-block text--transparent text-3">href</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The query to search and filter the results.</td>
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
