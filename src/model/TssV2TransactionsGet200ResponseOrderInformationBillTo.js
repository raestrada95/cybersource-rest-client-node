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
    root.CyberSource.TssV2TransactionsGet200ResponseOrderInformationBillTo = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseOrderInformationBillTo model module.
   * @module model/TssV2TransactionsGet200ResponseOrderInformationBillTo
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseOrderInformationBillTo</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseOrderInformationBillTo
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseOrderInformationBillTo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseOrderInformationBillTo} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseOrderInformationBillTo} The populated <code>TssV2TransactionsGet200ResponseOrderInformationBillTo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('middleName')) {
        obj['middleName'] = ApiClient.convertToType(data['middleName'], 'String');
      }
      if (data.hasOwnProperty('nameSuffix')) {
        obj['nameSuffix'] = ApiClient.convertToType(data['nameSuffix'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }
      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * Customer’s first name. This name must be the same as the name on the card.  #### CyberSource Latin American Processing **Important** For an authorization request, CyberSource Latin American Processing concatenates `orderInformation.billTo.firstName` and `orderInformation.billTo.lastName`. If the concatenated value exceeds 30 characters, CyberSource Latin American Processing declines the authorization request.\\ **Note** CyberSource Latin American Processing is the name of a specific processing connection that CyberSource supports. In the CyberSource API documentation, CyberSource Latin American Processing does not refer to the general topic of processing in Latin America. The information in this field description is for the specific processing connection called _CyberSource Latin American Processing_. It is not for any other Latin American processors that CyberSource supports.  #### CyberSource through VisaNet Credit card networks cannot process transactions that contain non-ASCII characters. CyberSource through VisaNet accepts and stores non-ASCII characters correctly and displays them correctly in reports. However, the limitations of the credit card networks prevent CyberSource through VisaNet from transmitting non-ASCII characters to the credit card networks. Therefore, CyberSource through VisaNet replaces non-ASCII characters with meaningless ASCII characters for transmission to the credit card networks.  #### For Payouts: This field may be sent only for FDC Compass.  **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting.  For processor-specific information, see the `customer_firstname` request-level field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Customer’s last name. This name must be the same as the name on the card.  #### CyberSource Latin American Processing **Important** For an authorization request, CyberSource Latin American Processing concatenates `orderInformation.billTo.firstName` and `orderInformation.billTo.lastName`. If the concatenated value exceeds 30 characters, CyberSource Latin American Processing declines the authorization request.\\ **Note** CyberSource Latin American Processing is the name of a specific processing connection that CyberSource supports. In the CyberSource API documentation, CyberSource Latin American Processing does not refer to the general topic of processing in Latin America. The information in this field description is for the specific processing connection called CyberSource Latin American Processing. It is not for any other Latin American processors that CyberSource supports.  #### CyberSource through VisaNet Credit card networks cannot process transactions that contain non-ASCII characters. CyberSource through VisaNet accepts and stores non-ASCII characters correctly and displays them correctly in reports. However, the limitations of the credit card networks prevent CyberSource through VisaNet from transmitting non-ASCII characters to the credit card networks. Therefore, CyberSource through VisaNet replaces non-ASCII characters with meaningless ASCII characters for transmission to the credit card networks.  **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting.  #### For Payouts: This field may be sent only for FDC Compass.  For processor-specific information, see the `customer_lastname` request-level field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Customer’s middle name. 
   * @member {String} middleName
   */
  exports.prototype['middleName'] = undefined;
  /**
   * Customer’s name suffix. 
   * @member {String} nameSuffix
   */
  exports.prototype['nameSuffix'] = undefined;
  /**
   * Payment card billing street address as it appears on the credit card issuer’s records.  #### Atos This field must not contain colons (:).  #### CyberSource through VisaNet **Important** When you populate billing street address 1 and billing street address 2, CyberSource through VisaNet concatenates the two values. If the concatenated value exceeds 40 characters, CyberSource through VisaNet truncates the value at 40 characters before sending it to Visa and the issuing bank. Truncating this value affects AVS results and therefore might also affect risk decisions and chargebacks. Credit card networks cannot process transactions that contain non-ASCII characters. CyberSource through VisaNet accepts and stores non-ASCII characters correctly and displays them correctly in reports. However, the limitations of the credit card networks prevent CyberSource through VisaNet from transmitting non-ASCII characters to the credit card networks. Therefore, CyberSource through VisaNet replaces non-ASCII characters with meaningless ASCII characters for transmission to the credit card networks.  #### For Payouts: This field may be sent only for FDC Compass.  **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting.  For processor-specific information, see the `bill_address1` request-level field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * Additional address information.  For Payouts: This field may be sent only for FDC Compass.  #### Atos This field must not contain colons (:).  #### Chase Paymentech Solutions, FDC Compass, and TSYS Acquiring Solutions This value is used for AVS.  #### CyberSource through VisaNet **Important** When you populate billing street address 1 and billing street address 2, CyberSource through VisaNet concatenates the two values. If the concatenated value exceeds 40 characters, CyberSource through VisaNet truncates the value at 40 characters before sending it to Visa and the issuing bank. Truncating this value affects AVS results and therefore might also affect risk decisions and chargebacks. Credit card networks cannot process transactions that contain non-ASCII characters. CyberSource through VisaNet accepts and stores non-ASCII characters correctly and displays them correctly in reports. However, the limitations of the credit card networks prevent CyberSource through VisaNet from transmitting non-ASCII characters to the credit card networks. Therefore, CyberSource through VisaNet replaces non-ASCII characters with meaningless ASCII characters for transmission to the credit card networks.  For processor-specific information, see the `bill_address2` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * Payment card billing city.  #### Atos This field must not contain colons (:).  #### CyberSource through VisaNet Credit card networks cannot process transactions that contain non-ASCII characters. CyberSource through VisaNet accepts and stores non-ASCII characters correctly and displays them correctly in reports. However, the limitations of the credit card networks prevent CyberSource through VisaNet from transmitting non-ASCII characters to the credit card networks. Therefore, CyberSource through VisaNet replaces non-ASCII characters with meaningless ASCII characters for transmission to the credit card networks.  #### For Payouts: This field may be sent only for FDC Compass.  For processor-specific information, see the `bill_city` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;
  /**
   * State or province of the billing address. Use the State, Province, and Territory Codes for the United States and Canada.  For Payouts: This field may be sent only for FDC Compass.  ##### CyberSource through VisaNet Credit card networks cannot process transactions that contain non-ASCII characters. CyberSource through VisaNet accepts and stores non-ASCII characters correctly and displays them correctly in reports. However, the limitations of the credit card networks prevent CyberSource through VisaNet from transmitting non-ASCII characters to the credit card networks. Therefore, CyberSource through VisaNet replaces non-ASCII characters with meaningless ASCII characters for transmission to the credit card networks.  **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting.  For processor-specific information, see the `bill_state` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * Postal code for the billing address. The postal code must consist of 5 to 9 digits.  When the billing country is the U.S., the 9-digit postal code must follow this format: [5 digits][dash][4 digits]  **Example** `12345-6789`  When the billing country is Canada, the 6-digit postal code must follow this format: [alpha][numeric][alpha][space][numeric][alpha][numeric]  **Example** `A1B 2C3`  **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting.  #### For Payouts:  This field may be sent only for FDC Compass.  #### American Express Direct Before sending the postal code to the processor, CyberSource removes all nonalphanumeric characters and, if the remaining value is longer than nine characters, truncates the value starting from the right side.  #### Atos This field must not contain colons (:).  #### CyberSource through VisaNet Credit card networks cannot process transactions that contain non-ASCII characters. CyberSource through VisaNet accepts and stores non-ASCII characters correctly and displays them correctly in reports. However, the limitations of the credit card networks prevent CyberSource through VisaNet from transmitting non-ASCII characters to the credit card networks. Therefore, CyberSource through VisaNet replaces non-ASCII characters with meaningless ASCII characters for transmission to the credit card networks.  For processor-specific information, see the `bill_zip` request-level field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * Name of the customer’s company.  **CyberSource through VisaNet** Credit card networks cannot process transactions that contain non-ASCII characters. CyberSource through VisaNet accepts and stores non-ASCII characters correctly and displays them correctly in reports. However, the limitations of the credit card networks prevent CyberSource through VisaNet from transmitting non-ASCII characters to the credit card networks. Therefore, CyberSource through VisaNet replaces non-ASCII characters with meaningless ASCII characters for transmission to the credit card networks.  For processor-specific information, see the `company_name` field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * Customer's email address, including the full domain name.  #### CyberSource through VisaNet Credit card networks cannot process transactions that contain non-ASCII characters. CyberSource through VisaNet accepts and stores non-ASCII characters correctly and displays them correctly in reports. However, the limitations of the credit card networks prevent CyberSource through VisaNet from transmitting non-ASCII characters to the credit card networks. Therefore, CyberSource through VisaNet replaces non-ASCII characters with meaningless ASCII characters for transmission to the credit card networks.  **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting.  For processor-specific information, see the `customer_email` request-level field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  #### Invoicing Email address for the customer for sending the invoice. If the invoice is in SENT status and email is updated, the old email customer payment link won't work and you must resend the invoice with the new payment link. 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Payment card billing country. Use the two-character ISO Standard Country Codes.  #### CyberSource through VisaNet Credit card networks cannot process transactions that contain non-ASCII characters. CyberSource through VisaNet accepts and stores non-ASCII characters correctly and displays them correctly in reports. However, the limitations of the credit card networks prevent CyberSource through VisaNet from transmitting non-ASCII characters to the credit card networks. Therefore, CyberSource through VisaNet replaces non-ASCII characters with meaningless ASCII characters for transmission to the credit card networks.  **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting.  For processor-specific information, see the `bill_country` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Title. 
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Customer’s phone number.  #### For Payouts: This field may be sent only for FDC Compass.  CyberSource recommends that you include the country code when the order is from outside the U.S.  For processor-specific information, see the customer_phone field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  #### CyberSource through VisaNet Credit card networks cannot process transactions that contain non-ASCII characters. CyberSource through VisaNet accepts and stores non-ASCII characters correctly and displays them correctly in reports. However, the limitations of the credit card networks prevent CyberSource through VisaNet from transmitting non-ASCII characters to the credit card networks. Therefore, CyberSource through VisaNet replaces non-ASCII characters with meaningless ASCII characters for transmission to the credit card networks. 
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;



  return exports;
}));


