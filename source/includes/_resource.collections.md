<!-- ___COLLECTIONS____________________________ -->
<h2 class="is-api head-3 margin-top-large margin-bottom-medium" id="collections">Collections</h2>

<section class="text-2 contain">
  A collection is the way to organize and add metadata to your videos. There are 5 types of collections: category, series, season, movie, and playlist. Each collection has many items which can reference a video, an extra (file download), or another collection. An example of this: a series collection could have 5 items (3 seasons and 2 video extras). Each season would have several videos as their items.
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

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/collections/1" },
    "items": {
      "href": "https://api.vhx.tv/collections/1/items",
      "next": {
        "href": "https://api.vhx.tv/collections/1/items?page=2&per_page=5"
      }
    }
  },
  "_embedded": {
    "trailer": {},
    "items": []
  },
  "id": 1,
  "title": "Romantic Comedy",
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
  <p>The first page of collection items will be embedded in the <code>_embedded</code> property. The size of this page can be customized via <code>?per_page=</code>. See <code>_links.items.next.href</code> for the next page of items.</p>
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
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">per_page</strong>
        <span class="is-block text--transparent text-3">integer</span>
        <span class="text--transparent text-3">optional, default is 50</span>
      </td>
      <td>The page size of the embedded items. Only page 1 is returned in <code>_embedded.items</code>.</td>
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

> Example Response

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
  Collections  can be listed for a given subscription or site. The result can be filtered to 1 or many type's' and a paginated result is returned.
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
