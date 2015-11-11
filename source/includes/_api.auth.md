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
Vhx.setup(api_key: 'o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM')
```

```javascript
var vhx = require('vhx')('o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM');
```

> <p>cURL uses the -u flag to pass basic auth credentials.</p>
> <p>Adding a colon after your API key will prevent it from asking you for a password.</p>

<section class="text-2 contain">
  <p>Currently API application registration is private. Please email <a href="mailto:api@vhx.tv">api@vhx.tv</a> to register an application and provide your application name, description, url, and callback url.</p>
  <p>Once your application is registered, you will recieve an <code>API Key</code>. All resources require authentication with this <code>API Key</code> over <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">HTTP Basic Auth</a>. Your <code>API Key</code> acts as the basic auth username. You do not need to provide a password (but do notice the trailing <code>:</code>).</p>
</section>
