<!-- ___AUTHENTICATION____________________________ -->
<h2 class="is-api head-3 margin-top-large margin-bottom-medium" id="authentication">Authentication</h2>

<div class="text-2 contain margin-bottom-medium">
Currently API application registration is private. Please email <a href="mailto:api@vhx.tv">api@vhx.tv</a> to register an application and provide your app name, description, url, and callback url.
Once your application is registered, all requests must be authenticated.

We offer three authentication options for the VHX API:
</div>

<table>
  <thead>
    <tr class="text-2">
      <th class="padding-medium">Method</th>
      <th class="padding-medium">Best for use case</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <td>API Key</td>
      <td>Use this to access and manage your own VHX account</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>OAuth2</td>
      <td>Use this to access the account of a VHX customer who grants your application access</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>Device Code</td>
      <td>Use this to pair a device to the account of a VHX customer who grants your application access</td>
    </tr>
  </tbody>
</table>


<!-- OAUTH2 -->
<h3 class="is-api text-2 text--navy text--bold margin-top-large margin-bottom-small" id="oauth2">OAuth2</h3>

> <h5 class="head-5 text--white margin-bottom-medium">OAuth2</h5>

> Example Original Request

```shell
$ curl -X POST "https://api.vhx.tv/oauth/token" \
-d client_id=<your client id> \
-d client_secret=<your client secret> \
-d code=<your code> \
-d redirect_uri=<your redirect uri> \
-d grant_type=authorization_code
```

> Example Request using refresh token

```shell
$ curl -X POST "https://api.vhx.tv/oauth/token" \
-d grant_type=refresh_token \
-d refresh_token=<your refresh token>
```

> Example Response

```json
{
"access_token": "<your access token>",
"token_type": "bearer",
"expires_in": 7200,
"refresh_token": "<your refresh token>",
"scope": "read"
}
```
<section class="text-2 contain">
Access the account of a VHX customer who grants your application access via <a href="#">OAuth2</a>. This enables your application to connect a VHX customer without them having to share their API key or login credentials. This works well for web and mobile applications. See also the <a href="#">VHX Omniauth Strategy</a>.

OAuth2 access tokens expire after 2 hours. You can refresh your access token by using the previously provided <code>refresh_token</code>.
</section>


<!-- DEVICE CODE -->
<h3 class="is-api text-2 text--navy text--bold margin-top-large margin-bottom-small" id="device-code">Device Code</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Device Code</h5>

> Example Request

```shell
$ curl -X POST "https://api.vhx.tv/oauth/codes" \
-d client_id=<your client id> \
-d client_secret=<your client secret>
```

> Example Response

```json
{
"code": "72FF",
"expires_in": 600
}
```

> Example Request with Provided Code

```shell
$ curl -X GET "https://api.vhx.tv/oauth/codes/:code" \
-d client_id=<your client id> \
-d client_secret=<your client secret>
```

> Example Status 200 Response

```json
{
"access_token": "<your new access token>",
"token_type": "bearer",
"expires_in": 7200,
"refresh_token": "<your new refresh token>",
"scope": "read"
}
```

<section class="text-2 contain">
Access VHX content through an application running on a device or 2nd screen (TV, game console, etc). This method provides the connecting VHX customer a code that he/she can enter via the web and pair their account with the device.

The connecting customer should be instructed to take the code in the response and go to <a href="https://www.vhx.tv/activate/">https://www.vhx.tv/activate/</a><code>:app_name</code> to enter it and pair their account to your application.

While the customer is authenticating and entering their code, your application should poll for the access token like so. If the code is not found or not paired yet, a <code>404 status code</code> will be returned.
</section>