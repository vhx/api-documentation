<!-- ___INTRODUCTION____________________________ -->
<h2 class="head-3 margin-top-large margin-bottom-medium" id="introduction">Introduction</h2>
<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="introduction"></h3>
> <h5 class="head-5 text--white margin-top-large margin-bottom-medium">Libraries</h5>

> <p class="margin-bottom-xlarge">We're working on adding client libraries in other languages. <a href="#">Get notified</a>.</p>

> <h5 class="head-5 text--white">API Endpoint</h5>

```shell
https://api.vhx.tv
<script src="https://cdn.vhx.tv/assets/api.js" data-vhx-site="yoursubdomain.vhx.tv"></script>
```
<section class="text-2 contain">
  <p>The VHX API provides a simple and secure <a href="http://en.wikipedia.org/wiki/Representational_State_Transfer">REST</a> interface to VHX. Registered applications can access customer, video, subscription, collection, and video resources.</p>
  <p>All API access is over <a href="http://en.wikipedia.org/wiki/HTTP_Secure">HTTPS</a> and all data is sent and received as <a href="https://en.wikipedia.org/wiki/JSON">JSON</a>. Blank fields are included as <code>null</code> and timestamps are in ISO 8601 format <code>YYYY-MM-DDTHH:MM:SSZ</code>. Only the UTF-8 character encoding is supported for both requests and responses.</p>
  <p>We support <a href="https://en.wikipedia.org/wiki/JSONP">JSONP</a> (send a ?callback parameter) and <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">Cross Origin Resource Sharing</a> (CORS) for AJAX requests.</p>
</section>

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
      <td class="text--navy">HEAD</td>
      <td>Can be issued against any resource to get just the HTTP header info.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="text--navy">GET</td>
      <td>Used for retrieving resources.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="text--navy">POST</td>
      <td>Used for creating resources, or performing custom action.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="text--navy">PUT</td>
      <td>Used for replacing or updating resources. For PUT requests with no body attribute, be sure to set the Content-Length header to zero.</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="text--navy">DELETE</td>
      <td>Used for deleting resources.</td>
    </tr>
  </tbody>
</table>

<!-- ___HYPERMEDIA____________________________ -->
<h3 class="text-2 text--navy text--bold is-api margin-top-large margin-bottom-medium" id="hypermedia">Hypermedia</h3>

> <h5 class="head-5 text--white margin-bottom-medium">Hypermedia</h5>

> Example HAL response properties

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/videos/1" },
    "site":  { "href": "https://api.vhx.tv/sites/1" }
  },
  "_embedded": {
    "site": {},
    "files": []
  }
}
```

<section class="text-2 contain">
The VHX API implements the HAL (<a href="https://en.wikipedia.org/wiki/Hypertext_Application_Language">Hypertext Application Lanaguge</a>) protocol. All resources have <code>_links</code> and <code>_embedded</code> properties. The <code>_links</code> object includes explicit and permanent URIs that API clients should use for navigational and resource <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier">UUID</a> purposes. The <code>_embedded</code> object contains other resources that may be embedded in the current resource, saving you API requests to explicitly fetch that data.
</section>