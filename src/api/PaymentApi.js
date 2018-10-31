/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreatePaymentRequest', 'model/InlineResponse2002', 'model/InlineResponse201', 'model/InlineResponse400', 'model/InlineResponse502'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreatePaymentRequest'), require('../model/InlineResponse2002'), require('../model/InlineResponse201'), require('../model/InlineResponse400'), require('../model/InlineResponse502'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentApi = factory(root.CyberSource.ApiClient, root.CyberSource.CreatePaymentRequest, root.CyberSource.InlineResponse2002, root.CyberSource.InlineResponse201, root.CyberSource.InlineResponse400, root.CyberSource.InlineResponse502);
  }
}(this, function(ApiClient, CreatePaymentRequest, InlineResponse2002, InlineResponse201, InlineResponse400, InlineResponse502) {
  'use strict';

  /**
   * Payment service.
   * @module api/PaymentApi
   * @version 0.0.1
   */

  /**
   * Constructs a new PaymentApi. 
   * @alias module:api/PaymentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createPayment operation.
     * @callback module:api/PaymentApi~createPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Process a Payment
     * Authorize the payment for the transaction. 
     * @param {module:model/CreatePaymentRequest} createPaymentRequest 
     * @param {module:api/PaymentApi~createPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */
    this.createPayment = function(createPaymentRequest, callback) {
      var postBody = createPaymentRequest;

      // verify the required parameter 'createPaymentRequest' is set
      if (createPaymentRequest === undefined || createPaymentRequest === null) {
        throw new Error("Missing the required parameter 'createPaymentRequest' when calling createPayment");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/pts/v2/payments/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPayment operation.
     * @callback module:api/PaymentApi~getPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Payment
     * Include the payment ID in the GET request to retrieve the payment details.
     * @param {String} id The payment ID returned from a previous payment request. 
     * @param {module:api/PaymentApi~getPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    this.getPayment = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPayment");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/pts/v2/payments/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));