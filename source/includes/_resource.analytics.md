<!-- ___ANALYTICS____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="analytics">Analytics</h2>

<section class="text-2 contain">
  <p>A resource for retrieving video and customer analytics. Gain insights on how people are watching content.</p>
</section>

<h3 class="text-2 text--navy text--bold margin-top-xlarge margin-bottom-medium" id="analytics-playback">General Playback</h3>

> <h5 class="head-5 text--white margin-bottom-medium">General Playback</h5>

> Definiton

```shell
GET /analytics
```

> Example Request

```shell
$ curl -X GET  "https://api.vhx.tv/analytics" \
  -d type=video \
  -d video_id=1 \
  -d from=1-week-ago \
  -d by=day \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self": {
      "href": 
        "determine correct structure for this link!"
      }
    },
  "to": "2016-05-31",
  "from": "2016-05-24",
  "by": "day",
  "data": 
  [ 
    {
      "interval_timestamp": "2016-05-24 00:00:00",
      "plays": "3",
      "seconds": "3640",
      "finishes": "2"
    },
    {
      "interval_timestamp": "2016-05-25 00:00:00",
      "plays": "39",
      "seconds": "52170",
      "finishes": "24"
    },
    {
      "interval_timestamp": "2016-05-26 00:00:00",
      "plays": "21",
      "seconds": "30660",
      "finishes": "15"
    },
    {
      "interval_timestamp": "2016-05-27 00:00:00",
      "plays": "20",
      "seconds": "19730",
      "finishes": "15"
    },
    {
      "interval_timestamp": "2016-05-28 00:00:00",
      "plays": "30",
      "seconds": "84130",
      "finishes": "32"
    },
    {
      "interval_timestamp": "2016-05-29 00:00:00",
      "plays": "39",
      "seconds": "111390",
      "finishes": "37"
    },
    {
      "interval_timestamp": "2016-05-30 00:00:00",
      "plays": "81",
      "seconds": "89150",
      "finishes": "62"
    },
    {
      "interval_timestamp": "2016-05-31 00:00:00",
      "plays": "56",
      "seconds": "108200",
      "finishes": "45"
    }
  ]
}
```

<section class="text-2 contain margin-bottom-medium">
  See how many times customers have played and finished videos. Available both as aggregate and time series data.
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
        <strong class="is-block text--navy">video_id</strong>
        <span class="is-block text--transparent text-3">integer</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The video ID.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">type</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>Must be <code>video</code></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">by</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>Presence of a <code>by</code> parameter implies a request for a time series report. Could be one of <code>hour</code>, <code>day</code>, <code>week</code>, <code>month</code> or <code>year</code>. If a <code>by</code> parameter is included but the value is not one of these options, it defaults to <code>day</code></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">from</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The start date or time of the dataset. Defaults to the creation time of the video. Can be sent as <code>YYYY-MM-DD TT:TT:TT</code> (timezone defaults to EST), <code>YYYY-MM-DD</code> (time defaults to midnight EST on that date) or as <code>1-day-ago</code>, <code>3-weeks-ago</code>, <code>2-months-ago</code>, etc.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">to</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The end date or time of the dataset. Defaults to the current time (EST). Can be sent as <code>YYYY-MM-DD TT:TT:TT</code> (timezone defaults to EST), <code>YYYY-MM-DD</code> (time defaults to midnight EST on that date) or as <code>1-day-ago</code>, <code>3-weeks-ago</code>, <code>2-months-ago</code>, etc.</td>
    </tr>
  </tbody>
</table>

<h3 class="text-2 text--navy text--bold margin-top-xlarge margin-bottom-medium" id="analytics-platforms">Playback by Platform</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Playback by Platform</h5>

> Definiton

```shell
GET /analytics
```

> Example Request

```shell
$ curl -X GET  "https://api.vhx.tv/analytics" \
  -d type=video.platforms \
  -d video_id=1 \
  -d from=6-months-ago \
  -d by=week \
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
  "from": "2015-11-30",
  "to": "2016-05-31",
  "data": [
    {
      "video_id": "1",
      "plays": "48",
      "seconds": "39990",
      "finishes": "24"
    }
  ]
}
```

<section class="text-2 contain margin-bottom-medium">
  See how many times customers have played and finished videos. Available both as aggregate and time series data.
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
        <strong class="is-block text--navy">video_id</strong>
        <span class="is-block text--transparent text-3">integer</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>The video ID.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">type</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>Must be <code>video.platforms</code></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">by</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>Presence of a <code>by</code> parameter implies a request for a time series report. Could be one of <code>hour</code>, <code>day</code>, <code>week</code>, <code>month</code> or <code>year</code>. If a <code>by</code> parameter is included but the value is not one of these options, it defaults to <code>day</code></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">from</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The start date or time of the dataset. Defaults to the creation time of the video. Can be sent as <code>YYYY-MM-DD TT:TT:TT</code> (timezone defaults to EST), <code>YYYY-MM-DD</code> (time defaults to midnight EST on that date) or as <code>1-day-ago</code>, <code>3-weeks-ago</code>, <code>2-months-ago</code>, etc.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">to</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The end date or time of the dataset. Defaults to the current time (EST). Can be sent as <code>YYYY-MM-DD TT:TT:TT</code> (timezone defaults to EST), <code>YYYY-MM-DD</code> (time defaults to midnight EST on that date) or as <code>1-day-ago</code>, <code>3-weeks-ago</code>, <code>2-months-ago</code>, etc.</td>
    </tr>
  </tbody>
</table>