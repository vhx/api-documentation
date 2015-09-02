<!-- ___AUTHENTICATION____________________________ -->
<h2 class="is-api head-3 margin-top-large margin-bottom-medium" id="authentication">Authentication</h2>

<div class="text-2 contain">
All requests to the API require a registered VHX API application. Please email api@vhx.tv to register an application. Once your application is registered, all requests must be authenticated.

We offer three authentication options for the VHX API:
</div>

<table>
  <thead>
    <tr class="text-2">
      <th class="padding-vertical-medium">Method</th>
      <th class="padding-vertical-medium">Best for use case</th>
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

<!-- API KEY -->
<h3 class="is-api text-2 text--navy text--bold margin-top-large margin-bottom-small" id="api-key">Api Key</h3>

<div class="text-2 contain">
Access and manage your own account via your API key. This authentication is done over HTTP Basic Auth. Provide your API key as the basic auth username. You do not need to provide a password.

Request:

$ curl -X GET "https://api.vhx.tv/customers" \
-u o3g_4jLU-rxHpc9rsoh3DHfpsq1L6oyM:
</div>

<!-- OAUTH2 -->
<h3 class="is-api text-2 text--navy text--bold margin-top-large margin-bottom-small" id="oauth2">OAuth2</h3>

<div class="text-2 contain">
Access the account of a VHX customer who grants your application access via OAuth2. This enables your application to connect a VHX customer without them having to share their API key or login credentials. This works well for web and mobile applications. Also, check out the VHX Omniauth Strategy.

See the below requests to understand the process and flow.

# Redirect the customer to this page
https://api.vhx.tv/oauth/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_CALLBACK_URL&scope=read

# If the customer authenticates and accepts, they will be redirected to:
YOUR_CALLBACK_URL?code=CODE

Requests:
# Exchange your code for an access token
$ curl -X POST "https://api.vhx.tv/oauth/token" \
-d client_id=<your client id> \
-d client_secret=<your client secret> \
-d code=<your code> \
-d redirect_uri=<your redirect uri> \
-d grant_type=authorization_code

Response:

{
"access_token": "<your access token>",
"token_type": "bearer",
"expires_in": 7200,
"refresh_token": "<your refresh token>",
"scope": "read"
}

OAuth2 access tokens expire after 2 hours. You can refresh your access token by using the previously provided refresh_token in the request below:

Request:

$ curl -X POST "https://api.vhx.tv/oauth/token" \
-d grant_type=refresh_token \
-d refresh_token=<your refresh token>
Response:

{
"access_token": "<your new access token>",
"token_type": "bearer",
"expires_in": 7200,
"refresh_token": "<your new refresh token>",
"scope": "read"
}
</div>

<!-- DEVICE CODE -->
<h3 class="is-api text-2 text--navy text--bold margin-top-large margin-bottom-small" id="device-code">Device Code</h3>

<div class="text-2 contain">
Access VHX content through an application running on a device or 2nd screen (TV, game console, etc). This method provides the connecting VHX customer a code that he/she can enter via the web and pair their account with the device.

Request:

$ curl -X POST "https://api.vhx.tv/oauth/codes" \
-d client_id=<your client id> \
-d client_secret=<your client secret>
Response:

{
"code": "72FF",
"expires_in": 600
}
The connecting customer should be instructed to take the above code (in the response) and go to https://www.vhx.tv/activate/:app_name to enter it and pair their account to your application.

While the customer is authenticating and entering their code, your application should poll for the access token like so. If the code is not found or not paired yet, a 404 status code will be returned.

Request:

$ curl -X GET "https://api.vhx.tv/oauth/codes/:code" \
-d client_id=<your client id> \
-d client_secret=<your client secret>
Response:

Status: 200 OK

{
"access_token": "<your access token>",
"token_type": "bearer",
"expires_in": 7200,
"refresh_token": "<your refresh token>",
"scope": "read"
}
</div>