<!-- ___ANALYTICS____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="analytics">Analytics</h2>

<section class="text-2 contain">
  <p>A resource for retrieving video and customer analytics. Gain insights on how people are watching content.</p>
</section>


<!-- ___GENERAL_PLAYBACK_____________________ -->
<h3 class="text-2 text--navy text--bold margin-top-xlarge margin-bottom-medium" id="analytics-playback">General Playback</h3>

> <h5 class="head-5 text--white margin-bottom-medium">General Playback</h5>

> Definiton

```shell
GET /analytics
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/analytics" \
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
      "href": "determine correct link format!" 
    }
  },
  "to": "2016-05-31T23:59:59Z",
  "from": "2016-05-24T00:00:00Z",
  "by": "day",
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
      <td>Must be <code>video</code></td>
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


<!-- ___PLAYBACK_BY_PLATFORM_________________ -->
<h3 class="text-2 text--navy text--bold margin-top-xlarge margin-bottom-medium" id="analytics-platforms">Playback by Platform</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Playback by Platform</h5>

> Definiton

```shell
GET /analytics
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/analytics" \
  -d type=video.platforms \
  -d video_id=1 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self": {
      "href": "determine correct link structure!"
    }
  },
  "to": "2016-06-01T23:59:59Z",
  "from": "2016-05-07T00:00:00Z",
  "data": [
    {
      "video_id": "69771",
      "plays": "440",
      "finishes": "427",
      "seconds": "6859430",
      "platform": "Android"
    },
    {
      "video_id": "69771",
      "plays": "771",
      "finishes": "395",
      "seconds": "768220",
      "platform": "iPhone"
    },
    {
      "video_id": "69771",
      "plays": "363",
      "finishes": "223",
      "seconds": "640790",
      "platform": "Roku"
    },
    {
      "video_id": "69771",
      "plays": "306",
      "finishes": "130",
      "seconds": "269620",
      "platform": "iPad"
    },
    {
      "video_id": "69771",
      "plays": "0",
      "finishes": "0",
      "seconds": "0",
      "platform": "Other"
    },
    {
      "video_id": "69771",
      "plays": "5512",
      "seconds": "7318450",
      "finishes": "3724",
      "platform": "Web"
    },
    {
      "video_id": "69771",
      "plays": "0", 
      "seconds": "0", 
      "finishes": "0", 
      "platform": "Apple TV"
    }
  ]
}
```

<section class="text-2 contain margin-bottom-medium">
  See which platforms customers are using to play and finish videos. Available both as aggregate and time series data.
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


<!-- ___PLAYBACK_BY_GEOGRAPHY________________ -->
<h3 class="text-2 text--navy text--bold margin-top-xlarge margin-bottom-medium" id="analytics-geography">Playback by Geography</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Playback by Geography</h5>

> Definiton

```shell
GET /analytics
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/analytics" \
  -d type=video.geography \
  -d video_id=1 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self": {
      "href": "determine correct link format!"
    }
  },
  "to": "2016-06-01T23:59:59Z",
  "from": "2016-05-14T00:00:00Z",
  "data": [
    {
      "video_id": "70917",
      "country": "United States",
      "plays": "5805",
      "finishes": "4289",
      "seconds": "8581460",
      "country_code": "USA"
    },
    {
      "video_id": "70917",
      "country": "United Kingdom",
      "plays": "229",
      "finishes": "139",
      "seconds": "290870",
      "country_code": "GBR"
    },
    {
      "video_id": "70917",
      "country": "Canada",
      "plays": "192",
      "finishes": "112",
      "seconds": "165830",
      "country_code": "CAN"
    },
    {
      "video_id": "70917",
      "country": "New Zealand",
      "plays": "1",
      "finishes": "1",
      "seconds": "12620",
      "country_code": "NZL"
    }
  ]
}
```

<section class="text-2 contain margin-bottom-medium">
  See where customers are playing and finishing videos. Available both as aggregate and time series data.
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
      <td>Must be <code>video.geography</code></td>
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



<!-- ___PLAYBACK_BY_SUBTITLE________________ -->
<h3 class="text-2 text--navy text--bold margin-top-xlarge margin-bottom-medium" id="analytics-subtitles">Playback by Subtitle</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Playback by Subtitle</h5>

> Definiton

```shell
GET /analytics
```

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/analytics" \
  -d type=video.subtitles \
  -d video_id=1 \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> Example Response

```json
{
  "_links": {
    "self": {
      "href": "determine correct link structure!"
    }
  },
  "to": "2016-06-01T23:59:59Z",
  "from": "2016-05-14T00:00:00Z",
  "data": [
    {
      "video_id": "70917",
      "country": "United States",
      "plays": "5805",
      "finishes": "4289",
      "seconds": "8581460",
      "country_code": "USA"
    },
    {
      "video_id": "70917",
      "country": "United Kingdom",
      "plays": "229",
      "finishes": "139",
      "seconds": "290870",
      "country_code": "GBR"
    },
    {
      "video_id": "70917",
      "country": "Canada",
      "plays": "192",
      "finishes": "112",
      "seconds": "165830",
      "country_code": "CAN"
    },
    {
      "video_id": "70917",
      "country": "New Zealand",
      "plays": "1",
      "finishes": "1",
      "seconds": "12620",
      "country_code": "NZL"
    }
  ]
}
```

<section class="text-2 contain margin-bottom-medium">
  See which subtitles are being used to play and finish videos. Available both as aggregate and time series data.
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
      <td>Must be <code>video.subtitles</code></td>
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