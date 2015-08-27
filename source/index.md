---
title: API Reference

language_tabs:
  - cURL
  - Node
  - Ruby

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true
---

<h1 class="head-3 margin-top-large margin-bottom-medium" id="introduction">Introduction</h1>

<div class="text-2 contain">
  <p>The VHX API provides a simple and secure HTTP REST interface to VHX. Registered applications can access customer, video, subscription, collection, and video resources.</p>
  <p>Currently API application registration is private. Please email <a href="mailto:api@vhx.tv">api@vhx.tv</a> to register an application and provide your app name, description, url, and callback url.</p>
</div>

<h2 class="text-2 text--navy text--bold margin-top-large margin-bottom-small" id="schema">Schema</h2>

<div class="text-2 contain">
All API access is over HTTPS and accessed via the api.vhx.tv domain. All data is sent and received as JSON. Blank fields are included as null and timestamps are in ISO 8601 format    YYYY-MM-DDTHH:MM:SSZ . Only the UTF-8 character encoding is supported for both requests and responses. We support JSONP (send a  ?callback  parameter) and Cross Origin Resource Sharing (CORS) for AJAX requests.
</div>

<h2 class="text-2 text--navy text--bold margin-top-large margin-bottom-small" id="schema">HTTP Verbs</h2>

<table>
  <thead class="padding-vertical-medium">
    <tr class="text-2">
      <th>Verb</th>
      <th>Description</th>
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

# Authentication

> To authorize, use this code:

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: meowmeowmeow"
```

> Make sure to replace `meowmeowmeow` with your API key.

Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our [developer portal](http://example.com/developers).

Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: meowmeowmeow`

<aside class="notice">
You must replace <code>meowmeowmeow</code> with your personal API key.
</aside>

# Kittens

## Get All Kittens

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```shell
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Isis",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get(2)
```

```shell
curl "http://example.com/api/kittens/2"
  -H "Authorization: meowmeowmeow"
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Isis",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific kitten.

<aside class="warning">If you're not using an administrator API key, note that some kittens will return 403 Forbidden if they are hidden for admins only.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve

