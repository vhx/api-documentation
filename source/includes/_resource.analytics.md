<!-- ___ANALYTICS____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="analytics">Analytics</h2>

<section class="text-2 contain">
  <p>A resource for retrieving video and customer analytics. Gain insights on how people are watching what content.</p>
</section>

<h3 class="text-2 text--navy text--bold margin-top-xlarge margin-bottom-medium" id="analytics-playback">Playbacks</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Playbacks</h5>

> Definiton

```shell
GET /analytics
```

> Example Request

```shell
$ curl -X GET  "https://api.vhx.tv/analytics" \
  -d type=video \
  -d video=https://api.vhx.tv/videos/1 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self": {
      "href": "http://api.crystal.dev/analytics?action=index&analytic%5Bsite_id%5D=11758&analytic%5Btype%5D=video&analytic%5Bvideo_id%5D=26642&by=&controller=api%2Fanalytics&format=json&from=2016-02-25+12%3A07%3A30+-0500&site_id=11758&to=2016-03-03+12%3A07%3A30+-0500&type=video&video_id=26642"
    },
    "video": {
      "href": "http://api.crystal.dev/videos/26642"
    }
  },
  "to": "2016-03-03",
  "from": "2016-02-25",
  "data": [
    {
      "video_id": "26642",
      "plays": "48",
      "seconds": "39990",
      "finishes": "24"
    }
  ]
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
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">product</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The <code>href</code> of the product you'd like to give the customer access to.</td>
    </tr>
  </tbody>
</table>

<!--  NEXT HERE... -->

<h3 class="text-2 text--navy text--bold margin-top-large margin-bottom-medium" id="analytics-playback">Devices</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Devices</h5>

> Definiton

```shell
GET /customers/:id
```

```ruby
Vhx::Customer.retrieve()
```

```javascript
vhx.customers.retrieve();
```

```php
<?php$customer = \VHX\Customers::retrieve();
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/customers/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
customer = Vhx::Customer.retrieve("https://api.vhx.tv/customers/1")
```

```javascript
vhx.customers.retrieve("https://api.vhx.tv/customers/1", function(err, customer) {
  // asynchronously called
});
```

```php
<?php$customer = \VHX\Customers::retrieve("https://api.vhx.tv/customers/1");
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
  <p>Retrieves playback analytics for a given video for a given timeframe, which defaults to one week ago to today.</p>
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

<h3 class="text-2 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-list">List all Customers</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all customers</h5>

> Definiton


```shell
GET /customers
```

```ruby
Vhx::Customer.all()
```

```javascript
vhx.customers.all();
```

```php
<?php$customer = \VHX\Customers::all();
```

> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/customers" \
  -d query="term" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
Vhx::Customer.all({
  query: 'term'
})
```

```javascript
vhx.customers.all({
  query: 'term'
}, function(err, collections) {
   // asynchronously called
});
```

```php
<?php$customers = \VHX\Customers::all(array(
  'query' => 'term'
));
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
    "customers": []
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
      <td>The sort to order the results. Options are <code>alphabetical</code>, <code>newest</code>, <code>oldest</code>, or <code>latest</code>.</td>
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

<h3 class="text-2 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-update">Update a Customer</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Update a customer</h5>

> Definiton


```shell
PUT /customers/:id
```

```ruby
Vhx::Customer.update()
```

```javascript
vhx.customers.update();
```

```php
<?php$customer = \VHX\Customers::update();
```

> Example Request

```shell
$ curl -X PUT "https://api.vhx.tv/customers/1" \
  -d name="First Last" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
Vhx::Customer.update("https://api.vhx.tv/customers/1", {
  name: 'First Last'
})
```

```javascript
vhx.customers.update("https://api.vhx.tv/customers/1", {
  name: 'First Last'
}, function(err, customer) {
   // asynchronously called
});
```

```php
<?php$customers = \VHX\Customers::update("https://api.vhx.tv/customers/1", array(
  'name' => 'First Last'
));
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
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">email</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The customer's email address.</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-delete">Delete a Customer</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Delete a customer</h5>

> Definiton


```shell
DELETE /customers/:id
```

```ruby
Vhx::Customer.delete()
```

```javascript
vhx.customers.del();
```

```php
<?php\VHX\Customers::delete();
```

> Example Request

```shell
$ curl -X DELETE "https://api.vhx.tv/customers/1" \
  -d product=https://api.vhx.tv/products/1 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
Vhx::Customer.delete("https://api.vhx.tv/customers/1")
```

```javascript
vhx.customers.del("https://api.vhx.tv/customers/1", function(err, response) {
  // asynchronously called
});
```

```php
<?php\VHX\Customers::delete("https://api.vhx.tv/customers/1");
```

<section class="text-2 contain margin-bottom-medium">
  <p>Deletes an existing customer.</p>
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

<h3 class="text-2 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-add-product">Add a Product</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Add a product</h5>

> Definiton


```shell
PUT /customers/:id/products
```

> Example Request

```shell
$ curl -X PUT "https://api.vhx.tv/customers/1/products" \
  -d product=https://api.vhx.tv/products/1 \
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

<h3 class="text-2 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-remove-product">Remove a Product</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Remove a product</h5>

> Definiton


```shell
DELETE /customers/:id/products
```

> Example Request

```shell
$ curl -X DELETE "https://api.vhx.tv/customers/1/products" \
  -d product=https://api.vhx.tv/products/1 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

<section class="text-2 contain margin-bottom-medium">
  <p>Removes a product to an existing customer. By removing a product, the customer will no longer have access to its contents.</p>
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
