<!-- ___VIDEOS____________________________ -->
<h2 class="is-api head-3 margin-top-large margin-bottom-medium" id="videos">Videos</h2>

<section class="text-2 contain">
  <p>A video is a playable resource. In addition to it's core properties, a video has a set of files available to stream or download, each with many file renditions. A particular file has a specific quality, format, method, and mime type:</p>
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
      <td>quality</td>
      <td>1080p, 720p, 540p, 480p, 360p, adaptive</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>format</td>
      <td>m3u8, mpd, mp4, webm, ogg</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>method</td>
      <td>hls, dash, progressive</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>mime_type</td>
      <td>application/x-mpegURL, application/dash+xml, video/mp4</td>
    </tr>
  </tbody>
</table>

<section class="text-2 contain margin-bottom-large">
  <p>Video objects also have tracks. This includes subtitles or chapters tracks. A subtitle track is a sidecar WebVTT or SRT file.</p>
</section>

<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="videos-create">Create a Video</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Create a Video</h5>

> Definiton

```
POST /videos
```

> Example Request

```shell
$ curl -X POST "https://api.vhx.tv/videos" \
  -d title="My Video" \
  -d description="My video description." \
  -d source_url=s3:://YOUR_BUCKET_NAME/FILE.mp4 \
  -d site=https://api.vhx.tv/sites/1 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/videos/1" },
    "site":  { "href": "https://api.vhx.tv/sites/1" },
    "files": { "href": "https://api.vhx.tv/videos/1/files" }
  },
  "_embedded": {
    "site": {},
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
      <td>An accessible master video file per our compression settings. To grant us permission to download the video source_url from your S3 bucket, see our S3 policy.</p></td>
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

```
GET /videos/:id
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/videos/:id" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/videos/1" },
    "site":  { "href": "https://api.vhx.tv/sites/1" },
    "files": { "href": "https://api.vhx.tv/videos/1/files" }
  },
  "_embedded": {
    "site": {},
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
  <p>Retrieves an existing video. You only need to request or supply the UUID that was returned upon video creation.</p>
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
      <td class="nowrap">
        <strong class="is-block text--navy">video</strong>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The UUID for the video.</td>
    </tr>
  </tbody>
</table>


<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="videos-list">List all Videos</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all Videos</h5>

> Definiton

```
GET /videos
```

> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/videos" \
  -d subscription=https://api.vhx.tv/subscriptions/1 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/videos?page=1" },
    "first": { "href": "https://api.vhx.tv/videos" },
    "prev":  { "href": null },
    "next":  { "href": "https://api.vhx.tv/videos?page=2" },
    "last":  { "href": "https://api.vhx.tv/videos?page=5" }
  },
  "count": 100,
  "total": 500,
  "_embedded": {
    "videos": []
  }
}
```

<section class="text-2 contain">
  <p>Videos can be listed for a given subscription, package, or site. A paginated result is returned.</p>
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
      <td class="nowrap">
        <strong class="is-block text--navy">package</strong>
        <span class="text--transparent text-3">optional, default is null</span>
      </td>
      <td>The UUID of the package.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">site</strong>
        <span class="text--transparent text-3">optional, default is null</span>
      </td>
      <td>The UUID of the site.</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="videos-list-files">List all Video Files</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all Video Files</h5>

> Definiton

```
GET /videos/:id/files
```
> Query by type

```
GET /videos/:id/files?quality=adaptive&format=m3u8
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/videos/:id/files?quality=adaptive&format=m3u8" \
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
  <p>Video files are private and can be accessed by the account owner or viewing customer. If building a customer-based application, authorizations or Oauth2 must be used so our player can properly authenticate and record analytics. The returned source href has a TTL / expiration, so it is advised that the files API call happens just prior to a stream or download action.</p>
</section>