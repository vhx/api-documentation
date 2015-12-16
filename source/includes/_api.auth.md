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
  <p>Currently API registration is private. Please email <a href="mailto:api@vhx.tv">api@vhx.tv</a> to register an application and provide your application name, description, and url.</p>
  <p>Once your application is registered, you will recieve an <code>API Key</code>. All resources require authentication with this <code>API Key</code> over <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">HTTP Basic Auth</a>. Your <code>API Key</code> acts as the basic auth username. You do not need to provide a password (but do notice the trailing <code>:</code>).</p>
</section>
