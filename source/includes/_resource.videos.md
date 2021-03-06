<!-- ___VIDEOS____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="videos">Videos</h2>

<section class="text-2 contain">
  <p>A video represents a playable resource. In addition to it's core properties, a video has a set of files (each with multiple renditions) available to stream. A particular file has a specific quality, format, method, and mime type:</p>
</section>

<table>
  <thead>
    <tr class="text-2">
      <th class="padding-medium">Property</th>
      <th class="padding-medium">Available values</th>
    </tr>
  </thead>

  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>quality</strong></td>
      <td>1080p, 720p, 540p, 480p, 360p, adaptive</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>format</strong></td>
      <td>m3u8, mpd, mp4, webm, ogg</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>method</strong></td>
      <td>hls, dash, progressive</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>mime_type</strong></td>
      <td>application/x-mpegURL, application/dash+xml, video/mp4</td>
    </tr>
  </tbody>
</table>

<section class="text-2 contain margin-bottom-large">
  <p>A video object has a tracks property. This includes subtitles. A subtitle track is a sidecar WebVTT or SRT file.</p>
  <p>DRM (Digital Rights Management) is available, per request, for an additional cost.</p>
</section>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="videos-create">Create a Video</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Create a Video</h5>

> Definition

```shell
POST /videos
```

> Example Request

```shell
$ curl -X POST "https://api.vhx.tv/videos" \
  -H "Content-Type: application/json" \
  -d '{"title":"My Video","description":"My video description.",
"source_url":"https://s3.amazonaws.com/YOUR_BUCKET_NAME/FILE.mp4", "metadata": {"director": "Brad Pitt", "writers":
["Foo Bar", "Bar Foo"], "release_year": 2017, "custom_icon":
"image_url:https://vhx.imgix.net/site/assets/1231.jpg"}, "plans": ["public", "free", "standard"],
"time_available": "2014-03-01T00:00:00Z", "time_unavailable": "2014-04-01T00:00:00Z"}' \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/videos/1" },
    "files": { "href": "https://api.vhx.tv/videos/1/files" }
  },
  "_embedded": {
    "files": []
  },
  "id": 1,
  "title": "My Video",
  "description": "My video description.",
  "status": "processing",
  "duration": {
    "seconds": 7200,
    "formatted": "02:00:00"
  },
  "thumbnail": {
    "small": "https://cdn.vhx.tv/assets/thumbnails/default-small.png",
    "medium": "https://cdn.vhx.tv/assets/thumbnails/default-medium.png",
    "large": "https://cdn.vhx.tv/assets/thumbnails/default-large.png",
    "source": "https://cdn.vhx.tv/assets/thumbnails/original.jpg"
  },
  "tracks": {
    "subtitles": []
  },
  "advertising": {},
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
    "advertising_keywords": []
  },
  "plans": ["public", "free", "standard"],
  "time_available": "2014-03-01T00:00:00Z",
  "time_unavailable": "2014-04-01T00:00:00Z",
  "plays_count": 1340,
  "finishes_count": 1204,
  "files_count": 0,
  "created_at": "2014-02-25T20:19:30Z",
  "updated_at": "2014-02-25T20:19:30Z"
}
```

