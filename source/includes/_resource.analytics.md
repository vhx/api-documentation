<!-- ___ANALYTICS____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="analytics">Analytics</h2>

<section class="text-2 contain">
  <p>Analytics give you access to data around your videos, customers, traffic, and platform income. You can gain insights on what your customers are watching, how many people are visiting your channel, the number of units you are selling, how many customers are subscribing and unsubscribing, and more via reports that can be easily retrieved from the VHX API.</p>
</section>


<h3 class="is-internal text-2 head-4 text--navy text--bold is-api margin-top-xlarge margin-bottom-medium" id="analytics-create">Event Tracking</h3>

> <h5 class="is-internal head-5 text--white is-internal">Event Tracking</h5>

> <span class="is-internal">Endpoint</span>

```plaintextinternal
https://collector.vhx.tv/events.gif
```

> <span class="is-internal">Javascript Example</span>

```jsinternal
  var trackEvent = function() {
    var image  = new Image();
    image.src = 'https://collector.vhx.tv/events.gif?type=video&name=play&property=value';  
  }

  // fire when the event happens
  trackEvent();

  // in the URL property=value will be replaced by all the properties
  // for the particular event (see to your left)
```

<section class="text-2 contain is-internal">
Analytics usage and engagement data stems from specific events that are tracked based on customer activity. These events can be tracked by making a <code>GET</code> request with a series of query parameters (for events properties) to our collector endpoint, shown to the right. The endpoint is a publicly accessible <code>events.gif</code> to work around cross domain issues of making post requests.
</section>

<section class="text-2 contain margin-bottom-medium is-internal">
<span class="is-internal block padding-top-xlarge margin-top-xlarge margin-bottom-medium border-top border--gray-light text--navy" style="font-weight: bold;">Video Playback Events</span>  
  Players across all platforms (web, iOS, Android, Android TV, Roku, Amazon Fire TV, XBox, and Apple TV) should fire and send the below events to the collector. These are based on the HTML5 media events. The event type should be <code>type=video</code> and the event name should be passed in via the <code>name</code> query paramter (e.g. <code>?type=video&name=firstplay</code>, <code>?type=video&name=play</code>, <code>?type=video&name=pause</code>, etc.).
</section>

<table class="is-internal">
  <thead>
    <tr class="text-2">
      <th class="padding-medium nowrap">Event</th>
      <th class="padding-medium">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong class="is-block">firstplay</strong></td>
      <td>Initial playback has begun. Fired after a manually-triggered play or autoplay. Subsequent pause/play's should not trigger this. Used to determine total # of streams.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong class="is-block">play</strong></td>
      <td>Playback has started.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong class="is-block">pause</strong></td>
      <td>Playback has been paused.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong class="is-block">timeupdate</strong></td>
      <td>Fired at 10 second intervals of of continuous playback progression. Used to determine total minutes/hours streamed + resume points across devices.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong class="is-block">seeked</strong></td>
      <td>Seek ahead or back has finished.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong class="is-block">error</strong></td>
      <td>Fired after any exception in the player is caught.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong class="is-block">waiting</strong></td>
      <td>Playback has stopped to begin buffering next frames. Helps us understand playback quality / sessions.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong class="is-block">ended</strong></td>
      <td>Playback has stopped due to end of video.</td>
    </tr>
  </tbody>
</table>

<section class="text-2 contain is-internal margin-bottom-medium padding-top-large">
See below for the full list of properties that should be sent as query parameters for triggered video playback events.
</section>

<table class="is-internal">
  <thead>
    <tr class="text-2">
      <th class="padding-medium nowrap">Property</th>
      <th class="padding-medium">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">type</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Constant, always set to <code>video</code> for video playback events.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">name</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Name of event, as outlined in the above table.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">seconds</strong>
        <span class="is-block text--transparent text-3">integer</span>
      </td>
      <td>Value of <code>timeupdate</code> interval. Sent with <code>timeupdate</code> events to determine total time viewed per customer / video. Otherwise <code>0</code>.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">video_id</strong>
        <span class="is-block text--transparent text-3">integer</span>
      </td>
      <td>ID of current playing video.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">user_id</strong>
        <span class="is-block text--transparent text-3">integer</span>
      </td>
      <td>ID of current viewing user. This property should be pulled from the <code>X-User-Id</code> response header. <code>user_id</code> IS NOT <code>customer_id</code>.
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">device_id</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Unique ID of client device. It should be generated once and persisted as long as possible. Signing out, etc should not regenerate this. Only generate if it doesn't exist.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">session_id</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Unique ID of client session. Should be generated every 30 mins of inactivity. "Inactivity" is when no events have been sent in the past 30 minutes.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">user_agent</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Full, qualified user agent of client.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">url</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>If a web client, current URL where video is being played.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">referrer</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>If a web client, referring URL.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">platform</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Can be one of the following: <code>iphone</code>, <code>ipad</code>, <code>appletv</code>, <code>roku</code>, <code>android</code>, <code>android_tv</code>, <code>amazon_fire_tv</code>, <code>web</code>, <code>xbox_one</code>
      </td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">platform_id</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Current platform ID. Ties back to a particular channel.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">platform_version</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Build version of particular platform.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">device</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td><code>iphone</code>, <code>ipad</code>, <code>appletv</code>, <code>roku</code>, <code>android</code>, <code>android_tv</code>, <code>amazon_fire_tv</code>, <code>html5</code>, <code>flash</code>, <code>xbox_one</code>
      </td>      
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">current_src</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Full source URL of current playing video file.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">current_type</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>MIME type of current playing video file. Likely: <code>video/mp4</code>, <code>application/x-mpegURL</code>, or <code>application/dash+xml</code>.</td>
    </tr>  
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">current_subtitle</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Label of current selected subtitle. "English" or "Spanish, for example. If no current subtitle, this can be <code>null</code> or omitted.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">timecode</strong>
        <span class="is-block text--transparent text-3">integer</span>
      </td>
      <td>Current video playback time (in seconds). Used for resuming.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">duration</strong>
        <span class="is-block text--transparent text-3">integer</span>
      </td>
      <td>Full duration (in seconds) of current playing video.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">is_drm</strong>
        <span class="is-block text--transparent text-3">boolean</span>
      </td>
      <td>Playback has DRM enabled.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">is_fullscreen</strong>
        <span class="is-block text--transparent text-3">boolean</span>
      </td>
      <td>Playback is currently in fullscreen mode.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">is_trailer</strong>
        <span class="is-block text--transparent text-3">boolean</span>
      </td>
      <td>Playback is a video that is a trailer.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">is_chromecast</strong>
        <span class="is-block text--transparent text-3">boolean</span>
      </td>
      <td>Playback is currently casting via Google Chromecast.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">is_airplay</strong>
        <span class="is-block text--transparent text-3">boolean</span>
      </td>
      <td>Playback is currently casting via Apple Airplay.</td>
    </tr>
  </tbody>
