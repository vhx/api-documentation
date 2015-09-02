<!-- RATE LIMITS -->
<h2 class="head-3 is-api margin-top-large margin-bottom-medium" id="rate-limits">Rate Limits</h2>

<div class="text-2 contain">
The API limits applications to a certain number of calls per hour, per authenticated user. The current limit is 500 requests per hour. We provide headers in every response that help you monitor this:

X-RateLimit-Limit: 500
X-RateLimit-Remaining: 499
Last-Modified: Tue, 25 Feb 2014 12:00:00 GMT
If you have been incorrectly rate limited, please email api@vhx.tv.
</div>

<!-- CACHING &AMP; CONDITIONAL REQUESTS -->
<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-small" id="caching">Caching &amp; Conditional Requests</h3>

<div class="text-2 contain">
The best way to prevent getting rate limited is to cache your API responses locally. Additionally, we support conditional requests (which do not count against your rate limit), so you can use the ETag or Last-Modified header we include in responses to do a GET request to a specific resource with the If-None-Match or If-Modified-Since header. If the resource has not changed, we will return a 304 Not Modified.
</div>