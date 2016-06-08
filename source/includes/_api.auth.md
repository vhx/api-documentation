<!-- ___AUTHENTICATION____________________________ -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="authentication">Authentication</h2>

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

```javascript
var vhx = require('vhx')('YOUR_API_KEY');
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
