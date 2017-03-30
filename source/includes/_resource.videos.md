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
  <p>DRM (Digital Rights Management) is available, per request, for an additional cost. We support Google Widevine, Adobe Access, and OMA.</p>
</section>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="videos-create">Create a Video</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Create a Video</h5>

> Definiton

```shell
POST /videos
```

```ruby
Vhx::Video.create()
```

```node
vhx.videos.create();
```

```javascript
// Not available for client-side requests.
```

```php
<?php\VHX\Videos::create();
```

> Example Request

```shell
$ curl -X POST "https://api.vhx.tv/videos" \
  -H "Content-Type: application/json" \
  -d '{"title":"My Video","description":"My video description.",
"source_url":"s3:://YOUR_BUCKET_NAME/FILE.mp4", "metadata": {"director": "Brad Pitt", "writers":
["Foo Bar", "Bar Foo"], "release_year": 2017, "custom_icon":
"image_url:https://vhx.imgix.net/site/assets/1231.jpg"}, "plans": ["public", "free", "standard"]}' \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
video = Vhx::Video.create({
  title: 'My Video',
  description: 'My video description.',
  source_url: 's3:://YOUR_BUCKET_NAME/FILE.mp4',
  metadata: {
    director: 'Brad Pitt',
    writers: ['Foo Bar', 'Bar Foo'],
    release_year: 2017,
    custom_icon: "image_url:https://vhx.imgix.net/site/assets/1231.jpg",
  },
  plans: ['public', 'free', 'standard']
})
```

```node
vhx.videos.create({
  title: 'My Video',
  description: 'My video description.',
  source_url: 's3:://YOUR_BUCKET_NAME/FILE.mp4',
  metadata: {
    director: 'Brad Pitt',
    writers: ['Foo Bar', 'Bar Foo'],
    release_year: 2017,
    custom_icon: "image_url:https://vhx.imgix.net/site/assets/1231.jpg"
  },
  plans: ['public', 'free', 'standard']
}, function(err, video) {
   // asynchronously called
});
```

```javascript
// Not available for client-side requests.
```

```php
<?php$video = \VHX\Videos::create(array(
  'title' => 'My Video',
  'description' => 'My video description.',
  'source_url' => 's3:://YOUR_BUCKET_NAME/FILE.mp4',
  'metadata' => array(
    'director' => 'Brad Pitt',
    'writers' => ['Foo Bar', 'Bar Foo'],
    'release_year' => 2017,
    'custom_icon' => 'image_url:https://vhx.imgix.net/site/assets/1231.jpg'
  ),
  'plans' => ['public', 'free', 'standard']
));
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
      <td>An accessible master video file per our compression settings. To grant us permission to download the video source_url from your S3 bucket, see our <a href="https://gist.github.com/ksheurs/d57e4d1857c7ef9465fb" target="_blank">S3 policy</a>.</p></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">description</strong>
        <span class="text--transparent text-3">optional string, default is null</span>
      </td>
      <td>A description for the video.</p></td>
    </tr>

    <tr class="is-internal text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">metadata</strong>
        <span class="text--transparent text-3">object of key value pairs</span>
      </td>
      <td>
      A set of key/value pairs that you can attach to a video object. It can be useful for
      storing additional information about the video in a structured format. <br><br>

      Metadata keys must be strings. There are a few reserved keys that
      are auto-generated, which cannot be updated. These reserved keys are:
      <code>advertising_keywords</code>, <code>series_name</code>, 
      <code>season_name</code>, <code>season_number</code>,
      <code>episode_number</code>, and <code>movie_name</code><br><br>

      Metadata values can be strings, integers, arrays, or images. An image metadata value must 
      must be a url of an image, hosted on vhx, prefixed with the text <code>image_url:</code>. 
      </td>
    </tr>

    <tr class="is-internal text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">plans</strong>
        <span class="text--transparent text-3">array of strings</span>
      </td>
      <td>
      An array of plan types that you can use to set video availability. 
      Values can be one or more of the following strings: <code>public</code>, <code>free</code>,
      <code>standard</code>.<br><br>

      The <code>public</code> plan makes the video object available without email 
      registration or paid subscription.<br><br>
      
      The <code>free</code> plan makes the video object available for free, but requires user email
      registration<br><br>

      The <code>standard</code> plan makes the video object available to paying subscribers.
      </td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="videos-get">Retrieve a Video</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve a Video</h5>

> Definiton

```shell
GET /videos/:id
```

```ruby
Vhx::Videos.retrieve()
```

```node
vhx.videos.retrieve();
```

```javascript
vhxjs.videos.retrieve();
```

```php
<?php\VHX\Videos::retrieve();
```
> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/videos/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
video = Vhx::Video.retrieve("https://api.vhx.tv/videos/1")
```

```node
vhx.videos.retrieve("https://api.vhx.tv/videos/1", function(err, video) {
  // asynchronously called
});
```

```javascript
vhxjs.videos.retrieve("https://api.vhx.tv/videos/1", function(err, video) {
  // asynchronously called
});
```

