<!-- ___COLLECTIONS____________________________ -->
<h2 class="is-api head-3 margin-top-large margin-bottom-medium" id="collections">Collections</h2>

<section class="text-2 contain">
  <p>A collection is the way to organize and add metadata around your videos. There are 6 types of collections:</p>
</section>

<table>
  <thead>
    <tr class="text-2">
      <th class="padding-medium">Type</th>
      <th class="padding-medium">Definition</th>
    </tr>
  </thead>

  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>section</strong></td>
      <td>A high level grouping of categories. "Genres" is an example.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>category</strong></td>
      <td>A way to group other primary collections (series, movies, and playlists). An example of this is "Drama" or "Comedy".</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>series</strong></td>
      <td>A representation of a show with one or many seasons as its items.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>season</strong></td>
      <td>A representation of a season within a series. A season has one or many episodes.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>movie</strong></td>
      <td>A collection that gives emphasis to a featured video with support for additional extras.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>playlist</strong></td>
      <td>A loose grouping of related videos that can be manually positioned for display.</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="collections-create">Create a Collection</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Create a Collection</h5>

> Definition

```shell
POST /collections
```

```ruby
Vhx::Collection.create()
```

```node
vhx.collections.create();
```

```javascript
// Not available for client-side requests.
```

```php
<?php\VHX\Collections::create();
```

> Example Request

```shell
$ curl -X POST "https://api.vhx.tv/collections" \
  -H "Content-Type: application/json" \
  -d '{"name": "Collection Name", "type": "series", "metadata": {"director": "Brad Pitt", "writers":
["Foo Bar", "Bar Foo"], "release_year": 2017, "custom_icon": "image_url:https://vhx.imgix.net/site/assets/1231.jpg"}}' \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
collection = Vhx::Collection.create({
  name: 'Collection Name',
  type: 'series',
  metadata: {
    director: 'Brad Pitt',
    writers: ['Foo Bar', 'Bar Foo'],
    release_year: 2017,
    custom_icon: "image_url:https://vhx.imgix.net/site/assets/1231.jpg",
  }
})
```

```node
vhx.collections.create({
  name: 'Collection Name',
  type: 'series',
  metadata: {
    director: 'Brad Pitt',
    writers: ['Foo Bar', 'Bar Foo'],
    release_year: 2017,
    custom_icon: "image_url:https://vhx.imgix.net/site/assets/1231.jpg"
  }
}, function(err, collection) {
  // asynchronously called
});
```

```javascript
// Not available for client-side requests.
```

```php
<?php$collection = \VHX\Collections::create(array(
  'name' => 'Collection Name',
  'type' => 'series',
  'metadata' => array(
    'director' => 'Brad Pitt',
    'writers' => ['Foo Bar', 'Bar Foo'],
    'release_year' => 2017,
    'custom_icon' => 'image_url:https://vhx.imgix.net/site/assets/1231.jpg'
  )
));
```

> Example Response

```json
{
  "_links": {
    "self": {
      "href": "http://api.vhx.tv/collections/1"
    },
    "items": {
      "href": "http://api.vhx.tv/collections/1/items"
    },
    "collection_page": {
      "href": "http://mynetwork.com/collection-name-1"
    }
  },
  "_embedded": {
    "trailer": null
  },
  "id": 1,
  "name": "Collection Name",
  "description": null,
  "slug": "collection-name",
  "thumbnail": {
    "small": "https://cdn.vhx.tv/assets/thumbnails/default-small.png",
    "medium": "https://cdn.vhx.tv/assets/thumbnails/default-medium.png",
    "large": "https://cdn.vhx.tv/assets/thumbnails/default-large.png",
    "source": "https://cdn.vhx.tv/assets/thumbnails/original.jpg"
  },
  "metadata": {
    "director": "Brad Pitt",
    "writers": ["Foo Bar", "Bar Foo"],
    "release_year": 2017,
    "custom_icon": {
      "small": "https://vhx.imgix.net/site/assets/1231.jpg?fit=clip&h=135&w=240",
      "medium": "https://vhx.imgix.net/site/assets/1231.jpg?fit=clip&h=360&w=640",
      "large": "https://vhx.imgix.net/site/assets/1231.jpg?fit=clip&h=720&w=1280",
      "source": "https://vhx.imgix.net/site/assets/1231.jpg"
    },
  },
  "type": "series",
  "seasons_count": 0,
  "items_count": 0,
  "files_count": 0,
  "created_at": "2015-11-25T01:30:33Z",
  "updated_at": "2015-11-25T01:30:33Z"
}
```

