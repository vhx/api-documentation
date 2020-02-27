<!-- ___CUSTOMERS____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="customers">Customers</h2>

<section class="text-2 contain">
  <p>A customer is a person who has been granted access to a product. By having access to the product, they inherently have access to all of its content (videos / collections).</p>
</section>

<h3 class="text-2 head-4 text--navy text--bold margin-top-xlarge margin-bottom-medium" id="customer-create">Create a Customer</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Create a customer</h5>

> Definition

```shell
POST /customers
```

> Example Request

```shell
$ curl -X POST "https://api.vhx.tv/customers" \
  -d name="First Last" \
  -d email="customer@email.com" \
  -d product="https://api.vhx.tv/products/1" \
  -d plan="standard" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/customers/1" }
  },
  "_embedded": {},
  "id": 1,
  "name": "First Last",
  "email": "customer@email.com",
  "created_at": "2014-02-25T20:19:30Z",
  "updated_at": "2014-02-25T20:19:30Z",
  "plan": "standard"
}
```

<section class="text-2 contain margin-bottom-medium">
  A customer can be created (or added) for a given product. For a subscription customer, you are billed per customer / per month. Please <a href="https://www.vhx.tv/pricing" target="_blank">see our pricing</a> for more details.
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
        <strong class="is-block text--navy">name</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The customer's full name (first and last).</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">email</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The customer's email address.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray is-internal">
      <td class="nowrap">
        <strong class="is-block text--navy">password</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The customer's login password.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">product</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The <code>href</code> of the product you'd like to give the customer access to.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray is-internal">
      <td class="nowrap">
        <strong class="is-block text--navy">plan</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional, default is "standard"</span>
      </td>
      <td>
      The customer's plan determines content accessibility. Values can be one of
      the following strings: <code>free</code>, <code>standard</code>.
      See <a href="#videos-update">Update Video</a> for more detail on the types of plans</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-retrieve">Retrieve a Customer</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve a customer</h5>

> Definition

```shell
GET /customers/:id
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/customers/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/customers/1" },
    "watchlist": { "href": "https://api.vhx.tv/customers/1/watchlist" },
    "watching": { "href": "https://api.vhx.tv/customers/1/watching" }
  },
  "_embedded": {},
  "id": 1,
  "name": "First Last",
  "email": "customer@email.com",
  "created_at": "2014-02-25T20:19:30Z",
  "updated_at": "2014-02-25T20:19:30Z",
  "plan": "standard",
  "platform": "web"
}
```

<section class="text-2 contain margin-bottom-medium">
  <p>Retrieves an existing customer. You can optionally specify a product parameter to scope the customer retrieval to it (ie. "Is this customer subscribed to this product?").</p>
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
      <td>The <code>href</code> of the customer being retrieved.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">product</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The <code>href</code> of a product.</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-list">List all Customers</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all customers</h5>

> Definition


```shell
GET /customers
```

> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/customers" \
  -d query="term" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/customers?page=1&query=term" },
    "first": { "href": "https://api.vhx.tv/customers?query=term" },
    "prev":  { "href": null },
    "next":  { "href": "https://api.vhx.tv/customers?page=2&query=term" },
    "last":  { "href": "https://api.vhx.tv/customers?page=5&query=term" }
  },
  "count": 100,
  "total": 500,
  "_embedded": {
    "customers": [
      { customer object }
      { ... }
    ]
  }
}
```

<section class="text-2 contain margin-bottom-medium">
  <p>Customers can be listed for your account or for a given product. A paginated result is returned.</p>
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
        <strong class="is-block text--navy">product</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The <code>href</code> of a product.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">email</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The email address to find in the paginated results.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">query</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The query to search and filter the paginated results.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">sort</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The sort to order the results. Options are <code>newest</code>, <code>oldest</code>, or <code>latest</code>.</td>
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

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-update">Update a Customer</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Update a customer</h5>

> Definition


```shell
PUT /customers/:id
```

> Example Request

```shell
$ curl -X PUT "https://api.vhx.tv/customers/1" \
  -d name="First Last" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/customers/1" }
  },
  "_embedded": {},
  "id": 1,
  "name": "First Last",
  "email": "customer@email.com",
  "created_at": "2014-02-25T20:19:30Z",
  "updated_at": "2014-02-25T20:19:30Z"
}
```

<section class="text-2 contain margin-bottom-medium">
  <p>Updates an existing customer.</p>
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
        <strong class="is-block text--navy">name</strong>
        <span class="text--transparent text-3">string</span>
        <span class="is-block text--transparent text-3">optional</span>
      </td>
      <td>The customer's full name (first and last).</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-add-product">Add a Product</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Add a product</h5>

> Definition

```shell
PUT /customers/:id/products
```

> Example Request

```shell
$ curl -X PUT "https://api.vhx.tv/customers/1/products" \
  -d product="https://api.vhx.tv/products/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

