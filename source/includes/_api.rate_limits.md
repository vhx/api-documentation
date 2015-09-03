<!-- RATE LIMITS -->
<h2 class="head-3 is-api margin-top-xlarge margin-bottom-medium" id="rate-limits">Rate Limits</h2>

> <h5 class="head-5 text--white margin-bottom-medium">Request Headers</h5>

> <p>We provide headers in every response that help you monitor your request limits.</p>

```shell
X-RateLimit-Limit: 500
X-RateLimit-Remaining: 499
Last-Modified: Tue, 25 Feb 2014 12:00:00 GMT
```

<section class="text-2 contain margin-bottom-xlarge">
  <p>The API limits applications to a certain number of calls per hour, per authenticated user. The current limit is 500 requests per hour. We provide headers in every response that help you monitor this.</p>
  <p>The best way to prevent getting rate limited is to cache your API responses locally. Additionally, we support conditional requests (which do not count against your rate limit), so you can use the <a href="https://en.wikipedia.org/wiki/HTTP_ETag">ETag</a> or Last-Modified header we include in responses to do a <code>GET</code> request to a specific resource with the If-None-Match or If-Modified-Since header. If the resource has not changed, we will return a <code>304 Not Modified</code>.</p>
  <p>If you have been incorrectly rate limited, please email <a href="mailto:api@vhx.tv">api@vhx.tv</a>.</p>
</section>