<section class="text-2 contain">
  <p>A video can be created via the API and subsequently organized by adding it to a collection (<a href="#collections">see below</a>).</p>
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
        <strong class="is-block text--navy">title</strong>
        <span class="text--yellow text-3">REQUIRED</span>
        <span class="text--transparent text-3">string</span>
      </td>
      <td>A title for the video.</p></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">source_url</strong>
        <span class="text--transparent text-3">optional string, default is null</span>
      </td>
      <td>An accessible master video file per our compression settings.</p></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">thumbnail_url</strong>
        <span class="text--transparent text-3">optional string, default is null</span>
      </td>
      <td>
        A publicly accessible image URL. If you prefer, you can upload images directly to a video in the Vimeo OTT Publisher Admin.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">description</strong>
        <span class="text--transparent text-3">optional string, default is null</span>
      </td>
      <td>A description for the video.</p></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">short_description</strong>
        <span class="text--transparent text-3">optional string, default is null</span>
      </td>
      <td>A shorter description for the video.</p></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">url</strong>
        <span class="text--transparent text-3">optional string, default is video title</span>
      </td>
      <td>
        The final part of the url of the video, ie the <code>video_title</code> in https://yoursite.com/video_title.
      </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">plans</strong>
        <span class="text--transparent text-3">array of strings</span>
      </td>
      <td>
        An array of plan types that you can use to set video availability.
        Values can be one or more of the following strings: <code>public</code>, <code>free</code>,
        <code>standard</code>.
        <br><br>
        The <code>public</code> plan makes the video object available without email
        registration or paid subscription.
        <br><br>
        The <code>free</code> plan makes the video object available for free, but requires user email
        registration
        <br><br>
        The <code>standard</code> plan makes the video object available to paying subscribers.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">canonical_collection</strong>
        <span class="text--transparent text-3">optional id, default is null</span>
      </td>
      <td>
        The canonical collection is the one collection that a video should be associated with above others even if it has been added to multiple collections. The best example of this is an episode of a TV show that perhaps gets added to a smaller selection of videos as a playlist.
        <br><br>
        To add a canonical collection, pass in a pair with a key of <code>id</code> and a value of the collection ID of the collection that should be this to the video.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">time_available</strong>
        <span class="text--transparent text-3">optional string, default is null</span>
      </td>
      <td>ISO8601 timestamp for scheduling the video to be available in the future. </br><code>YYYY-MM-DDTHH:MM:SSZ</code></p></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">time_unavailable</strong>
        <span class="text--transparent text-3">optional string, default is null</span>
      </td>
      <td>ISO8601 timestamp for scheduling the video to be unavailable in the future. </br><code>YYYY-MM-DDTHH:MM:SSZ</code></p></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">geo_available</strong>
        <span class="text--transparent text-3">optional string, default is null</span>
      </td>
      <td>
        Comma seperated list of country codes for the countries this collection should be available in.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">geo_unavailable</strong>
        <span class="text--transparent text-3">optional string, default is null</span>
      </td>
      <td>
        Comma seperated list of country codes for the countries this collection should not be available in.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">is_commenting_enabled</strong>
        <span class="text--transparent text-3">optional boolean</span>
      </td>
      <td>
        Determines if comments are allowed on the video. This value will be ignored if comments are disabled at the site level.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">metadata</strong>
        <span class="text--transparent text-3">object of key value pairs</span>
      </td>
      <td>
        A set of key/value pairs that you can attach to a video object. It can be useful for
        storing additional information about the video in a structured format.
        <br><br>
        Metadata keys must be strings. There are a few reserved keys that
        are auto-generated, which cannot be updated. These reserved keys are:
        <code>advertising_keywords</code>, <code>series_name</code>,
        <code>season_name</code>, <code>season_number</code>,
        <code>episode_number</code>, and <code>movie_name</code>
        <br><br>
        Metadata values can be strings, integers, arrays, or images. An image metadata value must
        must be a url of an image, prefixed with the text <code>image_url:</code>.
      </td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="videos-get">Retrieve a Video</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve a Video</h5>

> Definition

```shell
GET /videos/:id
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/videos/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/videos/1" },
    "files": { "href": "https://api.vhx.tv/videos/1/files" }
  },
  "_embedded": {
    "files": [
      {
        "_links": {
          "self":  { "href": "https://api.vhx.tv/videos/1/files?quality=adaptive&format=m3u8" }
        },
        "quality": "adaptive",
        "format": "m3u8",
        "method": "hls",
        "size": {
          "bytes": 1073741824,
          "formatted": "1 GB"
        },
        "mime_type": "application/x-mpegURL"
      }
    ]
  },
  "id": 1,
  "title": "My Video",
  "description": "My video description.",
  "status": "uploaded",
  "duration": {
    "seconds": 7200,
    "formatted": "02:00:00"
  },
  "thumbnail": {
    "small": "https://cdn.vhx.tv/assets/thumbnails/default-small.png",
    "medium": "https://cdn.vhx.tv/assets/thumbnails/default-medium.png",
    "large": "https://cdn.vhx.tv/assets/thumbnails/default-large.png",
    "source": "https://cdn.vhx.tv/assets/thumbnails/original.jpg"
  },
  "tracks": {
    "subtitles": [
      {
        "_links": {
            "srt": { "href": "https://cdn.vhx.tv/file.srt" },
            "vtt": { "href": "https://cdn.vhx.tv/file.vtt" }
        },
        "label": "English",
        "srclang": "en",
        "kind": "subtitles"
      }
    ]
  },
  "advertising": {
    "_links": {
      "tag": { "href": "https://static.vhx.tv/vmap.xml" }
    },
    "client": "vmap",
    "provider": "dfp",
    "custom_params": {
      "foo": ["some", "value"],
      "bar": ["other", "thing"]
    }
  },
  "metadata": {
    "director": "Brad Pitt",
    "writers": ["Foo Bar", "Bar Foo"],
    "release_year": 2017,
    "series_name": "Series Name",
    "season_name": "Season 1",
    "season_number": 1,
    "episode_number": 5,
    "custom_icon": {
      "small": "https://vhx.imgix.net/site/assets/1231.jpg?fit=clip&h=135&w=240",
      "medium": "https://vhx.imgix.net/site/assets/1231.jpg?fit=clip&h=360&w=640",
      "large": "https://vhx.imgix.net/site/assets/1231.jpg?fit=clip&h=720&w=1280",
      "source": "https://vhx.imgix.net/site/assets/1231.jpg"
    },
    "advertising_keywords": []
  },
  "plans": ["public", "free", "standard"],
  "time_available": "2014-03-01T00:00:00Z",
  "time_unavailable": "2014-04-01T00:00:00Z",
  "files_count": 5,
  "plays_count": 1340,
  "finishes_count": 1204,
  "created_at": "2014-02-25T20:19:30Z",
  "updated_at": "2014-02-25T20:19:30Z"
}
```

