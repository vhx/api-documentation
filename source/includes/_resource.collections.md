<!-- ___COLLECTIONS____________________________ -->
<h2 class="is-api head-3 margin-top-large margin-bottom-medium" id="collections">Collections</h2>

<section class="text-2 contain">
  A collection is the way to organize and add metadata to your videos. There are 5 types of collections: category, series, season, movie, and playlist. Each collection has many items which can be a video, an extra, or another collection. An example of this is a series collection could have 5 items (3 seasons and 2 videos/trailers). Each season would have several videos as it's items.
</section>

<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="collections-retrieve">Retrieve a Collection</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve a Collection</h5>

> Definition

```
GET /collections/:id
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/collections/:id" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
collection = Vhx::Collection.find(1)
```

```node
vhx.collections.retrieve({
  id: '1'
}, function(err, collection) {
  if (!err) {
    // callback
  } else {
    // see http://dev.vhx.tv/docs/api#errors for handling errors
  }
};
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/collections/1" },
    "items": { "href": "https://api.vhx.tv/collections/1/items" }
  },
  "id": 1,
  "name": "Romantic Comedy",
  "description": "All our favorite romantic comedies.",
  "slug": "romantic-comedy",
  "thumbnail": {
    "small": "https://cdn.vhx.tv/assets/thumbnails/default-small.png",
    "medium": "https://cdn.vhx.tv/assets/thumbnails/default-medium.png",
    "large": "https://cdn.vhx.tv/assets/thumbnails/default-large.png"
  },
  "type": "category",
  "items_count": 10,
  "created_at": "201ff4-02-25T20:19:30Z",
  "updated_at": "2014-02-25T20:19:30Z"
}
```

<section class="text-2 contain">
  <p>Retrieves an existing collection.</p>
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
        <strong class="is-block text--navy">subscription</strong>
        <span class="text--transparent text-3">optional, default is null</span>
      </td>
      <td>The UUID of the subscription.</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="collections-list">List all Collections</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all Collections</h5>

> Definition

```
GET /collections
```

> Query by Type

```
GET /collections?type=series,movie
```

> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/collections" \
  -d subscription=https://api.vhx.tv/subscriptions/1 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
Vhx::Collection.list(subscription: 'https://api.vhx.tv/subscriptions/1')
```

> Example Response
```ruby

```

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/collections?page=1" },
    "first": { "href": "https://api.vhx.tv/collections" },
    "prev":  { "href": null },
    "next":  { "href": "https://api.vhx.tv/collections?page=2" },
    "last":  { "href": "https://api.vhx.tv/collections?page=5" }
  },
  "count": 100,
  "total": 500,
  "_embedded": {
    "collections": []
  }
}
```

<section class="text-2 contain margin-bottom-medium">
  Collections can be listed for a given subscription or site. The result can be filtered to one or many type's (category, series, season, movie, or playlist). A paginated result is returned.
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
        <strong class="is-block text--navy">subscription</strong>
        <span class="text--transparent text-3">optional, default is null</span>
      </td>
      <td>The UUID of the subscription.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">type</strong>
        <span class="text--transparent text-3">optional, default is null</span>
      </td>
      <td>A comma separated list of types to filter the results to. To list all collections that are of the series or movie type: <code>?type=series,movie</code></td>
    </tr>
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

<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="collection-items-list">List all Collection Items</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all Collection Items</h5>

> Definition

```
GET /collections/:id/items
```

> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/collections/1/items?page=1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
items = Vhx::CollectionItem.list({collection: https://api.vhx.tv/collections/1, page: 1})
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
  Each collection has many items which can be a video, an extra, or another collection. An example of this is a series collection could have 5 items (3 seasons and 2 videos/trailers). Each season would have several videos as it's items.
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