```php
<?php$video = \VHX\Videos::retrieve("https://api.vhx.tv/videos/1");
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
    "provider": "dfp"
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
  "files_count": 5,
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

> Definiton

```shell
GET /videos
```

```ruby
Vhx::Video.all()
```

```node
vhx.videos.all();
```

```javascript
vhxjs.videos.all();
```

```php
<?php\VHX\Videos::all();
```
> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/videos" \
  -d query="term" \
  -d plan="standard" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
video = Vhx::Video.all({
  query: 'term',
  plan: 'standard'
})
```

```node
vhx.videos.all({
  query: 'term',
  plan: 'standard'
}, function(err, videos) {
   // asynchronously called
});
```

```javascript
vhxjs.videos.all({
  query: 'term',
  plan: 'standard'
}, function(err, videos) {
   // asynchronously called
});
```

```php
<?php$videos = \VHX\Videos::all(array(
  'query' => 'term',
  'plan' => 'standard'
));
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
      <td>The plan(s) to filter the paginated results. The value can be an array or comma separated
string. </td>
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

> Definiton

```shell
GET /videos/:id/files
```

```ruby
Vhx::Video.files()
```

```node
vhx.videos.files();
```

```javascript
// Not available for client-side requests.
```

```php
<?php\VHX\Videos::files();
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/videos/1/files?quality=adaptive&format=m3u8" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
video = Vhx::Video.retrieve("https://api.vhx.tv/videos/1")
video.files({ quality: 'adaptive', format: 'm3u8' })
```

```node
vhx.videos.files({
  video: 'https://api.vhx.tv/video/1'
  quality: 'adaptive',
  format: 'm3u8'
}, function(err, files) {
   // asynchronously called
});
```

```javascript
// Not available for client-side requests.
```

```php
<?php$files = \VHX\Videos::files(array(
  'video' => 'https://api.vhx.tv/videos/1'
  'quality' => 'adaptive',
  'format' => 'm3u8'
));
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

```ruby
Vhx::Video.update()
```

```node
vhx.videos.update();
```

```javascript
// Not available for client-side requests.
```

```php
<?php\VHX\Videos::update();
```

> Example Request

```shell
$ curl -X PUT "https://api.vhx.tv/videos/1" \
  -H "Content-Type: application/json" \
  -d '{"description":"My video description.", "metadata": {"producer": "Christoper Nolan",
"director": "Brad Pitt", "writers": ["Foo Bar", "Bar Foo"], "release_year": 2017, "custom_icon":
"image_url:https://vhx.imgix.net/site/assets/1231.jpg"}, "plans": ["public", "free", "standard"]}' \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
video = Vhx::Video.retrieve("https://api.vhx.tv/videos/1").update({
  description: 'A new description',
  metadata: {
    director: 'Brad Pitt',
    writers: ['Foo Bar', 'Bar Foo'],
    release_year: 2017,
    producer: 'Christoper Nolan',
    custom_icon: "image_url:https://vhx.imgix.net/site/assets/1231.jpg",
  },
  plans: ["public", "free", "standard"],
})
```

```node
vhx.videos.update("https://api.vhx.tv/videos/1", {
  description: 'A new description',
  metadata: {
    director: 'Brad Pitt',
    writers: ['Foo Bar', 'Bar Foo'],
    release_year: 2017,
    producer: 'Christoper Nolan',
    custom_icon: "image_url:https://vhx.imgix.net/site/assets/1231.jpg"
  },
  plans: ["public", "free", "standard"],
}, function(err, video) {
  // asynchronously called
});
```

```javascript
// Not available for client-side requests.
```

```php
<?php$video = \VHX\Videos::update("https://api.vhx.tv/videos/1", array(
  'name' => 'A new description',
  'metadata' => array(
    'director' => 'Brad Pitt',
    'writers' => ['Foo Bar', 'Bar Foo'],
    'release_year' => 2017,
    'producer' => 'Christoper Nolan'
  ),
  'plans' => ['public', 'free', 'standard']
));
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
  "created_at": "2014-02-25T20:19:30Z",
  "updated_at": "2014-02-25T20:19:30Z"
}
```

<section class="text-2 contain">
  <p>No fields are required when updating a video.</p>
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
    <tr class="is-internal text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">metadata</strong>
        <span class="text--transparent text-3">object of key value pairs</span>
      </td>
      <td>
      A set of key/value pairs that you can attach to a video object. It can be useful for
      storing additional information about the video in a structured format. <br><br>

      Metadata keys must be strings. There are a few reserved keys that
      are auto-generated, which cannot be updated. These reserved keys are:
      <code>advertising_keywords</code>, <code>series_name</code>, 
      <code>season_name</code>, <code>season_number</code>,
      <code>episode_number</code>, and <code>movie_name</code><br><br>

      Metadata values can be strings, integers, arrays, or images. An image metadata value must 
      must be a url of an image, hosted on vhx, prefixed with the text <code>image_url:</code>. 
      </td>
    </tr>
    <tr class="is-internal text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">plans</strong>
        <span class="text--transparent text-3">array of strings</span>
      </td>
      <td>
      An array of plan types that you can use to set video availability. 
      Values can be one or more of the following strings: <code>public</code>, <code>free</code>,
      <code>standard</code>.<br><br>

      The <code>public</code> plan makes the video object available without email 
      registration or paid subscription.<br><br>
      
      The <code>free</code> plan makes the video object available for free, but requires user email
      registration<br><br>

      The <code>standard</code> plan makes the video object available to paying subscribers.
      </td>
    </tr>
  </tbody>
</table>