<section class="text-2 contain">
  <p>Retrieves an existing video.</p>
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
      <td>The <code>href</code> of the video being retrieved.</td>
    </tr>
  </tbody>
</table>

<section class="text-2 contain">
  <strong class="block margin-top-large">Response</strong>
  <p>Videos that are associated with a collection will have relevant metadata automatically applied in the <code>metadata</code> property. This includes the following fields: <code>series_name</code>, <code>season_name</code>, <code>season_number</code>, <code>episode_number</code>, and <code>movie_name</code></p>

  <p class="is-internal">Videos that are associated with a product that have advertising enabled will include an <code>advertising</code> property in the response. The <code>advertising</code> object contains relevant data for the Ad provider and tag url. In addition, if advertising keywords have been setup they will be returned in the <code>metadata</code> property.</p>
</section>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="videos-list">List all Videos</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all Videos</h5>

> Definition

```shell
GET /videos
```

> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/videos" \
  -d query="term" \
  -d plan="standard" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/videos?page=1&query=term&plan=standard" },
    "first": { "href": "https://api.vhx.tv/videos?query=term&plan=standard" },
    "prev":  { "href": null },
    "next":  { "href": "https://api.vhx.tv/videos?page=2&query=term&plan=standard" },
    "last":  { "href": "https://api.vhx.tv/videos?page=5&query=term&plan=standard" }
  },
  "count": 100,
  "total": 500,
  "_embedded": {
    "videos": []
  }
}
```

<section class="text-2 contain">
  <p>Videos can be listed. A paginated result is returned.</p>
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
        <strong class="is-block text--navy">query</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The query to search and filter the paginated results.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">plan</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>
        The plan(s) to filter the paginated results. The value can be an array or comma separated string.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">sort</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The sort to order the results. Options are <code>alphabetical</code>, <code>newest</code>, <code>oldest</code>, <code>plays</code>, <code>finishes</code>, or <code>duration</code>.</td>
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

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="videos-list-files">List all Files</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all Files</h5>

> Definition

```shell
GET /videos/:id/files
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/videos/1/files?quality=adaptive&format=m3u8" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
[{
  "_links": {
    "self":   { "href": "https://api.vhx.tv/videos/1/files?quality=adaptive&format=m3u8" },
    "source": { "href": "https://video.vhx.tv/mymovie/adaptive.m3u8?token=f4v3v3i4c2o209_3" }
  },
  "quality": "adaptive",
  "format": "m3u8",
  "method": "hls",
  "size": {
    "bytes": 1073741824,
    "formatted": "1 GB"
  },
  "mime_type": "application/x-mpegURL",
  "created_at": "2014-02-25T20:19:30Z",
  "updated_at": "2014-02-25T20:19:30Z"
}]
```

<section class="text-2 contain">
  <p>Video files are private and protected by default. They can only be accessed by the account owner or an authorized customer.</p>
  <p>If building a customer-based application, <code>Authorizations</code> must be used so our player can properly authenticate and record analytics for the viewing customer.</p>
  <p>The returned source href has a TTL / expiration, so it is advised that the files API call happens just prior to a stream action.</p>
</section>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium"
id="videos-update">Update a Video</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Update a Video</h5>

> Definition

```shell
PUT /videos/:id
```

> Example Request

```shell
$ curl -X PUT "https://api.vhx.tv/videos/1" \
  -H "Content-Type: application/json" \
  -d '{"description":"My video description.", "metadata": {"producer": "Christoper Nolan",
