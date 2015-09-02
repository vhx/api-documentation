<!-- ERRORS -->
<h2 class="head-3 is-api margin-top-large margin-bottom-medium" id="errors">Errors</h2>

<div class="text-2 contain">
All responses use standard HTTP status codes. This status code should solely be used to determine the success or failure of a request. If a failure, there additionally will be a message key in the JSON response with a detailed error message. Outline of all HTTP status codes are below:
</div>

<table>
  <thead>
    <tr class="text-2">
      <th class="padding-vertical-medium">Status </th>
      <th class="padding-vertical-medium">Code </th>
      <th class="padding-vertical-medium">Description</th>
    </tr>
  </thead>

  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <td>200 OK</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>201 Created</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>304 Not Modified</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>400 Bad Request (Client error)</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>401 Unauthorized (Invalid authentication)</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>402 Payment Required (Premium video content)</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>404 Not Found</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>406 Not Acceptable</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td>500...505 Internal Server Error or Unavailable</td>
    </tr>
  </tbody>
</table>