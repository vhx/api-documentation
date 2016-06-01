<!-- ___INTRODUCTION____________________________ -->
<h2 class="head-3 margin-top-large margin-bottom-medium" id="introduction">Introduction</h2>

> <h5 class="head-5 text--white">API Endpoint</h5>

```plaintext
https://api.vhx.tv
```
<section class="text-2 contain">
  <p>The VHX API provides a simple and secure <a href="http://en.wikipedia.org/wiki/Representational_State_Transfer" target="_blank">REST</a> interface to VHX. Registered applications can manage products, customers, videos, collections, authorizations, and analytics.</p>
  <p>We provide light-weight client libraries to easily interface with our resources. These are currently availble in Node.js, Ruby, and PHP. Python and Go client libraries will be added soon.</p>
  <p>All API access is over <a href="http://en.wikipedia.org/wiki/HTTP_Secure">HTTPS</a> and all data is sent and received as <a href="https://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a>. Blank fields are included as <code>null</code> and timestamps are in ISO 8601 format <code>YYYY-MM-DDTHH:MM:SSZ</code>. Only the UTF-8 character encoding is supported for both requests and responses.</p>
  <p>We support <a href="https://en.wikipedia.org/wiki/JSONP" target="_blank">JSONP</a> (use <code>?callback=</code>) and <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Cross Origin Resource Sharing</a> (CORS) for AJAX requests.</p>

  <p class="padding-top-medium border-top border--gray-light">We're always happy to help out with code or answer any questions you might have. Get in touch on our <a href="http://slack.vhx.tv/">Slack Channel</a> or email us at <a href="mailto:api@vhx.tv">api@vhx.tv</a>.</p>
  <p class="text-center"><a href="http://slack.vhx.tv/" target="_blank" class="btn-white margin-top-medium icon--left icon-slack-navy">VHX Support on Slack</a></p>
</section>
