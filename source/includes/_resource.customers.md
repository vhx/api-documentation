<!-- ___CUSTOMERS____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="customers">Customers</h2>

<section class="text-2 contain">
  <p>A customer is a person who has been granted access to a product. By having access to the product, they inherently have access to all of its content (videos / collections).</p>
</section>

<h3 class="text-2 text--navy text--bold margin-top-xlarge margin-bottom-medium" id="customer-create">Create a Customer</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Create a customer</h5>

> Definiton

```shell
POST /customers
```

```ruby
Vhx::Customer.create()
```

```javascript
vhx.customers.create();
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
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
customer = Vhx::Customer.create({
  name: 'First Last',
  email: 'customer@email.com'
  product: 'https://api.vhx.tv/products/1'
})
```

```javascript
vhx.customers.create({
  name: 'First Last',
  email: 'customer@email.com'
  product: 'https://api.vhx.tv/products/1'
}, function(err, customer) {
  // asynchronously called
});
```

```php
<?php$customer = \VHX\Customers::create(array(
  'name' => 'First Last',
  'email' => 'customer@email.com',
  'product' => 'https://api.vhx.tv/products/1'
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

<h3 class="text-2 text--navy text--bold margin-top-large margin-bottom-medium" id="customer-retrieve">Retrieve a Customer</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve a customer</h5>

> Definiton

```shell
GET /customers/:id
```

```ruby
Vhx::Customer.retrieve({CUSTOMER_ID})
```

```javascript
vhx.customers.retrieve({CUSTOMER_ID});
```

```php
<?php$customer = \VHX\Customers::retrieve({CUSTOMER_ID});
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/customers/:id" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
customer = Vhx::Customer.retrieve(15)
```

```javascript
vhx.customers.retrieve(15, function(err, customer) {
  // asynchronously called
});
```

```php
<?php$customer = \VHX\Customers::retrieve(15);
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
        <strong class="is-block text--navy">id</strong>
        <span class="is-block text--transparent text-3">integer</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The id of the customer being retrieved.</td>
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
$ curl -X PUT "https://api.vhx.tv/customers/:id" \
  -d name="First Last" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
Vhx::Customer.update(15, {
  name: 'First Last'
})
```

```javascript
vhx.customers.update(15, {
  name: 'First Last'
}, function(err, customer) {
   // asynchronously called
});
```

```php
<?php$customers = \VHX\Customers::update(15, array(
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
vhx.customers.del({CUSTOMER_ID});
```

```php
<?php\VHX\Customers::delete({CUSTOMER_ID});
```

> Example Request

```shell
$ curl -X DELETE -G "https://api.vhx.tv/customers/:id" \
  -d product=https://api.vhx.tv/products/:id \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
Vhx::Customer.delete(15)
```

```javascript
vhx.customers.del(15, function(err, response) {
  // asynchronously called
});
```

```php
<?php\VHX\Customers::delete(15);
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
        <strong class="is-block text--navy">id</strong>
        <span class="is-block text--transparent text-3">integer</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The id of the customer being deleted.</td>
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
