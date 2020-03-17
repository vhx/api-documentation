<!-- ___COLLECTIONS____________________________ -->
<h2 class="is-api head-3 margin-top-large margin-bottom-medium" id="authorizations">Authorizations</h2>

<section class="text-2 contain">
  <p>An authorization grants playback access for a given customer and video.</p>
  <p>The response includes an embeddable iframe with an expiring token that is used to authenticate the Vimeo OTT player on the customers behalf. This enables a customer-to-video playback session which feeds into video analytics and can be controlled with the <a href="/player">Player API</a>.</p>
</section>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="authorizations-create">Create an Authorization</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Create an Authorization</h5>

> Definition

```shell
POST /authorizations
```

> Example Request

```shell
$ curl -X POST "https://api.vhx.tv/authorizations" \
  -d customer="https://api.vhx.tv/customers/1" \
  -d video="https://api.vhx.tv/videos/1" \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "customer": {
      "href": "https://api.vhx.tv/customers/1"
    },
    "video": {
      "href": "https://api.vhx.tv/videos/1"
    }
  },
  "token": "QVJ-cavyvwSX6JpafMCX7zsd1wKg2XfDuZnN",
  "expires_at": "2015-11-10T23:46:46Z",
  "player": {
    "host": "https://embed.vhx.tv",
    "path": "/videos/1",
    "html": "<iframe src=\"https://embed.vhx.tv/videos/1?authorization=QVJ-cavyvwSX6JpafMCX7zsd1wKg2XfDuZnN\" width=\"640\" height=\"360\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"
  },
  "created_at": "2015-11-10T22:46:46Z",
  "updated_at": "2015-11-10T22:46:46Z"
}
```

<section class="text-2 contain">
  <p>Creates an Authorization for authenticating video playback.</p>
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
        <strong class="is-block text--navy">customer</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The <code>href</code> of the customer.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">video</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The <code>href</code> of the video.</td>
    </tr>
  </tbody>
</table>
