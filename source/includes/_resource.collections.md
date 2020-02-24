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

> Example Request

```shell
$ curl -X POST "https://api.vhx.tv/collections" \
  -H "Content-Type: application/json" \
  -d '{"name": "Collection Name", "type": "series", "metadata": {"director": "Brad Pitt", "writers":
["Foo Bar", "Bar Foo"], "release_year": 2017, "custom_icon":
"image_url:https://vhx.imgix.net/site/assets/1231.jpg"}, "plans": ["public", "free", "standard"]}' \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
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
  "plans": ["public", "free", "standard"],
  "type": "series",
  "seasons_count": 0,
  "items_count": 0,
  "files_count": 0,
  "is_featured": false,
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
      must must be a url of an image, hosted on vhx, prefixed with the text <code>image_url:</code>.
      </td>
    </tr>
    <tr class="is-internal text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">plans</strong>
        <span class="text--transparent text-3">array of strings</span>
      </td>
      <td>
      An array of plan types that you can use to set collection availability.
      Values can be one or more of the following strings: <code>public</code>, <code>free</code>,
      <code>standard</code>.<br><br>

      The <code>public</code> plan makes the collection object available without email
      registration or paid subscription.<br><br>

      The <code>free</code> plan makes the collection object available for free, but requires user email
      registration<br><br>

      The <code>standard</code> plan makes the collection object available to paying subscribers.
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

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/collections/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
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
  "plans": ["public", "free", "standard"],
  "type": "category",
  "items_count": 10,
  "is_featured": false,
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

> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/collections" \
  -d product=https://api.vhx.tv/products/1 \
  -d plan=standard
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/collections?page=1&product=:href&plan=standard" },
    "first": { "href": "https://api.vhx.tv/collections?product=:href&plan=standard" },
    "prev":  { "href": null },
    "next":  { "href": "https://api.vhx.tv/collections?page=2&product=:href&plan=standard" },
    "last":  { "href": "https://api.vhx.tv/collections?page=5&product=:href&plan=standard" }
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
    <tr class="is-internal text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">plan</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The plan(s) to filter the paginated results. The value can be an array or comma separated string.</td>
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

> Example Request

```shell
$ curl -X PUT "https://api.vhx.tv/collections/1" \
  -H "Content-Type: application/json" \
  -d '{"description": "A new description", "metadata": {"producer": "Christoper Nolan", "director":
"Brad Pitt", "writers": ["Foo Bar", "Bar Foo"], "release_year": 2017, "custom_icon":
"image_url:https://vhx.imgix.net/site/assets/1231.jpg"}, "plans": ["public", "free", "standard"] }' \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
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
  "plans": ["public", "free", "standard"],
  "type": "series",
  "seasons_count": 0,
  "items_count": 0,
  "files_count": 0,
  "is_featured": false,
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
      must must be a url of an image, hosted on vhx, prefixed with the text <code>image_url:</code>.
      </td>
    </tr>
    <tr class="is-internal text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">plans</strong>
        <span class="text--transparent text-3">array of strings</span>
      </td>
      <td>
      An array of plan types that you can use to set collection availability.
      Values can be one or more of the following strings: <code>public</code>, <code>free</code>,
      <code>standard</code>.<br><br>

      The <code>public</code> plan makes the collection object available without email
      registration or paid subscription.<br><br>

      The <code>free</code> plan makes the collection object available for free, but requires user email
      registration<br><br>

      The <code>standard</code> plan makes the collection object available to paying subscribers.
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

> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/collections/1/items?page=1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
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

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="collection-items-add">Add an Item</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Add an Item</h5>

> Definition

```shell
PUT /collections/:id/items
```

> Example Request

```shell
$ curl -X PUT "https://api.vhx.tv/collections/1/items" \
  -d video_id=2 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```http
HEAD 204
```

<section class="text-2 contain margin-bottom-medium">
  <p>Adds an item to an existing collection.</p>
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
          <strong class="is-block text--navy">video_id</strong>
          <span class="is-block text--transparent text-3">integer</span>
          <span class="text--yellow text-3">Optional</span>
        </td>
        <td>The id of a video being added.</td>
      </tr>
    </tr>
  </tbody>

  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <tr class="text-2 border-bottom border--light-gray">
        <td>
          <strong class="is-block text--navy">collection_id</strong>
          <span class="is-block text--transparent text-3">integer</span>
          <span class="text--yellow text-3">Optional</span>
        </td>
        <td>The id of a collection being added.</td>
      </tr>
    </tr>
  </tbody>
</table>


<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="collection-items-delete">Delete an Item</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Delete an Item</h5>

> Definition

```shell
DELETE /collections/:id/items
```

> Example Request

```shell
$ curl -X DELETE "https://api.vhx.tv/collections/1/items" \
  -d video_id=2 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```http
HEAD 204
```

<section class="text-2 contain margin-bottom-medium">
  <p>Deletes an item from an existing Collection.</p>
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
          <strong class="is-block text--navy">video_id</strong>
          <span class="is-block text--transparent text-3">integer</span>
          <span class="text--yellow text-3">Optional</span>
        </td>
        <td>The id of a video being removed.</td>
      </tr>
    </tr>
  </tbody>

  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <tr class="text-2 border-bottom border--light-gray">
        <td>
          <strong class="is-block text--navy">collection_id</strong>
          <span class="is-block text--transparent text-3">integer</span>
          <span class="text--yellow text-3">Optional</span>
        </td>
        <td>The id of a collection being removed.</td>
      </tr>
    </tr>
  </tbody>
</table>
