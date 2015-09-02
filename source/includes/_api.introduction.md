<!-- ___INTRODUCTION____________________________ -->
<h2 class="head-3 is-api margin-top-large margin-bottom-medium" id="introduction">Introduction</h2>

<div class="text-2 contain">
  <p>The VHX API provides a simple and secure HTTP REST interface to VHX. Registered applications can access customer, video, subscription, collection, and video resources.</p>
  <p>Currently API application registration is private. Please email <a href="mailto:api@vhx.tv">api@vhx.tv</a> to register an application and provide your app name, description, url, and callback url.</p>
</div>

<!-- ___SCHEMA____________________________ -->
<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="schema">Schema</h3>

<div class="text-2 contain">
All API access is over HTTPS and accessed via the api.vhx.tv domain. All data is sent and received as JSON. Blank fields are included as null and timestamps are in ISO 8601 format    YYYY-MM-DDTHH:MM:SSZ . Only the UTF-8 character encoding is supported for both requests and responses. We support JSONP (send a  ?callback  parameter) and Cross Origin Resource Sharing (CORS) for AJAX requests.
</div>

> To authorize, use this code:

```ruby
require 'kittn'
```

<!-- ___HTTP VERBS____________________________ -->
<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="http-verbs">HTTP Verbs</h3>

<table>
  <thead>
    <tr class="text-2">
      <th class="padding-medium">Verb</th>
      <th class="padding-medium">Description</th>
    </tr>
  </thead>

  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <td>HEAD</td>
      <td>Can be issued against any resource to get just the HTTP header info.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>GET</td>
      <td>Used for retrieving resources.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>POST</td>
      <td>Used for creating resources, or performing custom action.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>PUT</td>
      <td>Used for replacing or updating resources. For PUT requests with no body attribute, be sure to set the Content-Length header to zero.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>DELETE</td>
      <td>Used for deleting resources.</td>
    </tr>
  </tbody>
</table>

<!-- ................................................ -->

<!-- HYPERMEDIA -->
<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="hypermedia">Hypermedia</h3>

<div class="text-2 contain">
The API implements the HAL - Hypertext Application Lanaguge protocol. All resources have _links and _embedded properties. _links are explicit and permanent URIs that API clients should use for navigational and resource UUID purposes. _embedded contains other resources that may be embedded in the current resource, saving you API requests to explicitly fetch that data.
</div>

<!-- ................................................ -->

