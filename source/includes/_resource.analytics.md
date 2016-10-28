<!-- ___ANALYTICS____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="analytics">Analytics</h2>

<section class="text-2 contain">
  <p>Analytics give you access to data around your videos, customers, traffic, and platform income. You can gain insights on what your customers are watching, how many people are visiting your sites, the number of units you are selling, how many customers are subscribing and unsubscribing, and more via reports that can be easily retrieved from the VHX API.</p>

  <p>There are several different types of analytics reports that you can request. These types are outlined below.</p>
</section>

<table>
  <thead>
    <tr class="text-2">
      <th class="padding-medium">Type</th>
      <th class="padding-medium">Definition</th>
    </tr>
  </thead>

  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>traffic</strong></td>
      <td>Web traffic to your VHX site across various devices and browsers. This report is for web traffic only. It includes mobile browsers but does not include Branded App activity.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>income_statement</strong></td>
      <td>Income statements are a summary of your revenue and expenses for payout periods. Income statements are generated in monthly intervals for your account.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>units</strong></td>
      <td>Units are the amount of TVOD (transactional video on demand) products you have sold or have been redeemed (gifts, coupons) per unit of time. Units represent products that have been bought or rented.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>subscribers</strong></td>
      <td>Subscribers are the number of customers that are subscribed to your SVOD (subscription on demand) product per given time.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>churn</strong></td>
      <td>Churn gives you data around how many customers have unsubscribed in a given time period and their reasons (if provided) for doing so.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>video</strong></td>
      <td>Video reports give you insights on how many plays and finishes can be attributed to customers. Sub-reports include retrieving data by platform (<code>video.platforms</code>), country (<code>video.geography</code>) or by subtitles (<code>video.subtitles</code>).</td>
    </tr>    
  </tbody>
</table>


<!-- ___GENERAL_PLAYBACK_____________________ -->
<h3 class="text-2 text--navy text--bold margin-top-xlarge margin-bottom-medium" id="analytics-by-video">Retrieve a Report</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve a Report</h5>

> Definition

```shell
GET /analytics
```

```ruby
Vhx::Analytics.retrieve()
```

```javascript
vhx.analytics.report();
```

```php
\VHX\Analytics::report();
```

> Example Video Report Request
<p class="response-examples">
<select>
  <option>Traffic</option>
  <option>Income</option>
  <option>Units</option>
  <option>Subscribers</option>
  <option>Churn</option>
  <option>Video</option>
</select>
</p>


```shell
$ curl -X GET "https://api.vhx.tv/analytics" \
  -d type=video \
  -d video_id=1
  -d from=2-weeks-ago \
  -d by=day \
  -u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
video = Vhx::Analytics.retrieve("https://api.vhx.tv/videos/1")
```

```javascript
vhx.analytics.report({
  type: 'video',
  by: 'month',
  from: 'today',
  to: '1-year-ago'
}, function(err, report) {
  // asynchronously called
});
```

```php
$report = \VHX\Analytics::report(array(
  'type' => 'video',
  'by' => 'month',
  'from' => 'today',
  'to' => '1-year-ago'
));
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
        <strong class="is-block text--navy">type</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--yellow text-3">REQUIRED</span>
      </td>
      <td>Can be any of the report types described in the above table. This includes: <code>traffic</code>, <code>income_statement</code>, <code>units</code>, <code>subscribers</code>, <code>churn</code>, <code>video</code>, <code>video.platforms</code>, <code>video.geography</code> or <code>video.subtitles</code>.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">by</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional, defaults is by</span>
      </td>
      <td>Presence of the <code>by</code> parameter implies a request for a <strong>Time Series</strong> report. If not <code>by</code> parameter is supplied an <strong>Aggregate Report</strong> will be returned. Acceptable values include <code>hour</code>, <code>day</code>, <code>week</code>, <code>month</code> or <code>year</code>.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">from</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional, default is your<br>account's creation date (EST)</span>
      </td>
      <td>The start date or time of the dataset. See below for date formats.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="nowrap">
        <strong class="is-block text--navy">to</strong>
        <span class="is-block text--transparent text-3">string</span>
        <span class="text--transparent text-3">optional, default is <br>the current time (EST)</span>
      </td>
      <td>The end date or time of the dataset. See below for date formats.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">video_id</strong>
        <span class="is-block text--transparent text-3">integer</span>
        <span class="text--transparent text-3">optional, unless report is video</span>
      </td>
      <td>The video ID is <span class="text--yellow">required</span> for any <code>video</code> report type. For other report types it should be omitted.</td>
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

<section>
Dates can be in the following formats(a) <code>YYYY-MM-DD</code>, e.g. <strong>2015-12-31</strong>, where the time defaults to midnight EST on that date, or (b) <code>YYYY-MM-DDTHH:MM:SSZ</code> e.g. 2016-09-29T18:46:19Z, where the timezone defaults to EST, or (c) <code>[1..10]-[day|week|month|year]-ago</code>, e.g. <strong>1-day-ago</strong>, <strong>3-weeks-ago</strong>, <strong>2-months-ago</strong>, etc.</td>
</section>
