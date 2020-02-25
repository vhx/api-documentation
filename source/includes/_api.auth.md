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
  <p>API applications can be created in the <a href="https://www.vhx.tv/admin/platforms" target="_blank">Vimeo OTT admin</a> or by emailing <a href="mailto:apiott@vimeo.com">apiott@vimeo.com</a>.</p>

  <p>Once your application is created, you will receive an <code>API Key</code>. All resources require authentication with this <code>API Key</code> over <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">HTTP Basic Auth</a>. Your <code>API Key</code> acts as the basic auth username. You do not need to provide a password (but do notice the trailing <code>:</code>).</p>

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

<section class="is-internal text-2 contain">
  <p>To make requests on behalf of a customer for accessing content available to them, you will need to authorize the customer via application <strong>Pairing Codes</strong>.</p>

  <h4><strong>1. Fetch the code</strong></h4>
  <p>Applications should request a code from our API, display it on the screen for the customer, and then direct them to <code>https://{subdomain}.vhx.tv/activate</code> to enter the code.</p>

  <h4><strong>2. Poll for customer activation</strong></h4>
  <p>Upon displaying the code to the customer, you should begin polling <code>/oauth/codes/{code}</code> for the code at a ~2.5 second interval with a max of 500 retries.</p>
  <p>This will return a <code>404</code> until the customer correctly pairs it with their account. At that point a <code>200</code> will be returned with an <code>access_token</code>, <code>refresh_token</code>, and <code>expiry</code> information. This information should be saved in your device's registry and is what deems the device as being connected/linked to a logged in customer.</p>
  <p>You can than make requests on behalf of the customer using the Authorization Bearer header.</p>

  <h4><strong>3. Refresh Tokens</strong></h4>
  <p>Access tokens for a customer expire after 2 hours. To continue making API requests you can refresh your access token by requesting a new one (from the <code>/oauth/token</code> endpoint) using the provided <code>refresh_token</code> in the previous response.</p>
</section>
