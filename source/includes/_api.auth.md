<!-- ___AUTHENTICATION____________________________ -->
<h2 class="is-api head-3 margin-top-large margin-bottom-medium" id="authentication">Authentication</h2>

> <h5 class="head-5 text--white margin-bottom-medium">API Key</h5>

> Example Request

```shell
$ curl -X GET "https://api.vhx.tv/customers" \
-u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
```
> curl uses the -u flag to pass basic auth credentials
> Adding a colon after your API key will prevent it from asking you for a password.

<section class="text-2 contain">
  <p>Currently API application registration is private. Please email <a href="mailto:api@vhx.tv">api@vhx.tv</a> to register an application and provide your app name, description, url, and callback url.</p>
  <p>You must authenticate for all requests. Once your application is registered, you will recieve an <code>API Key</code>. Authentication is done over <a href="https://en.wikipedia.org/wiki/Basic_access_authentication">HTTP Basic Auth</a>. Your API key acts as the basic auth username. You do not need to provide a password.</p>
</section>