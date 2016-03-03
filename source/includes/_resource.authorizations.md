<!-- ___COLLECTIONS____________________________ -->
<h2 class="is-api head-3 margin-top-large margin-bottom-medium" id="authorizations">Authorizations</h2>

<section class="text-2 contain">
  <p>An authorization grants playback access for a given customer and video.</p>
  <p>The response includes an expiring token that is used to authenticate the VHX player on the customers behalf. This enables a customer-to-video playback session which feeds into video analytics.</p>
</section>

<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="authorizations-create">Create an Authorization</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Create an Authorization</h5>

> Definition

```shell
POST /authorizations
```

```ruby
Vhx::Authorizaton.create()
```

```javascript
vhx.authorizations.create();
```

```php
<?php\VHX\Authorizations::create();
```

> Example Request

```shell
$ curl -X POST "https://api.vhx.tv/authorizations" \
  -d customer=https://api.vhx.tv/customers/1 \
  -d video=https://api.vhx.tv/videos/1 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self": {
      "href": "http://api.crystal.dev/analytics?action=index&analytic%5Bsite_id%5D=11758&analytic%5Btype%5D=video&analytic%5Bvideo_id%5D=26642&by=&controller=api%2Fanalytics&format=json&from=2016-02-25+12%3A07%3A30+-0500&site_id=11758&to=2016-03-03+12%3A07%3A30+-0500&type=video&video_id=26642"
    },
    "video": {
      "href": "http://api.crystal.dev/videos/26642"
    }
  },
  "to": "2016-03-03",
  "from": "2016-02-25",
  "data": [
    {
      "video_id": "26642",
      "plays": "48",
      "seconds": "39990",
      "finishes": "24"
    }
  ]
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
