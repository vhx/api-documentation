<!-- ___Comments____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="comments">Comments</h2>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="comments-create">Create a Comment</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Create a Comment</h5>

> Definiton

```shell
POST /comments
```

> Example Request

```shell
$ curl -X POST "https://api.vhx.tv/comments" \
  -d  video="https://api.vhx.tv/videos/1" \
  -d  customer="https://api.vhx.tv/customers/1" \
  -d  content="Great video!" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self": { "href": "https://api.vhx.tv/comments/1" },
    "video": { "href": "https://api.vhx.tv/videos/1" }
    },
  "_embedded": {
    "customer": {},
    "comments": [],
    "video": {},
  },
  "id": 1,
  "video_id": 1,
  "content": "Great video!",
  "comments_count": 1,
  "created_at": "2020-04-02T19:40:26Z",
  "updated_at": "2020-04-02T19:40:26Z"
}
```

<section class="text-2 contain">
  <p>A comment can be created and added to a video.</p>
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
        <strong class="is-block text--navy">video</strong>
        <span class="text--yellow text-3">REQUIRED</span>
        <span class="text--transparent text-3">href</span>
      </td>
      <td>
        The <code>href</code> for the video the comment should be added to.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">customer</strong>
        <span class="text--yellow text-3">REQUIRED</span>
        <span class="text--transparent text-3">href</span>
      </td>
      <td>
        The <code>href</code> of the customer who is creating the comment.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">content</strong>
        <span class="text--yellow text-3">REQUIRED</span>
        <span class="text--transparent text-3">string</span>
      </td>
      <td>
        The actual content of the comment being created.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">comment</strong>
        <span class="text--transparent text-3">optional href</span>
      </td>
      <td>
        The <code>href</code> of a comment that is being replied to. This is optional and can only be done to comments that are not replies themselves.
      </td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="comments-get">Retrieve a Comment</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve a Comment</h5>

> Definiton

```shell
GET /comments/:id
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/comments/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self": { "href": "https://api.vhx.tv/comments/1" },
    "video": { "href": "https://api.vhx.tv/videos/1" }
    },
  "_embedded": {
    "customer": {},
    "comments": [],
    "video": {},
  },
  "id": 1,
  "video_id": 1,
  "content": "Great video!",
  "comments_count": 1,
  "created_at": "2020-04-02T19:40:26Z",
  "updated_at": "2020-04-02T19:40:26Z"
}
```

<section class="text-2 contain">
  <p>Retrieves a single comment</p>
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
        <strong class="is-block text--navy">comment</strong>
        <span class="text--yellow text-3">REQUIRED</span>
        <span class="text--transparent text-3">href</span>
      </td>
      <td>
        The <code>href</code> of the comment being retrieved.
      </td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="comments-list">List all Comments</h3>

> <h5 class="head-5 text--white margin-bottom-medium">List all Comments</h5>

> Definiton

```shell
GET /comments
```

> Example Request

```shell
$ curl -X GET -G "https://api.vhx.tv/comments" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self": { "href": "https://api.vhx.tv/comments?video=:href&page=1" },
    "first": { "href": "https://api.vhx.tv/comments?video=:href&page=1" },
    "prev": { "href": null },
    "next": { "href": "https://api.vhx.tv/comments?video=:href&page=2" },
    "last": { "href": "https://api.vhx.tv/comments?video=:href&page=5" }
  },
  "count": 1,
  "total": 1,
  "_embedded": {
    "comments": []
  }
}
```

<section class="text-2 contain">
  <p>Retrieves all comments for a given video.</p>
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
        <strong class="is-block text--navy">video</strong>
        <span class="text--yellow text-3">REQUIRED</span>
        <span class="text--transparent text-3">href</span>
      </td>
      <td>
        The <code>href</code> of a video.
      </td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="comments-report">Report a Comment</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Report a Comment</h5>

> Definiton

```shell
POST /comments/:id/report
```

> Example Request

```shell
$ curl -X POST "https://api.vhx.tv/comments/1/report" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{ 
  "message": "Comment reported! Thank you"
}
```

<section class="text-2 contain">
  <p>By offering commenting on your videos, there is a realistic chance that you will get some spam or unpleasant comments. In that situation, we offer this endpoint to report that comment. You can manage these flagged comments in your Vimeo OTT Publisher Admin.</p>
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
        <strong class="is-block text--navy">comment</strong>
        <span class="text--yellow text-3">REQUIRED</span>
        <span class="text--transparent text-3">href</span>
      </td>
      <td>
        The <code>href</code> of the comment being reported.
      </td>
    </tr>
  </tbody>
</table>
