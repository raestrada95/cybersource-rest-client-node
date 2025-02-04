/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse4003', 'model/InlineResponse500', 'model/UpdatePGPKeysRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse4003'), require('../model/InlineResponse500'), require('../model/UpdatePGPKeysRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.KeyManagementPgpApi = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse4003, root.CyberSource.InlineResponse500, root.CyberSource.UpdatePGPKeysRequest);
  }
}(this, function(ApiClient, InlineResponse4003, InlineResponse500, UpdatePGPKeysRequest) {
  'use strict';

  /**
   * KeyManagementPgp service.
   * @module api/KeyManagementPgpApi
   * @version 0.0.1
   */

  /**
   * Constructs a new KeyManagementPgpApi. 
   * @alias module:api/KeyManagementPgpApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the updatePGP operation.
     * @callback module:api/KeyManagementPgpApi~updatePGPCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate or De-activate PGP Key
     * Activate or De-activate PGP Key 
     * @param {String} keyId Key ID. 
     * @param {module:model/UpdatePGPKeysRequest} updatePGPKeysRequest 
     * @param {module:api/KeyManagementPgpApi~updatePGPCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updatePGP = function(keyId, updatePGPKeysRequest, callback) {
      var postBody = updatePGPKeysRequest;

      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling updatePGP");
      }

      // verify the required parameter 'updatePGPKeysRequest' is set
      if (updatePGPKeysRequest === undefined || updatePGPKeysRequest === null) {
        throw new Error("Missing the required parameter 'updatePGPKeysRequest' when calling updatePGP");
      }


      var pathParams = {
        'keyId': keyId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/kms/v2/keys-pgp/{keyId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