<section class="text-2 contain">
  <p>When creating a collection, you need to provide a collection <code>type</code> and <code>name</code>. See below for the required and optional arguments:</p>
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
        <strong class="is-block text--navy">type</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The type of collection: <code>section</code>, <code>category</code>, <code>series</code>, <code>season</code>, <code>movie</code>, or <code>playlist</code>.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">name</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The name of the collection.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">description</strong>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The collection description.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">thumbnail_url</strong>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>A publicly accessible image URL. If you prefer you can upload images directly to a collection in the VHX Publisher Admin.</td>
    </tr>    
    <tr class="is-internal text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">metadata</strong>
        <span class="text--transparent text-3">optional object</span>
      </td>
      <td>
      A set of key/value pairs that you can attach to a collection object. It can be useful for
      storing additional information about the collection in a structured format.<br><br>

      Metadata keys must be strings. There are a few reserved keys that are auto-generated, which cannot
      be updated. For collections, the following key is reserved: <code>season_number</code><br><br>

      Metadata values can be strings, integers, arrays, or images. An image metadata value
      must must be a url of an image (< 3MB) prefixed with the text <code>image_url:</code>. 
      </td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="collections-retrieve">Retrieve a Collection</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve a Collection</h5>

> Definition

```shell
GET /collections/:id
```

```ruby
Vhx::Collection.retrieve()
```

```node
vhx.collections.retrieve();
```

```javascript
vhxjs.collections.retrieve();
```

```php
<?php\VHX\Collections::retrieve();
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/collections/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
collection = Vhx::Collection.retrieve("https://api.vhx.tv/collections/1")
```

```node
vhx.collections.retrieve("https://api.vhx.tv/collections/1",
 function(err, collection) {
  // asynchronously called
 });
```

```javascript
vhxjs.collections.retrieve("https://api.vhx.tv/collections/1", function(err, collection) {
  // asynchronously called
});
```

```php
<?php$collection = \VHX\Collections::retrieve("https://api.vhx.tv/collections/1");
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/collections/1" },
    "items": { "href": "https://api.vhx.tv/collections/1/items" }
  },
  "id": 1,
  "name": "Comedy",
  "description": "Comedy series and movies.",
  "slug": "comedy",
  "thumbnail": {
    "small": "https://cdn.vhx.tv/assets/thumbnails/default-small.png",
    "medium": "https://cdn.vhx.tv/assets/thumbnails/default-medium.png",
    "large": "https://cdn.vhx.tv/assets/thumbnails/default-large.png",
    "source": "https://cdn.vhx.tv/assets/thumbnails/original.jpg"
  },
  "metadata": {
    "director": "Brad Pitt",
    "writers": ["Foo Bar", "Bar Foo"],
    "release_year": 2017,
    "custom_icon": {
      "small": "https://vhx.imgix.net/site/assets/1231.jpg?fit=clip&h=135&w=240",
      "medium": "https://vhx.imgix.net/site/assets/1231.jpg?fit=clip&h=360&w=640",
      "large": "https://vhx.imgix.net/site/assets/1231.jpg?fit=clip&h=720&w=1280",
      "source": "https://vhx.imgix.net/site/assets/1231.jpg"
    },
  },
  "type": "category",
  "items_count": 10,
  "created_at": "2014-02-25T20:19:30Z",
  "updated_at": "2014-02-25T20:19:30Z"
}
```

<section class="text-2 contain">
  <p>Retrieves an existing collection. You can optionally specify a product parameter to scope the collection retrieval to it.</p>
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
      <td>The id of collection being retrieved.</td>
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

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="collections-list">List all Collections</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all Collections</h5>

> Definition

```shell
GET /collections
```

```ruby
Vhx::Collection.all()
```

```node
vhx.collections.all();
```

```javascript
vhxjs.collections.all();
```