"director": "Brad Pitt", "writers": ["Foo Bar", "Bar Foo"], "release_year": 2017, "custom_icon":
"image_url:https://vhx.imgix.net/site/assets/1231.jpg"}, "plans": ["public", "free", "standard"],
"time_available": "2014-03-01T00:00:00Z", "time_unavailable": "2014-04-01T00:00:00Z"}' \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/videos/1" },
    "files": { "href": "https://api.vhx.tv/videos/1/files" }
  },
  "_embedded": {
    "files": []
  },
  "id": 1,
  "title": "My Video",
  "description": "My video description.",
  "status": "processing",
  "duration": {
    "seconds": 7200,
    "formatted": "02:00:00"
  },
  "thumbnail": {
    "small": "https://cdn.vhx.tv/assets/thumbnails/default-small.png",
    "medium": "https://cdn.vhx.tv/assets/thumbnails/default-medium.png",
    "large": "https://cdn.vhx.tv/assets/thumbnails/default-large.png",
    "source": "https://cdn.vhx.tv/assets/thumbnails/original.jpg"
  },
  "tracks": {
    "subtitles": []
  },
  "advertising": {},
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
    "advertising_keywords": []
  },
  "plans": ["public", "free", "standard"],
  "files_count": 0,
  "plays_count": 1340,
  "finishes_count": 1204,
  "created_at": "2014-02-25T20:19:30Z",
  "updated_at": "2014-02-25T20:19:30Z"
}
```

<section class="text-2 contain">
  <p>No fields are required when updating a video. While you can use this endpoint to provide a source_url for a video that does not have one yet, updating an existing one is not supported at this time.</p>
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
        <strong class="is-block text--navy">title</strong>
        <span class="text--transparent text-3">string optional</span>
      </td>
      <td>A title for the video.</p></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">description</strong>
        <span class="text--transparent text-3">string optional</span>
      </td>
      <td>A description for the video.</p></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">short_description</strong>
        <span class="text--transparent text-3">optional string, default is null</span>
      </td>
      <td>A shorter description for the video.</p></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">thumbnail_url</strong>
        <span class="text--transparent text-3">optional string, default is null</span>
      </td>
      <td>
        A publicly accessible image URL. If you prefer, you can upload images directly to a video in the Vimeo OTT Publisher Admin.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">url</strong>
        <span class="text--transparent text-3">optional string, default is video title</span>
      </td>
      <td>
        The final part of the url of the video, ie the <code>video_title</code> in https://yoursite.com/video_title.
      </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">plans</strong>
        <span class="text--transparent text-3">array of strings</span>
      </td>
      <td>
        An array of plan types that you can use to set video availability.
        Values can be one or more of the following strings: <code>public</code>, <code>free</code>,
        <code>standard</code>.
        <br><br>
        The <code>public</code> plan makes the video object available without email
        registration or paid subscription.
        <br><br>
        The <code>free</code> plan makes the video object available for free, but requires user email
        registration
        <br><br>
        The <code>standard</code> plan makes the video object available to paying subscribers.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">canonical_collection</strong>
        <span class="text--transparent text-3">optional id, default is null</span>
      </td>
      <td>
        The canonical collection is the one collection that a video should be associated with above others even if it has been added to multiple collections. The best example of this is an episode of a TV show that perhaps gets added to a smaller selection of videos as a playlist.
        <br><br>
        To add a canonical collection, pass in a pair with a key of <code>id</code> and a value of the collection ID of the collection that should be this to the video.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">time_available</strong>
        <span class="text--transparent text-3">optional string, default is null</span>
      </td>
      <td>ISO8601 timestamp for scheduling the video to be available in the future. </br><code>YYYY-MM-DDTHH:MM:SSZ</code></p></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">time_unavailable</strong>
        <span class="text--transparent text-3">optional string, default is null</span>
      </td>
      <td>ISO8601 timestamp for scheduling the video to be unavailable in the future. </br><code>YYYY-MM-DDTHH:MM:SSZ</code></p></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">geo_available</strong>
        <span class="text--transparent text-3">optional string, default is null</span>
      </td>
      <td>
        Comma seperated list of country codes for the countries this collection should be available in.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">geo_unavailable</strong>
        <span class="text--transparent text-3">optional string, default is null</span>
      </td>
      <td>
        Comma seperated list of country codes for the countries this collection should not be available in.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">is_commenting_enabled</strong>
        <span class="text--transparent text-3">optional boolean</span>
      </td>
      <td>
        Determines if comments are allowed on the video. This value will be ignored if comments are disabled at the site level.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">tags</strong>
        <span class="text--transparent text-3">optional string</span>
      </td>
      <td>
        Tags that you want associated in the system with the video. Use comma's to separate multiple tags you would like associated with the video.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">genres</strong>
        <span class="text--transparent text-3">optional string</span>
      </td>
      <td>
        The genres that should be associated with this video. Use comma's to separate multiple genres you would like associated with the video.
        <br><br>
        Accepted values include:
        <br><br>
        <code>action</code>, <code>adventure</code>, <code>animation</code>, <code>anime</code>, <code>biography</code>, <code>bollywood</code>, <code>classics</code>, <code>comedy</code>, <code>crime</code>, <code>documentary</code>, <code>drama</code>, <code>educational</code>, <code>fantasy</code>, <code>game_show</code>, <code>history</code>, <code>holiday</code>, <code>horror</code>, <code>independent</code>, <code>kids_and_family</code>, <code>lgbt</code>, <code>music</code>, <code>musical</code>, <code>mystery</code>, <code>news</code>, <code>novelas</code>, <code>reality</code>, <code>romance</code>, <code>sci_fi</code>, <code>short_films</code>, <code>special_interest</code>, <code>sports</code>, <code>talk_show</code>, <code>teens</code>, <code>thriller</code>, <code>travel</code>, <code>war</code>, <code>western.</code>
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">casts</strong>
        <span class="text--transparent text-3">array of key value pairs</span>
      </td>
      <td>
        Use this to store information about the cast of the video. Each element of the array requires two keys: <code>actor</code> and <code>character</code> with a cooresponding value for each.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">crew</strong>
        <span class="text--transparent text-3">array of key value pairs</span>
      </td>
      <td>
        Use this to store information about the crew of the video. Each element of the array requires two keys: <code>name</code> and <code>role</code>.
        <br><br>
        Accepted role values include:
        <br><br>
        <code>actor</code>, <code>director</code>, <code>writer</code>, <code>producer</code>, <code>creator</code>, <code>voice</code>, <code>narrator</code>, <code>guest</code>, <code>host</code>, <code>anchor</code>, <code>music</code>, <code>executive_producer</code>, <code>executive_in_charge</code>, <code>head_writer</code>, <code>editor</code>, <code>other</code>.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">release_dates</strong>
        <span class="text--transparent text-3">array of key value pairs</span>
      </td>
      <td>
        Use this to store information about the release dates of the video. Each element of the array requires two keys: <code>date</code> and <code>location</code>.
        <br><br>
        The date value must be formatted as <code>YYYY-MM-DD</code>. The location value should be a two letter country code. If a location value is not provided, the date will be considered the release date everywhere.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">ratings</strong>
        <span class="text--transparent text-3">array of key value pairs</span>
      </td>
      <td>
        Use this to store information about the ratings of the video. Each element of the array requires two keys: <code>rating</code> and <code>location</code>.
        <br><br>
        Accepted rating values include:
        <br><br>
        <code>G</code>, <code>PG</code>, <code>PG-13</code>, <code>R</code>, <code>NC-17</code>, <code>U</code>, <code>UR</code>, <code>12A</code>, <code>12</code>, <code>15</code>, <code>18</code>, <code>R18</code>, <code>TV-Y</code>, <code>TV-Y7</code>, <code>TV-G</code>, <code>TV-PG</code>, <code>TV-14</code>, <code>TV-MA</code>.
        <br><br>
        The location value should be a two letter country code. If a location value is not provided, the rating will be considered the rating everywhere.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">advisories</strong>
        <span class="text--transparent text-3">array of key value pairs</span>
      </td>
      <td>
        Use this to store information about the advisories of the video. Each element of the array requires two keys: <code>advisory</code> and <code>location</code>.
        <br><br>
        Accepted advisory values include:
        <br><br>
        <code>D</code> for suggestive dialogue, <code>L</code> for coarse language, <code>S</code> for sexual content, <code>V</code> for violence, or <code>FV</code> for fantasy violence.
        <br><br>
        The location value should be a two letter country code. If a location value is not provided, the advisory will be considered the advisory everywhere.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">license</strong>
        <span class="text--transparent text-3">optional string</span>
      </td>
      <td>
        Used to exprese whether the video is <code>licensed</code> or <code>original</code> content.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">media_id</strong>
        <span class="text--transparent text-3">optional string</span>
      </td>
      <td>
        An internal identifier for the video in our system.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">media_type</strong>
        <span class="text--transparent text-3">optional string</span>
      </td>
      <td>
        Classify the type of content for the video.
        <br><br>
        Accepted values include: <code>movie</code>, <code>episode</code>, <code>live_sporting_event</code>, or <code>other</code>.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">movie_type</strong>
        <span class="text--transparent text-3">optional string</span>
      </td>
      <td>
        Classify the type of movie for a video that has a <code>media_type</code> of <code>movie</code>.
        <br><br>
        Accepted values include: <code>feature</code>, <code>short_film</code>, or <code>tv_movie</code>.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">movie_version</strong>
        <span class="text--transparent text-3">optional string</span>
      </td>
      <td>
        Classify the version of movie for a video that has a <code>media_type</code> of <code>movie</code>.
        <br><br>
        Accepted values include:
        <br><br>
        <code>standard</code>, <code>unrated</code>, <code>rated</code>, <code>uncut</code>, <code>directors_cut</code>, <code>extended</code>, <code>remastered</code>, <code>special_edition</code>, <code>alternate_ending</code>, <code>alternate_cut</code>, <code>editing_for_tv</code>.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">production_studios</strong>
        <span class="text--transparent text-3">array of key value pairs</span>
      </td>
      <td>
        Use this to store information about the production studio that produced the video. Each element of the array requires two keys: <code>name</code> and <code>country</code>.
        <br><br>
        The country value should be a two letter country code. If a country value is not provided, the production studio used everywhere.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">sports_type</strong>
        <span class="text--transparent text-3">optional string</span>
      </td>
      <td>
        Adds the sport associated with a video that has a <code>media_type</code> of <code>live_sporting_event</code>.
        <br><br>
        Accepted values include:
        <br><br>
        <code>afl</code>, <code>australian_football_leage</code>, <code>bundesliga</code>, <code>cfl</code>, <code>epl</code>, <code>formula_1</code>, <code>ipl</code>, <code>la_liga</code>, <code>mll</code>, <code>minor_league_baseball</code>, <code>mlb</code>, <code>mls</code>, <code>nascar</code>, <code>nll</code>, <code>national_league</code>, <code>national_womens_soccer_league</code>, <code>nba</code>, <code>ncaa</code>, <code>nhl</code>, <code>nrl</code>, <code>premiere_league</code>, <code>super_league</code>, <code>uefa</code>, <code>wnba</code>.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">episode_number</strong>
        <span class="text--transparent text-3">optional integer</span>
      </td>
      <td>
        The number episode for a video with a <code>media_type</code> of <code>episode</code>.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">production_id</strong>
        <span class="text--transparent text-3">optional string</span>
      </td>
      <td>
        The identifier for the production of a video with a <code>media_type</code> of <code>episode</code>.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">metadata</strong>
        <span class="text--transparent text-3">object of key value pairs</span>
      </td>
      <td>
        A set of key/value pairs that you can attach to a video object. It can be useful for
        storing additional information about the video in a structured format.
        <br><br>
        Metadata keys must be strings. There are a few reserved keys that
        are auto-generated, which cannot be updated. These reserved keys are:
        <code>advertising_keywords</code>, <code>series_name</code>,
        <code>season_name</code>, <code>season_number</code>,
        <code>episode_number</code>, and <code>movie_name</code>
        <br><br>
        Metadata values can be strings, integers, arrays, or images. An image metadata value must
        must be a url of an image, prefixed with the text <code>image_url:</code>.
      </td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium"
id="videos-delete">Delete a Video</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Delete a Video</h5>

> Definition

```shell
DELETE /videos/:id
```

> Example Request

```shell
$ curl -X DELETE "https://api.vhx.tv/videos/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```http
HEAD 204
```

<section class="text-2 contain">
  <p>
    This endpoint sends a request to delete a video. This process happens asynchronously in our system so you may not see the video be removed from your account right away. In the event that there is a problem deleting the video, the Vimeo OTT account owner will be notified.
  </p>
  <p>
    <strong>Please note that this is a destructive action and once the request is sent there will be no way to recover the deleted video.</strong>
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
        <strong class="is-block text--navy">href</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The <code>href</code> of the video being deleted.</td>
    </tr>
  </tbody>
</table>
