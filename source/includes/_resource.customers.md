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

```ruby
Vhx::Customer.create()
```

```node
vhx.customers.create();
```

```javascript
// Not available for client-side requests.
```

```php
<?php$customer = \VHX\Customers::create();
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

```ruby
customer = Vhx::Customer.create({
  name: 'First Last',
  email: 'customer@email.com',
  product: 'https://api.vhx.tv/products/1',
  plan: 'standard'
})
```

```node
vhx.customers.create({
  name: 'First Last',
  email: 'customer@email.com',
  product: 'https://api.vhx.tv/products/1',
  plan: 'standard'
}, function(err, customer) {
  // asynchronously called
});
```

```javascript
// Not available for client-side requests.
```

```php
<?php$customer = \VHX\Customers::create(array(
  'name' => 'First Last',
  'email' => 'customer@email.com',
  'product' => 'https://api.vhx.tv/products/1',
  'plan' => 'standard'
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
        <strong class="is-block text--navy">billing</strong>
        <span class="is-block text--transparent text-3">object</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>Billing parameters for <a href="/in-app-purchases">In-App Purchases</a> for the Apple, Google, and Roku platforms.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">plan</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>
      The tier of content the customer will be able to access. Values can be one of
      the following strings: `free`, `standard`. 
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

```ruby
Vhx::Customer.retrieve()
```

```node
vhx.customers.retrieve();
```

```javascript
vhxjs.customers.retrieve();
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

```node
vhx.customers.retrieve("https://api.vhx.tv/customers/1", function(err, customer) {
  // asynchronously called
});
```

```javascript
vhxjs.customers.retrieve("https://api.vhx.tv/customers/1", function(err, customer) {
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
  "plan": "standard"
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

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium is-internal" id="customer-find-by-billing">Retrieve with In-App Purchase billing data</h3>

> <h5 class="head-5 text--white margin-bottom-medium is-internal">Retrieve with In-App Purchase billing data</h5>

> Definition

```shell
POST /customers/find_by_billing
```

```ruby
```

```node
```

```javascript
```

```php
```

> Example Request

```shell
$ curl -X POST "https://api.vhx.tv/customers/find_by_billing" \
  -d billing[provider]="apple" \
  -d billing[receipt]="MIIcVgYJKoZIhv..." \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
```

```node
```

```javascript
```

```php
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/customers/1" },
    "watchlist": { "href": "https://api.vhx.tv/customers/1/watchlist" },
    "watching": { "href": "https://api.vhx.tv/customers/1/watching" }
  },
  "_embedded": {
      "oauth": {
        "access_token": "3e0b2925500c3cc87b3c8ab47c93041f16e167ee5b949855e41fef7a3eb87ee3",
        "token_type": "bearer",
        "expires_in": 7200
      }
  },
  "id": 1,
  "name": "First Last",
  "email": "customer@email.com",
  "created_at": "2014-02-25T20:19:30Z",
  "updated_at": "2014-02-25T20:19:30Z"
}
```
<section class="text-2 contain margin-bottom-medium is-internal">
  <p>Retrieves an existing customer with <a href="/in-app-purchases">In-App Purchase</a> billing data.</p>
</section>

<table class="is-internal">
  <thead>
    <tr class="text-2">
      <th class="padding-medium nowrap">Arguments</th>
      <th class="padding-medium" width="100%">Description</th>
    </tr>
  </thead>

  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">billing</strong>
        <span class="is-block text--transparent text-3">object</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The billing provider and receipt for the In-App Purchase.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">product</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
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

```ruby
Vhx::Customer.all()
```

```node
vhx.customers.all();
```

```javascript
vhxjs.customers.all();
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

```node
vhx.customers.all({
  query: 'term'
}, function(err, collections) {
   // asynchronously called
});
```

```javascript
vhxjs.customers.all({
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

```ruby
Vhx::Customer.update()
```

```node
vhx.customers.update();
```

```javascript
// Not available for client-side requests.
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

```node
vhx.customers.update("https://api.vhx.tv/customers/1", {
  name: 'First Last'
}, function(err, customer) {
   // asynchronously called
});
```

```javascript
// Not available for client-side requests.
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

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-delete">Delete a Customer</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Delete a customer</h5>

> Definition


```shell
DELETE /customers/:id
```

```ruby
Vhx::Customer.delete()
```

```node
vhx.customers.del();
```

```javascript
// Not available for client-side requests.
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

```node
vhx.customers.del("https://api.vhx.tv/customers/1", function(err, response) {
  // asynchronously called
});
```

```javascript
// Not available for client-side requests.
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

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-add-product">Add a Product</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Add a product</h5>

> Definition

```shell
PUT /customers/:id/products
```

```ruby
Vhx::Customer.addProduct()
```

```node
vhx.customers.addProduct();
```

```javascript
// Not available for client-side requests.
```

```php
<?php\VHX\Customers::addProduct();
```

> Example Request

```shell
$ curl -X PUT "https://api.vhx.tv/customers/1/products" \
  -d product=https://api.vhx.tv/products/1 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
Vhx::Customer.addProduct('https://api.vhx.tv/customers/1', {
  product: 'https://api.vhx.tv/products/1'
})
```

```node
vhx.customers.addProduct('https://api.vhx.tv/customers/1', {
  product: 'https://api.vhx.tv/products/1'
}, function(err, customer) {
   // asynchronously called
});
```

```javascript
// Not available for client-side requests.
```

```php
<?php$customer = \VHX\Customers::addProduct("https://api.vhx.tv/customers/1",
 array(
  'product' => 'https://api.vhx.tv/products/1'
));
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

```ruby
Vhx::Customer.removeProduct()
```

```node
vhx.customers.removeProduct();
```

```javascript
// Not available for client-side requests.
```

```php
<?php$customer = \VHX\Customers::removeProduct();
```

> Example Request

```shell
$ curl -X DELETE "https://api.vhx.tv/customers/1/products" \
  -d product=https://api.vhx.tv/products/1 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
Vhx::Customer.removeProduct('https://api.vhx.tv/customers/1', {
  product: 'https://api.vhx.tv/products/1'
})
```

```node
vhx.customers.removeProduct('https://api.vhx.tv/customers/1', {
  product: 'https://api.vhx.tv/products/1'
}, function(err, customer) {
   // asynchronously called
});
```

```javascript
// Not available for client-side requests.
```


```php
<?php$customer = \VHX\Customers::removeProduct("https://api.vhx.tv/customers/1",
 array(
  'product' => 'https://api.vhx.tv/products/1'
));
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

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-watching">Retrieve Watching Items</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve Watching Items</h5>

> Definition

```shell
GET /customers/:id/watching
```

```ruby
# Not yet available for the Ruby client.
```

```node
// Not yet available for the Node client.
```

```javascript
// Not yet available for the Javascript client.
```

```php
<?php$customer = \VHX\Watching::items();
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/customers/1/watching" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
# Not yet available for the Ruby client.
```

```node
// Not yet available for the Node client.
```

```javascript
// Not yet available for the Javascript client.
```

```php
<?php$watching = \VHX\Watching::items("https://api.vhx.tv/customers/1");
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
  <p class="is-internal text-2">For applications that are integrated via OAuth2 access tokens with our user authentication system can use the alias <code>https://api.vhx.tv/me/watching</code> when making cURL requests.</p>
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
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-retrieve-watchlist">Retrieve Watchlist Items</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve Watchlist Items</h5>

> Definition

```shell
GET /customers/:id/watchlist
```

```ruby
# Not yet available for the Ruby client.
```

```node
// Not yet available for the Node client.
```

```javascript
// Not available for client-side requests.
```

```php
<?php$watchlist = \VHX\Watchlist::items();
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/customers/1/watchlist" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
# Not yet available for the Ruby client.
```

```node
// Not yet available for the Node client.
```

```javascript
// Not available for client-side requests.
```


```php
<?php\VHX\Watchlist::items(array(
  "customer" => "https://api.vhx.tv/customers/1"
));
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
  <p class="is-internal text-2">For applications that are integrated via OAuth2 access tokens with our user authentication system can use the alias <code>https://api.vhx.tv/me/watchlist</code> when making cURL requests.</p>
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

```ruby
# Not yet available for the Ruby client.
```

```node
// Not yet available for the Node client.
```

```javascript
// Not available for client-side requests.
```

```php
<?php\VHX\Watchlist::addItem();
```

> Example Request

```shell
$ curl -X PUT "https://api.vhx.tv/customers/1/watchlist" \
  -d video="http://api.vhx.tv/videos/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
# Not yet available for the Ruby client.
```

```node
// Not yet available for the Node client.
```

```javascript
// Not available for client-side requests.
```


```php
<?php\VHX\Watchlist::addItem(array(
  "customer" => "https://api.vhx.tv/customers/1",
  "video" => "https://api.vhx.tv/videos/1"
));
```

<section class="text-2 contain margin-bottom-medium">
  <p>Adds an item (a video) to a customer's watchlist.</p>
  <p class="is-internal text-2">For applications that are integrated via OAuth2 access tokens with our user authentication system can use the alias <code>https://api.vhx.tv/me/watchlist</code> when making cURL requests.</p>
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

```ruby
# Not yet available for the Ruby client.
```

```node
// Not yet available for the Node client.
```

```javascript
// Not available for client-side requests.
```

```php
<?php\VHX\Watchlist::removeItem();
```

> Example Request

```shell
$ curl -X DELETE "https://api.vhx.tv/customers/1/watchlist" \
  -d video="http://api.vhx.tv/videos/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
# Not yet available for the Ruby client.
```

```node
// Not yet available for the Node client.
```

```javascript
// Not available for client-side requests.
```


```php
<?php\VHX\Watchlist::removeItem(array(
  "customer" => "https://api.vhx.tv/customers/1",
  "video" => "https://api.vhx.tv/videos/1"
));
```

<section class="text-2 contain margin-bottom-medium">
  <p>Removes an item (a video) from a customer's watchlist.</p>
  <p class="is-internal text-2">For applications that are integrated via OAuth2 access tokens with our user authentication system can use the alias <code>https://api.vhx.tv/me/watchlist</code> when making cURL requests.</p>
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
