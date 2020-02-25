<!-- ___ANALYTICS____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="analytics">Analytics</h2>

<section class="text-2 contain">
  <p>Analytics give you access to data around your videos, customers, traffic, and platform income. You can gain insights on what your customers are watching, how many people are visiting your channel, the number of units you are selling, how many customers are subscribing and unsubscribing, and more via reports that can be easily retrieved from the VHX API.</p>
</section>

<h3 class="text-2 head-4 text--navy text--bold is-api padding-top-large margin-top-xlarge margin-bottom-medium" id="analytics-by-video">Retrieve a Report</h3>

<section class="text-2 contain">
  <p>There are several different types of analytics reports that you can request. These types are outlined below.</p>
</section>

<!-- ___GENERAL_PLAYBACK_____________________ -->

> <h5 class="head-5 text--white margin-bottom-medium">Retrieve a Report</h5>

> Definition

```shell
GET /analytics
```

> Example Report Request
<p class="response-examples" data-report="analytics">
<select class="btn btn-gray">
  <option value="traffic_aggregate">Traffic</option>
  <option value="income_statement">Income</option>
  <option value="units_aggregate">Units (Aggregate)</option>
  <option value="units_timeSeries">Units (Time Series)</option>
  <option value="subscribers_aggregate">Subscribers (Aggregate)</option>
  <option value="subscribers_timeSeries">Subscribers (Time Series)</option>
  <option value="churn_aggregate">Churn (Aggregate)</option>
  <option value="churn_timeSeries">Churn (Time Series)</option>
  <option value="video_aggregate">Video (Aggregate)</option>
  <option value="video_timeSeries">Video (Time Series)</option>
</select>
</p>

<p id="analytics_curl"></p>
```shell
```

> Example Response

<p id="analytics_response"></p>
```json
```

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
      <td>Units are the amount of TVOD (transactional video on demand) products you have sold or have been redeemed (gifts or coupons) per given period of time. Units represent products that have been bought or rented.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>subscribers</strong></td>
      <td>Subscribers are the number of customers that are subscribed to your SVOD (subscription on demand) product per given period of time.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>churn</strong></td>
      <td>Churn gives you data around how many customers have unsubscribed (either pausing or cancelling their subscription) per given time period and their reasons (if provided) for doing so.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong>video</strong></td>
      <td>Video reports give you insights on how many plays and finishes can be attributed to customers. Sub-reports include retrieving data by platform (<code>video.platforms</code>), country (<code>video.geography</code>) or by subtitles (<code>video.subtitles</code>).</td>
    </tr>    
  </tbody>
</table>

<section class="text-2 contain margin-bottom-medium">
<span class="text-2 text--navy margin-top-xlarge margin-bottom-medium" style="display: block; font-weight: bold;">Arguments</span>
 See below for required and optional arguments to pass to your report requests.
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
        <span class="text--transparent text-3">optional, defaults is null</span>
      </td>
      <td>Presence of the <code>by</code> parameter implies a request for a <strong>Time Series</strong> report. If no <code>by</code> parameter is supplied an <strong>Aggregate Report</strong> will be returned. Acceptable values include <code>hour</code>, <code>day</code>, <code>week</code>, <code>month</code> or <code>year</code>.</td>
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

<section class="text-2 contain margin-bottom-medium">
<span class="text-2 text--navy margin-top-xlarge margin-bottom-medium" style="display: block; font-weight: bold;">Date Formatting</span>
 See below for acceptable date formats for use with the <code>to</code> and <code>from</code> parameters.
</section>

<table>
  <thead>
    <tr class="text-2">
      <th class="padding-medium">Format</th>
      <th class="padding-medium">Definition</th>
    </tr>
  </thead>

  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <td><code style="white-space: nowrap;">YYYY-MM-DD</code></td>
      <td>e.g. <strong>2015-12-31</strong>, where the time defaults to midnight EST on that date.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><code style="white-space: nowrap;">YYYY-MM-DDTHH:MM:SSZ</code></td>
      <td>e.g. <strong>2016-09-29T18:46:19Z</strong>, where the timezone defaults to EST.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><code style="white-space: nowrap;">[number]-[interval]-ago</code></td>
      <td><code>number</code> can be any number between 1 and 10. <code>interval</code> can be any of the following: <strong>day</strong>, <strong>week</strong>, <strong>month</strong>, <strong>year</strong>. Examples include <strong>1-day-ago</strong>, <strong>3-weeks-ago</strong>, <strong>2-months-ago</strong>, etc.</td>
    </tr>
  </tbody>
</table>    
