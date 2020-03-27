<!-- ___AUTHENTICATION____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="authentication">Authentication</h2>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-xlarge margin-bottom-medium" id="authentication-api-key">API Key</h3>

> <h5 class="head-5 text--white margin-bottom-medium">API Key</h5>

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/customers" \
-u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

> <div class="highlight shell text"><p>cURL uses the -u flag to pass basic auth credentials. <br>Adding a colon after your API key will prevent it from asking you for a password.</p></div>

<section class="text-2 contain">
  <p>API keys can be created on the Platforms page of your Vimeo OTT CMS.</p>

  <p>All resources require authentication with this <code>API Key</code> over <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">HTTP Basic Auth</a>. Your <code>API Key</code> acts as the basic auth username. You do not need to provide a password (but do notice the trailing <code>:</code>).</p>

  <p>When making API calls on behalf of a customer, there are two (manually set) request headers that you should be aware of:</p>

  <ul>
    <li>
      <code>VHX-Customer</code>: should be set with the logged in customer <code>href</code> on all requests. This let's the API respond with relevant information for that particular customer (things like continue watching, analytics, etc). Without this, requests will be tied to the <code>API Key</code> creator which can lead to unintentional behavior (rate limiting, inaccurate analytics, etc).
    </li>
    <li>
      <code>VHX-Client-IP</code>: should be set with the IP address of your end-user when making a back-end API request on behalf of a customer. Our API will respect this IP address over the request/server IP address for the purposes of geo-blocking content, analytics, etc.
    </li>
  </ul>
</section>