</table>

<section class="text-2 contain margin-bottom-medium is-internal">
<span class="block margin-top-xlarge margin-bottom-medium text--navy" style="font-weight: bold;">Platform Events</span>  
  Platforms (web, iOS, Android, Android TV, Roku, Amazon Fire TV, XBox, and Apple TV) should fire events around usage and key engagement events. The event name should be passed in via the <code>name</code> query paramter (e.g. <code>?type=platform&name=install</code>, <code>?type=platform&name=view</code>, <code>?type=platform&name=conversion</code>, etc.).
</section>


<table class="is-internal">
  <thead>
    <tr class="text-2">
      <th class="padding-medium nowrap">Event</th>
      <th class="padding-medium">Description</th>
    </tr>
  </thead>
  <tbody>  
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong class="is-block">install</strong></td>
      <td>A platform (app) has been installed. Triggered once, if possible to capture this event.</td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong class="is-block">view</strong></td>
      <td>Any load of a page, screen, or deferred partial.</td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong class="is-block">conversion</strong></td>
      <td>Captures the change of a non-paying -> paying customer.</td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td><strong class="is-block">authentication</strong></td>
      <td>Captures the change of a logged out -> logged in customer.</td>
    </td>
    </tr>  
  </tbody>
</table>

<section class="text-2 contain is-internal margin-bottom-medium padding-top-large">
See below for the full list of properties that should be sent as query parameters for triggered platform usage events.
</section>

<table class="is-internal">
  <thead>
    <tr class="text-2">
      <th class="padding-medium nowrap">Property</th>
      <th class="padding-medium">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">type</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Constant, always set to <code>platform</code> for platform usage events.</td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">name</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Name of event, as outlined in the above table.</td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">user_id</strong>
        <span class="is-block text--transparent text-3">integer</span>
      </td>
      <td>ID of current logged in user. This property should be pulled from the <code>X-User-Id</code> response header. <code>user_id</code> IS NOT <code>customer_id</code>.
      </td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">device_id</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Unique ID of client device. It should be generated once and persisted as long as possible. Signing out, etc should not regenerate this. Only generate if it doesn't exist.</td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">session_id</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Unique ID of client session. Should be generated every 30 mins of inactivity. "Inactivity" is when no events have been sent in the past 30 minutes.</td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">user_agent</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Full, qualified user agent of client.</td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">url</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>If a web client, current URL where event is being sent from.</td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">referrer</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Referring web URL or mobile deep link.</td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">campaign</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>String to represent a campaign, targeted effort, or push notification. Opening the app via a push notification, use this property and set it to <code>notification</code>.</td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">platform</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td><code>iphone</code>, <code>ipad</code>, <code>appletv</code>, <code>roku</code>, <code>android</code>, <code>android_tv</code>, <code>amazon_fire_tv</code>, <code>web</code>, <code>xbox_one</code></td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">platform_id</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Current platform ID. Ties back to a particular channel.</td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">platform_version</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Build version of particular platform. Should use the following format: <code>v1.0.0</code></td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">view</strong>
        <span class="is-block text--transparent text-3">string</span>
      </td>
      <td>Name of currently active view: <code>home</code>, <code>login</code>, <code>checkout</code>, <code>settings</code>, <code>browse</code>, <code>search</code>, <code>collection</code>, <code>video</code>, <code>embed</code>, <code>comments</code>, <code>advertisement</code>.</td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">product_id</strong>
        <span class="is-block text--transparent text-3">integer</span>
      </td>
      <td>Current product context, if present.</td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">collection_id</strong>
        <span class="is-block text--transparent text-3">integer</span>
      </td>
      <td>Current collection context, if present.</td>
    </td>
    <tr class="text-2 border-bottom border--light-gray">
      <td>
        <strong class="is-block text--navy">video_id</strong>
        <span class="is-block text--transparent text-3">integer</span>
      </td>
      <td>Current video context, if present.</td>
    </td>    
  </tbody>
</table>

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

```ruby
# Currently not available in the Ruby client.
```

```node
vhx.analytics.report();
```

```javascript
// Not available for client-side requests.
```

```php
\VHX\Analytics::report();
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

```ruby
# Currently not available in the Ruby client.
```

<p id="analytics_node"></p>
```node
```

```javascript
// Not available for client-side requests.
```

<p id="analytics_php"></p>
```php
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
