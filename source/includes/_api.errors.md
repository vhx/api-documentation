<!-- ERRORS -->
<h2 class="head-3 margin-top-xlarge padding-top-xlarge border-top margin-bottom-medium" id="errors">Errors</h2>

<section class="text-2 contain margin-bottom-large">
  All responses use standard <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes">HTTP status codes</a>. This status code should solely be used to determine the success or failure of a request. If a failure, there additionally will be a message key in the <code>JSON</code> response with a detailed error message. Below is an outline of all HTTP status codes.
</section>


```ruby
# For example, rescuing a Unauthorized Error

begin
  Vhx::Customer.retrieve("https://api.vhx.tv/customers/1")
rescue Vhx::UnauthorizedError
  # Handle Exception
end

# Mapping of error codes and the ruby exception that is thrown
{
  400 => Vhx::BadRequestError,
  401 => Vhx::UnauthorizedError,
  402 => Vhx::PaymentRequiredError,
  404 => Vhx::NotFoundError,
  406 => Vhx::NotAcceptableError,
  500...505 => Vhx::ServerError
}
```

```php
<?phptry {
  // Use VHX library to make requests...
}
catch (\VHX\Error\InvalidRequest $e) {
  // invalid parameters were supplied

  // each error you can get the following
  echo $e->getHttpStatus();
  echo $e->getErrorResponse()['message'];
  echo $e->getErrorJSONResponse();
}
catch (\VHX\Error\ResourceNotFound $e) {
  // particular resource was not found
}
catch (\VHX\Error\Api $e) {
  // network communication with VHX API failed
}
catch (\VHX\Error\Authentication $e) {
  // authentication with VHX API failed
}
catch (Exception $e) {
  // Something else happened, unrelated to VHX
}
```

<table class="margin-bottom-xlarge padding-bottom-xlarge">
  <thead>
    <tr class="text-2">
      <th class="padding-medium nowrap">Status Code</th>
      <th class="padding-medium">Description</th>
    </tr>
  </thead>

  <tbody>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="text--navy">200</td>
      <td>OK</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="text--navy">201</td>
      <td>Created</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="text--navy">304</td>
      <td>Not Modified</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="text--navy">400</td>
      <td>Bad Request (Client error)</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="text--navy">401</td>
      <td>Unauthorized (Invalid authentication)</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="text--navy">402</td>
      <td>Payment Required (Premium video content)</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="text--navy">404</td>
      <td>Not Found</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="text--navy">406</td>
      <td>Not Acceptable</td>
    </tr>
    <tr class="text-2 border-bottom border--light-gray">
      <td class="text--navy">500...505</td>
      <td>Internal Server Error or Unavailable</td>
    </tr>
  </tbody>
</table>
