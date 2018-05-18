<!-- HYPERMEDIA -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="hypermedia">Hypermedia</h2>

> <h5 class="head-5 text--white margin-bottom-medium">Hypermedia</h5>

> Example HAL response properties

```json
{
  "_links": {
    "self":  { "href": "https://api.vhx.tv/videos/1" },
    "files": { "href": "https://api.vhx.tv/videos/1/files" }
  },
  "_embedded": {
    "files": []
  }
}
```

<section class="text-2 contain">
  <p>The Vimeo OTT API implements the HAL (<a href="https://en.wikipedia.org/wiki/Hypertext_Application_Language" target="_blank">Hypertext Application Lanaguge</a>) protocol. All resources have <code>_links</code> and <code>_embedded</code> properties.</p>
  <p>The <code>_links</code> object includes explicit and permanent URI's (or <code>href</code>'s) that API clients should use for navigational purposes. The <code>_links.self.href</code> propery, in particular, should be utilized as the <em>resource unique identifier</em>.</p>
  <p>The <code>_embedded</code> object may contain other resources (objects or associations) that may be included with the current resource, saving you API requests to additionally fetch that data.</p>
</section>