```php
<?php\VHX\Collections::all();
```

> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/collections" \
  -d product=https://api.vhx.tv/products/1 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
collections = Vhx::Collection.all({
  product: 'https://api.vhx.tv/products/1'
})
```

```node
vhx.collections.all({
  product: 'https://api.vhx.tv/products/1'
}, function(err, collections) {
  // asynchronously called
});
```

```javascript
vhxjs.collections.all({
  product: 'https://api.vhx.tv/products/1'
}, function(err, collections) {
  // asynchronously called
});
```

```php
<?php$collections = \VHX\Collections::all(array(
  'product' => 'https://api.vhx.tv/products/1'
));
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/collections?page=1&product=:href" },
    "first": { "href": "https://api.vhx.tv/collections?product=:href" },
    "prev":  { "href": null },
    "next":  { "href": "https://api.vhx.tv/collections?page=2&product=:href" },
    "last":  { "href": "https://api.vhx.tv/collections?page=5&product=:href" }
  },
  "count": 100,
  "total": 500,
  "_embedded": {
    "collections": []
  }
}
```

<section class="text-2 contain margin-bottom-medium">
  <p>Collections can be listed for your account or for a given product. A paginated result is returned.</p>
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
        <strong class="is-block text--navy">type</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>A comma separated list of types to filter the results to. To list all collections that are of the series or movie type: <code>?type=series,movie</code>. HTTP-based arrays are also supported.</td>
    </tr>
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

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="collections-update">Update a Collection</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Update a Collection</h5>

> Definition

```shell
PUT /collections/:id
```

```ruby
Vhx::Collection.update()
```

```node
vhx.collections.update();
```

```javascript
// Not available for client-side requests.
```

```php
<?php\VHX\Collections::update();
```

> Example Request

```shell
$ curl -X PUT "https://api.vhx.tv/collections/1" \
  -H "Content-Type: application/json" \
  -d '{"description": "A new description", "metadata": {"producer": "Christoper Nolan", "director":
