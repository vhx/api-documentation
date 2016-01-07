<!-- ___VIDEOS____________________________ -->
<h2 class="is-api head-3 margin-top-large margin-bottom-medium" id="videos">Videos</h2>

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
  <p>A video object has a tracks property. This includes subtitles or chapters tracks. A subtitle track is a sidecar WebVTT or SRT file.</p>
  <p>DRM (Digital Rights Management) is available, per request, for an additional cost. We support Google Widevine, Adobe Access, and OMA.</p>
</section>

<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="videos-create">Create a Video</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Create a Video</h5>

> Definiton

```shell
POST /videos
```

```ruby
Vhx::Video.create()
```

```javascript
vhx.videos.create();
```

```php
<?php\VHX\Videos::create();
```

> Example Request

```shell
$ curl -X POST "https://api.vhx.tv/videos" \
  -d title="My Video" \
  -d description="My video description." \
  -d source_url=s3:://YOUR_BUCKET_NAME/FILE.mp4 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
customer = Vhx::Video.create({
  title: 'My Video',
  description: 'My video description.',
  source_url: 's3:://YOUR_BUCKET_NAME/FILE.mp4'
})
```

```javascript
vhx.videos.create({
  title: 'My Video',
  description: 'My video description.',
  source_url: 's3:://YOUR_BUCKET_NAME/FILE.mp4'
}, function(err, video) {
   // asynchronously called
});
```

```php
<?php$video = \VHX\Videos::create(array(
  'title' => 'My Video',
  'description' => 'My video description.',
  'source_url' => 's3:://YOUR_BUCKET_NAME/FILE.mp4'
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
    "files": [],
    "transcode": {
      "progress": 0
    }
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
    "large": "https://cdn.vhx.tv/assets/thumbnails/default-large.png"
  },
  "tracks": {
    "subtitles": []
  },
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
  </tbody>
</table>

<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="videos-get">Retrieve a Video</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve a Video</h5>

> Definiton

```shell
GET /videos/:id
```

```ruby
Vhx::Videos.find()
```

```javascript
vhx.videos.retrieve();
```

```php
<?php\VHX\Videos::retrieve();
```
> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/videos/:id" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
customer = Vhx::Video.find(125)
```

```javascript
vhx.videos.retrieve(125, function(err, video) {
  // asynchronously called
});
```

```php
<?php$video = \VHX\Videos::retrieve(125);
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
    "large": "https://cdn.vhx.tv/assets/thumbnails/default-large.png"
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
        <strong class="is-block text--navy">id</strong>
        <span class="is-block text--transparent text-3">integer</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The id of the video being retrieved.</td>
    </tr>
  </tbody>
</table>


<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="videos-list">List all Videos</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all Videos</h5>

> Definiton

```shell
GET /videos
```

```ruby
Vhx::Video.list()
```

```javascript
vhx.videos.list();
```

```php
<?php\VHX\Videos::all();
```
> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/videos" \
  -d query="term" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
video = Vhx::Video.list({
  query: 'term'
})
```

```javascript
vhx.videos.list({
  query: 'term'
}, function(err, videos) {
   // asynchronously called
});
```

```php
<?php$videos = \VHX\Videos::all(array(
  'query' => 'term'
));
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/videos?page=1&query=term" },
    "first": { "href": "https://api.vhx.tv/videos?query=term" },
    "prev":  { "href": null },
    "next":  { "href": "https://api.vhx.tv/videos?page=2&query=term" },
    "last":  { "href": "https://api.vhx.tv/videos?page=5&query=term" }
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

<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="videos-list-files">List all Video Files</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all Video Files</h5>

> Definiton

```shell
GET /videos/:id/files
```

```ruby
Vhx::Video.files()
```

```javascript
vhx.videos.files();
```

```php
<?php\VHX\Videos::files();
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/videos/:id/files?quality=adaptive&format=m3u8" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
files = Vhx::Video.files(465, {
  quality: 'adaptive',
  format: 'm3u8'
})
```

```javascript
vhx.videos.files(465, {
  quality: 'adaptive',
  format: 'm3u8'
}, function(err, files) {
   // asynchronously called
});
```

```php
$files = \VHX\Videos::files(465, array(
  quality => 'adaptive',
  format => 'm3u8'
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
