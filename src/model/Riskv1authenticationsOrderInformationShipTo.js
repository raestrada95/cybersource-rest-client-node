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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Riskv1authenticationsOrderInformationShipTo = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Riskv1authenticationsOrderInformationShipTo model module.
   * @module model/Riskv1authenticationsOrderInformationShipTo
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1authenticationsOrderInformationShipTo</code>.
   * @alias module:model/Riskv1authenticationsOrderInformationShipTo
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>Riskv1authenticationsOrderInformationShipTo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1authenticationsOrderInformationShipTo} obj Optional instance to populate.
   * @return {module:model/Riskv1authenticationsOrderInformationShipTo} The populated <code>Riskv1authenticationsOrderInformationShipTo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('destinationCode')) {
        obj['destinationCode'] = ApiClient.convertToType(data['destinationCode'], 'Number');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
    }
    return obj;
  }

  /**
   * First line of the shipping address.
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * Second line of the shipping address.
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * State or province of the shipping address. Use the State, Province, and Territory Codes for the United States and Canada. 
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * Country of the shipping address. Use the two-character ISO Standard Country Codes.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * City of the shipping address.
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;
  /**
   * First name of the recipient.  **Processor specific maximum length**  - Litle: 25 - All other processors: 60 
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Last name of the recipient.  **Processor-specific maximum length**  - Litle: 25 - All other processors: 60 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Phone number associated with the shipping address.
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * Postal code for the shipping address. The postal code must consist of 5 to 9 digits.  When the billing country is the U.S., the 9-digit postal code must follow this format: [5 digits][dash][4 digits]  Example 12345-6789  When the billing country is Canada, the 6-digit postal code must follow this format: [alpha][numeric][alpha][space][numeric][alpha][numeric]  Example A1B 2C3  **American Express Direct**\\ Before sending the postal code to the processor, CyberSource removes all nonalphanumeric characters and, if the remaining value is longer than nine characters, truncates the value starting from the right side. 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * Indicates destination chosen for the transaction. Possible values: - 01- Ship to cardholder billing address - 02- Ship to another verified address on file with merchant - 03- Ship to address that is different than billing address - 04- Ship to store (store address should be populated on request) - 05- Digital goods - 06- Travel and event tickets, not shipped - 07- Other 
   * @member {Number} destinationCode
   */
  exports.prototype['destinationCode'] = undefined;
  /**
   * Shipping method for the product. Possible values: - lowcost: Lowest-cost service - sameday: Courier or same-day service - oneday: Next-day or overnight service - twoday: Two-day service - threeday: Three-day service - pickup: Store pick-up - other: Other shipping method - none: No shipping method because product is a service or subscription Required for American Express SafeKey (U.S.). 
   * @member {String} method
   */
  exports.prototype['method'] = undefined;



  return exports;
}));


