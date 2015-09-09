<!-- ___CUSTOMERS____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="customers">Customers</h2>

<section class="text-2 contain">
A customer is a person who has subscribed, purchased, or been given access to your content (collections and/or videos).
</section>

<h3 class="text-2 text--navy text--bold margin-top-xlarge margin-bottom-medium" id="customer-create">Create a Customer</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Create a customer</h5>

> Definiton

```
POST /customers
```

> Example Request

```shell
$ curl -X POST "https://api.vhx.tv/customers" \
  -d name="Space Cat" \
  -d email="spacecat@vhx.tv" \
  -d subscription=https://api.vhx.tv/subscriptions/1 \
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
  "name": "Space Cat",
  "email": "spacecat@vhx.tv",
  "thumbnail": {
    "small": "https://cdn.vhx.tv/assets/thumbnails/default-small.png",
    "medium": "https://cdn.vhx.tv/assets/thumbnails/default-medium.png",
    "large": "https://cdn.vhx.tv/assets/thumbnails/default-large.png"
  },
  "created_at": "2014-02-25T20:19:30Z",
  "updated_at": "2014-02-25T20:19:30Z"
}
```

<section class="text-2 contain margin-bottom-medium">
A customer can be created (or added) to a given subscription, package, or site. For a subscription customer, you are billed per customer / per month. Please <a href="https://vhx.tv/pricing">see our pricing</a> for details.
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
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The customer's name.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">email</strong>
        <span class="text--transparent text-3">string</span>
      </td>
      <td>The customer's email.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">subscription</strong>
        <span class="text--transparent text-3">optional, default is null</span>
      </td>
      <td>The UUID of the subscription you'd like to subscribe the customer to.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">package</strong>
        <span class="text--transparent text-3">options, default is null</span>
      </td>
      <td>The UUID of the packaged you'd like to give the customer access to.</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-retrieve">Retrieve a Customer</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve a customer</h5>

> Definiton

```
GET /customers/:id
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/customers/:id" \
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
  "name": "Space Cat",
  "email": "spacecat@vhx.tv",
  "thumbnail": {
    "small": "https://cdn.vhx.tv/assets/thumbnails/default-small.png",
    "medium": "https://cdn.vhx.tv/assets/thumbnails/default-medium.png",
    "large": "https://cdn.vhx.tv/assets/thumbnails/default-large.png"
  },
  "created_at": "2014-02-25T20:19:30Z",
  "updated_at": "2014-02-25T20:19:30Z"
}
```
<section class="text-2 contain">
  <p>Retrieves an existing customer. You only need to request or supply the UUID that was returned upon customer creation.</p>
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
        <strong class="is-block text--navy">customer</strong>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The UUID for the customer.</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-list">List all Customers</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all customers</h5>

> Definiton

```
GET /customers
```

> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/customers" \
  -d subscription=https://api.vhx.tv/subscriptions/1 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/customers?page=1" },
    "first": { "href": "https://api.vhx.tv/customers" },
    "prev":  { "href": null },
    "next":  { "href": "https://api.vhx.tv/customers?page=2" },
    "last":  { "href": "https://api.vhx.tv/customers?page=5" }
  },
  "count": 100,
  "total": 500,
  "_embedded": {
    "customers": []
  }
}
```

<section class="text-2 contain">
Customers can be listed for a given subscription, package, or site. A paginated result is returned.
</section>