"Brad Pitt", "writers": ["Foo Bar", "Bar Foo"], "release_year": 2017, "custom_icon": "image_url:https://vhx.imgix.net/site/assets/1231.jpg"}}' \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
collection = Vhx::Collection.retrieve("https://api.vhx.tv/collections/1").update({
  description: 'A new description',
  metadata: {
    director: 'Brad Pitt',
    writers: ['Foo Bar', 'Bar Foo'],
    release_year: 2017
    producer: 'Christoper Nolan',
    custom_icon: "image_url:https://vhx.imgix.net/site/assets/1231.jpg",
  }
})
```

```node
vhx.collections.update("https://api.vhx.tv/collections/1", {
  description: 'A new description',
  metadata: {
    director: 'Brad Pitt',
    writers: ['Foo Bar', 'Bar Foo'],
    release_year: 2017
    producer: 'Christoper Nolan',
    custom_icon: "image_url:https://vhx.imgix.net/site/assets/1231.jpg"
  }
}, function(err, collection) {
  // asynchronously called
});
```

```javascript
// Not available for client-side requests.
```

```php
<?php$collection = \VHX\Collections::update("https://api.vhx.tv/collections/1", array(
  'name' => 'A new description',
  'metadata' => array(
    'director' => 'Brad Pitt',
    'writers' => ['Foo Bar', 'Bar Foo'],
    'release_year' => 2017,
    'producer' => 'Christoper Nolan',
    'custom_icon' => 'image_url:https://vhx.imgix.net/site/assets/1231.jpg'
  )
));
```

> Example Response

```json
{
  "_links": {
    "self": {
      "href": "http://api.vhx.tv/collections/1"
    },
    "items": {
      "href": "http://api.vhx.tv/collections/1/items"
    },
    "collection_page": {
      "href": "http://mynetwork.com/collection-name-1"
    }
  },
  "_embedded": {
    "trailer": null
  },
  "id": 1,
  "name": "Collection Name",
  "description": "A new description",
  "slug": "collection-name",
  "thumbnail": {
    "small": "https://cdn.vhx.tv/assets/thumbnails/default-small.png",
    "medium": "https://cdn.vhx.tv/assets/thumbnails/default-medium.png",
    "large": "https://cdn.vhx.tv/assets/thumbnails/default-large.png",
    "source": "https://cdn.vhx.tv/assets/thumbnails/original.jpg"
  },
  "metadata": {
    "director": "Brad Pitt",
    "producer": "Christoper Nolan",
    "writers": ["Foo Bar", "Bar Foo"],
    "release_year": 2017,
    "custom_icon": {
      "small": "https://vhx.imgix.net/site/assets/1231.jpg?fit=clip&h=135&w=240",
      "medium": "https://vhx.imgix.net/site/assets/1231.jpg?fit=clip&h=360&w=640",
      "large": "https://vhx.imgix.net/site/assets/1231.jpg?fit=clip&h=720&w=1280",
      "source": "https://vhx.imgix.net/site/assets/1231.jpg"
    },
  },
  "type": "series",
  "seasons_count": 0,
  "items_count": 0,
  "files_count": 0,
  "created_at": "2015-11-25T01:30:33Z",
  "updated_at": "2015-11-25T01:30:33Z"
}
```

<section class="text-2 contain">
  <p>No fields are required when updating a collection, however; you cannot update a collection's type once it has already been created.</p>
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
      <td>The name of the collection.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">description</strong>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The collection description.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">thumbnail_url</strong>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>A publicly accessible image URL. If you prefer you can upload images directly to a collection in the VHX Publisher Admin.</td>
    </tr>
    <tr class="is-internal text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">metadata</strong>
        <span class="text--transparent text-3">optional object</span>
      </td>
      <td>
      A set of key/value pairs that you can attach to a collection object. It can be useful for
      storing additional information about the collection in a structured format.<br><br>

      Metadata keys must be strings. There are a few reserved keys that are auto-generated, which cannot
      be updated. For collections, the following key is reserved: <code>season_number</code><br><br>

      Metadata values can be strings, integers, arrays, or images. An image metadata value
      must must be a url of an image (< 3MB) prefixed with the text <code>image_url:</code>. 
      </td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="collection-items-list">List all Items</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all Items</h5>

> Definition

```shell
GET /collections/:id/items
```

```ruby
Vhx::Collection.items()
```

```node
vhx.collections.items();
```

```javascript
vhxjs.collections.items();
```

```php
<?php \VHX\Collections::items();
```

> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/collections/1/items?page=1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
collection = Vhx::Collection.retrieve("https://api.vhx.tv/collections/1")
collection.items({ page: 1 })
```

```node
vhx.collections.items({
  collection: 'https://api.vhx.tv/collections/1',
  page: 1
}, function(err, items) {
  // asynchronously called
});
```

```javascript
vhxjs.collections.items({
  collection: 'https://api.vhx.tv/collections/1',
  page: 1
}, function(err, items) {
  // asynchronously called
});
```

```php
<?php$collections = \VHX\Collections::items(array(
  'collection' => 'https://api.vhx.tv/collections/1'
  'page' => 1
));
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/collections/1/items?page=1" },
    "first": { "href": "https://api.vhx.tv/collections/1/items" },
    "prev":  { "href": null },
    "next":  { "href": "https://api.vhx.tv/collections/1/items?page=2" },
    "last":  { "href": "https://api.vhx.tv/collections/1/items?page=5" }
  },
  "count": 100,
  "total": 500,
  "_embedded": {
    "items": []
  }
}
```

<section class="text-2 contain margin-bottom-medium">
  <p>Each collection has many items which can be a video or another collection. A paginated result is returned.</p>
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
      <tr class="text-2 border-bottom border--light-gray">
        <td>
          <strong class="is-block text--navy">id</strong>
          <span class="is-block text--transparent text-3">integer</span>
          <span class="text--yellow text-3">REQUIRED</span>
        </td>
        <td>The id of collection being retrieved.</td>
      </tr>
      <tr class="text-2 border-bottom border--light-gray">
        <td>
          <strong class="is-block text--navy">sort</strong>
          <span class="is-block text--transparent text-3">string</span>
          <span class="text--transparent text-3">optional</span>
        </td>
        <td>The sort to order the results. Options are <code>newest</code>, <code>oldest</code>, or <code>position</code>.</td>
      </tr>
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