<section class="text-2 contain margin-bottom-medium">
  <p>Adds a product to an existing customer. By adding a product, he or she now has access to all of its contents.</p>
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
      <td>The <code>href</code> of the customer.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">product</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The <code>href</code> of the product.</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-remove-product">Remove a Product</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Remove a product</h5>

> Definition

```shell
DELETE /customers/:id/products
```

> Example Request

```shell
$ curl -X DELETE "https://api.vhx.tv/customers/1/products" \
  -d product="https://api.vhx.tv/products/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

<section class="text-2 contain margin-bottom-medium">
  <p>Removes a product from an existing customer. By removing a product, the customer will no longer have access to its contents.</p>
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
      <td>The <code>href</code> of the customer.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">product</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The <code>href</code> of the product.</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-watching">Retrieve Watching Items</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve Watching Items</h5>

> Definition

```shell
GET /customers/:id/watching
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/customers/1/watching" \
  -H "VHX-Customer: https://api.vhx.tv/customers/1"
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self": {
      "href": "https://api.vhx.tv/customers/1/watching?page=1&per_page=50"
    },
    "first": {
      "href": "https://api.vhx.tv/customers/1/watching"
    },
    "prev": {
      "href": null
    },
    "next": {
      "href": null
    },
    "last": {
      "href": "https://api.vhx.tv/customers/1/watching"
    }
  },
  "count": 0,
  "total": 0,
  "_embedded": {
    "items": {
      { video object }
      { ... }
    }
  }
}
```
<section class="text-2 contain margin-bottom-medium">
  <p>Retrieves the videos currently in progress for a customer.</p>
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
      <td>The <code>href</code> of the customer being retrieved. This needs to be provided in the request url and the <code>VHX-Customer</code> header.</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-retrieve-watchlist">Retrieve Watchlist Items</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve Watchlist Items</h5>

> Definition

```shell
GET /customers/:id/watchlist
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/customers/1/watchlist" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self": {
      "href": "https://api.vhx.tv/customers/1/watchlist?page=1&per_page=50"
    },
    "first": {
      "href": "https://api.vhx.tv/customers/1/watchlist"
    },
    "prev": {
      "href": null
    },
    "next": {
      "href": null
    },
    "last": {
      "href": "https://api.vhx.tv/customers/1/watchlist"
    }
  },
  "count": 0,
  "total": 0,
  "_embedded": {
    "items": [
      { video object }
      { ... }
    ]
  }
}
```

<section class="text-2 contain margin-bottom-medium">
  <p>Retrieves watchlist items for a given customer.</p>
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
        <strong class="is-block text--navy">customer</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The <code>href</code> of the customer.</td>
    </tr>
  </tbody>
</table>


<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-add-item-watchlist">Add Item to Watchlist</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Add Item to Watchlist</h5>

> Definition

```shell
PUT /customers/:id/watchlist
```

> Example Request

```shell
$ curl -X PUT "https://api.vhx.tv/customers/1/watchlist" \
  -d video="http://api.vhx.tv/videos/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

<section class="text-2 contain margin-bottom-medium">
  <p>Adds an item (a video) to a customer's watchlist.</p>
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
        <strong class="is-block text--navy">customer</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The <code>href</code> of the customer.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">video</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The <code>href</code> of the video to be added.</td>
    </tr>
  </tbody>
</table>


<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-remove-item-watchlist">Remove Item from Watchlist</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Remove Item from Watchlist</h5>

> Definition

```shell
DELETE /customers/:id/watchlist
```

> Example Request

```shell
$ curl -X DELETE "https://api.vhx.tv/customers/1/watchlist" \
  -d video="http://api.vhx.tv/videos/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

<section class="text-2 contain margin-bottom-medium">
  <p>Removes an item (a video) from a customer's watchlist.</p>
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
        <strong class="is-block text--navy">customer</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The <code>href</code> of the customer.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">video</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The <code>href</code> of the video to be removed.</td>
    </tr>
  </tbody>
</table>
