<!-- ___ANALYTICS____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="analytics">Analytics</h2>

<section class="text-2 contain">
  <p>A resource for retrieving video and customer analytics. Gain insights on how many plays and finishes can be attributed to customers as aggregate or time series data. Retrieve data on all video playbacks or by platform, country or subtitle.</p>
</section>


<!-- ___GENERAL_PLAYBACK_____________________ -->
<h3 class="text-2 text--navy text--bold margin-top-xlarge margin-bottom-medium" id="analytics-by-video">By Video</h3>

> <h5 class="head-5 text--white margin-bottom-medium">By Video</h5>

> Definiton

```shell
GET /analytics
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/analytics" \
  -d type=video \
  -d video_id=1 \
  -d from=2-weeks-ago \
  -d by=day \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self": { 
      "href": "https://api.vhx.tv/analytics?type=video&video_id=1&by=day&from=2-weeks-ago"
    }
  },
  "to": "2016-07-01T23:59:59Z",
  "from": "2016-05-24T00:00:00Z",
  "by": "day",
  "type": "video",
  "data": 
  [ 
    {
      "interval_timestamp": "2016-05-24T00:00:00Z",
      "plays": "3",
      "seconds": "3640",
      "finishes": "2"
    },
    {
      "interval_timestamp": "2016-05-25T00:00:00Z",
      "plays": "39",
      "seconds": "52170",
      "finishes": "24"
    },
    {
      "interval_timestamp": "2016-05-26T00:00:00Z",
      "plays": "21",
      "seconds": "30660",
      "finishes": "15"
    },
    {
      "interval_timestamp": "2016-05-27T00:00:00Z",
      "plays": "20",
      "seconds": "19730",
      "finishes": "15"
    },
    {
      "interval_timestamp": "2016-05-28T00:00:00Z",
      "plays": "30",
      "seconds": "84130",
      "finishes": "32"
    },
    {
      "interval_timestamp": "2016-05-29T00:00:00Z",
      "plays": "39",
      "seconds": "111390",
      "finishes": "37"
    },
    {
      "interval_timestamp": "2016-05-30T00:00:00Z",
      "plays": "81",
      "seconds": "89150",
      "finishes": "62"
    },
    {
      "interval_timestamp": "2016-05-31T00:00:00Z",
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
      <td>Could be one of <code>video</code>, <code>video.platforms</code>, <code>video</code>, <code>video.geography</code> or <code>video.subtitles</code>.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">by</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>Presence of the <code>by</code> parameter implies a request for a time series report. Acceptable values include <code>hour</code>, <code>day</code>, <code>week</code>, <code>month</code> or <code>year</code>. If a <code>by</code> parameter is included but the value is not an acceptable option, it defaults to <code>day</code></td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">from</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The start date or time of the dataset. Defaults to the creation time of the video. Can be sent as <code>YYYY-MM-DDTHH:MM:SSZ</code> (timezone defaults to EST), <code>YYYY-MM-DD</code> (time defaults to midnight EST on that date) or as <code>1-day-ago</code>, <code>3-weeks-ago</code>, <code>2-months-ago</code>, etc.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">to</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional</span>
      </td>
      <td>The end date or time of the dataset. Defaults to the current time (EST). Can be sent as <code>YYYY-MM-DDTHH:MM:SSZ</code> (timezone defaults to EST), <code>YYYY-MM-DD</code> (time defaults to midnight EST on that date) or as <code>1-day-ago</code>, <code>3-weeks-ago</code>, <code>2-months-ago</code>, etc.</td>
    </tr>
  </tbody>
</table>