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
  <p>
    A customer can be created (or added) for a given product. For a subscription customer, you are billed per customer / per month. Please <a href="https://www.vhx.tv/pricing" target="_blank">see our pricing</a> for more details.
  </p>
  <p>
    <strong>This endpoint enforces a rate limit of 5 requests per second.</strong>
  </p>
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
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">product</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The <code>href</code> of the product you'd like to give the customer access to.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">plan</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional, default is "standard"</span>
      </td>
      <td>
        The customer's plan determines content accessibility. Values can be one of the following strings: <code>free</code>, <code>standard</code>.
        <br><br>
        This should be set depending on your product type. Use <code>free</code> if you are using subscription that is free with registration. In any other case, you should use <code>standard</code>.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">expires_in</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>
        This parameter is used for letting our system know when a user should lose access. This can not be updated so we do not recommend using this for managing renewals as it could lead to service interruptions for your customers.
        <br><br>
        Valid formats are a number followed by a unit of time. For example, <code>3-months</code>, <code>1-years</code>, <code>5-weeks</code>, <code>7-days</code>.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">send_email</strong>
        <span class="is-block text--transparent text-3">integer</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>
        Set this to <code>1</code> if you would like our system to send the customer an email notifying them that they now have access to the product.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">is_rental</strong>
        <span class="is-block text--transparent text-3">integer</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>
        Set this to <code>1</code> to indicate this customer only has rental access to this product. Pass in an <code>expires_in</code> param to set an expiration time as well.
      </td>
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

> <div class="highlight shell text"><p>the _embedded object contains a browse_url that can be used to authenticate a customer session.</p></div>

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
      <td>The query to search and filter the paginated results. By default filters for customers with status of <code>enabled</code> (subscribed). The status query param should be explicitly set in order to include customers that are not <code>enabled</code>. See status below.</td>
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
        <strong class="is-block text--navy">status</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>
        The status indicates the subscription status of the customer. Options are <code>enabled</code>, <code>disabled</code>, <code>cancelled</code>, <code>refunded</code>, <code>expired</code>, <code>paused</code>, or <code>all</code> (includes all statuses).
      </td>
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
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">plan</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional, default is "standard"</span>
      </td>
      <td>
        The customer's plan determines content accessibility. Values can be one of
        the following strings: <code>free</code>, <code>standard</code>.
        <br><br>
        This should be set depending on your product type. Use <code>free</code> if you are using subscription that is free with registration. In any other case, you should use <code>standard</code>.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">is_rental</strong>
        <span class="is-block text--transparent text-3">integer</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>
        Set this to <code>1</code> to indicate this customer only has rental access to this product.
      </td>
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
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">plan</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional, default is "standard"</span>
      </td>
      <td>
        This is only needed if a customer has both <code>standard</code> and <code>free</code> access. Pass in whichever you would like to remove first. If you want to remove both, do one before the other.
      </td>
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
  -H "VHX-Customer: https://api.vhx.tv/customers/1" \
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
      <td>The <code>href</code> of the customer being retrieved must be passed in via the <code>VHX-Customer</code> header.</td>
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
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">show_all</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>
        Set to <code>true</code> if you want collections returned in the results.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">source_id</strong>
        <span class="is-block text--transparent text-3">integer</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>
        The ID of any collection or video if you want to return only that item specifically.
      </td>
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
