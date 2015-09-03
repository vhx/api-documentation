<!-- ___COLLECTIONS____________________________ -->
<h2 class="is-api head-3 margin-top-large margin-bottom-medium" id="collections">Collections</h2>

<section class="text-2 contain">
A collection is the way to organize and add metadata to your videos. There are 5 types of collections: category, series, season, movie, and playlist. Each collection has many items which can reference a video, a bonus download, or another collection. An example of this: a series collection could have 5 items (3 seasons and 2 video extras). Each season would have several videos as their items.
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
    "self":  { "href": "https://api.vhx.tv/collections/1" }
  },
  "_embedded": {
    "trailer": {},
    "items": []
  },
  "id": 1,
  "title": "Romantic Comedy",
  "description": "All our favorite romantic comedies.",
  "slug": "romantic-comedy"
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

<section class="text-2 contain">
Collections can be listed for a given subscription or site. The result can be filtered to 1 or many type's' and a paginated result is returned.
List all Collections
</section>