<!-- ___AUTHENTICATION____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="authentication">Authentication</h2>

<h3 class="text-2 head-4 text--navy text--bold is-api margin-top-xlarge margin-bottom-medium" id="authentication-api-key">API Key</h3>

> <h5 class="head-5 text--white margin-bottom-medium">API Key</h5>

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/customers" \
-u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```

```ruby
require 'vhx-ruby'

Vhx.setup({
  api_key: 'YOUR_API_KEY'
})
```

```node
var vhx = require('vhx')('YOUR_API_KEY');
```

```javascript
var vhxjs = new vhx('YOUR_API_KEY');
```

```php
<?php\VHX\API::setKey('your VHX API key');
```

> <div class="highlight shell text"><p>cURL uses the -u flag to pass basic auth credentials. <br>Adding a colon after your API key will prevent it from asking you for a password.</p></div>

<section class="text-2 contain">
  <p>API applications can be created in the <a href="https://www.vhx.tv/admin/platforms" target="_blank">VHX admin</a> or by emailing <a href="mailto:api@vhx.tv">api@vhx.tv</a>.</p>
  <p>Once your application is created, you will receive an <code>API Key</code>. All resources require authentication with this <code>API Key</code> over <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">HTTP Basic Auth</a>. Your <code>API Key</code> acts as the basic auth username. You do not need to provide a password (but do notice the trailing <code>:</code>).</p>
  <p>When making API calls on behalf of a customer, the <code>X-Customer</code> header with the customer <code>href</code> should be sent as part of the request. This let's the API respond with relevant information for that particular customer (like continue watching, resuming, etc).
</section>


<h3 class="is-internal text-2 head-4 text--navy text--bold is-api margin-top-xlarge margin-bottom-medium" id="authentication-oauth">OAuth</h3>

> <h5 class="is-internal head-5 text--white is-internal">OAuth — Access/Refresh Token Flow</h5>

> <span class="is-internal">Example Access Token Request</span>

```plaintextinternal
$ curl -X POST "https://api.vhx.tv/oauth/token" \
  -d client_id=YOUR_CLIENT_ID \
  -d client_secret=YOUR_CLIENT_SECRET \
  -d grant_type=PASSWORD \
  -d username=YOUR_VHX_EMAIL \
  -d password=YOUR_VHX_PASSWORD
```

> <span class="is-internal">Example Response</span>

```json
{
  "access_token": "YOUR_ACCESS_TOKEN",
  "token_type": "bearer",
  "expires_in": 7200,
  "refresh_token": "YOUR_REFRESH_TOKEN",
  "scope": "public"
}
```

> <span class="is-internal">Example Refresh Token Request</span>

```plaintextinternal
$ curl -X POST "https://api.vhx.tv/oauth/token" \
  -d grant_type=refresh_token \
  -d refresh_token=YOUR_REFRESH_TOKEN
```

> <span class="is-internal">Example Response</span>

```json
{
  "access_token": "YOUR_NEW_ACCESS_TOKEN",
  "token_type": "bearer",
  "expires_in": 7200,
  "refresh_token": "YOUR_NEW_REFRESH_TOKEN",
  "scope": "public"
}
```

> <span class="is-internal">Example API Request with Access Token</span>

```plaintextinternal
$ curl -X GET "https://api.vhx.tv/collections/:id" \
 -H "Authorization: Bearer ACCESS_TOKEN"
```

<section class="is-internal text-2 contain">
  <p>For registered applications an alternative way to access the VHX API is via OAuth access tokens. You can email api@vhx.tv to register an application. There are 3 different authentication flows when using OAuth Authentication depending on your purpose:</p>

  <div>
    <h4><strong>Access &amp; Refresh Token Flow</strong></h4>
    <p>API requests can be authenticated via an OAuth2 access token. The initial access token can be retrieved via the <code>/ouath/token</code> endpoint. You can then make subsequent API requests by passing the <code>access_token</code> in your request's Authorization header.</p>

    <p>OAuth2 Access tokens expire after 2 hours. To continue making API requests, you can refresh your access token by requesting a new one (from the same endpoint) using the provided <code>refresh_token</code> in the previous response.</p>
  </div>
</section>

<h3 class="is-internal"></h3>

<section class="is-internal text-2 contain">
  <div>
    <h4><strong>TV Pairing Code Flow</strong></h4>
    <p>Token All requests to the VHX API require that the application be registered. Please email api@vhx.tv to register an application.
  </div>

  <div>
    <h4><strong>Device Token Flow</strong></h4>
    <p>Token All requests to the VHX API require that the application be registered. Please email api@vhx.tv to register an application.
  </div>
</section>