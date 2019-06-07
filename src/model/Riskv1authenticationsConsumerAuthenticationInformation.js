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
    root.CyberSource.Riskv1authenticationsConsumerAuthenticationInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Riskv1authenticationsConsumerAuthenticationInformation model module.
   * @module model/Riskv1authenticationsConsumerAuthenticationInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1authenticationsConsumerAuthenticationInformation</code>.
   * @alias module:model/Riskv1authenticationsConsumerAuthenticationInformation
   * @class
   * @param mcc {String} Merchant category code. **Important** Required only for Visa Secure transactions in Brazil. Do not use this request field for any other types of transactions. 
   * @param referenceId {String} Reference ID that corresponds to the device fingerprinting data that was collected previously. Note Required for Hybrid integration. 
   * @param transactionMode {String} Transaction mode identifier. Identifies the channel from which the transaction originates. Possible values: - `MOTO` - MOTO (Mail Order Telephone Order) - `RETAIL` - Retail - `ECOMMERCE` - eCommerce - `MOBILE` - Mobile Device - `TABLET` - Tablet 
   */
  var exports = function(mcc, referenceId, transactionMode) {
    var _this = this;











    _this['mcc'] = mcc;






    _this['referenceId'] = referenceId;
    _this['transactionMode'] = transactionMode;
  };

  /**
   * Constructs a <code>Riskv1authenticationsConsumerAuthenticationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1authenticationsConsumerAuthenticationInformation} obj Optional instance to populate.
   * @return {module:model/Riskv1authenticationsConsumerAuthenticationInformation} The populated <code>Riskv1authenticationsConsumerAuthenticationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alternateAuthenticationData')) {
        obj['alternateAuthenticationData'] = ApiClient.convertToType(data['alternateAuthenticationData'], 'String');
      }
      if (data.hasOwnProperty('alternateAuthenticationDate')) {
        obj['alternateAuthenticationDate'] = ApiClient.convertToType(data['alternateAuthenticationDate'], 'String');
      }
      if (data.hasOwnProperty('alternateAuthenticationMethod')) {
        obj['alternateAuthenticationMethod'] = ApiClient.convertToType(data['alternateAuthenticationMethod'], 'String');
      }
      if (data.hasOwnProperty('authenticationTransactionId')) {
        obj['authenticationTransactionId'] = ApiClient.convertToType(data['authenticationTransactionId'], 'String');
      }
      if (data.hasOwnProperty('challengeCode')) {
        obj['challengeCode'] = ApiClient.convertToType(data['challengeCode'], 'String');
      }
      if (data.hasOwnProperty('customerCardAlias')) {
        obj['customerCardAlias'] = ApiClient.convertToType(data['customerCardAlias'], 'String');
      }
      if (data.hasOwnProperty('defaultCard')) {
        obj['defaultCard'] = ApiClient.convertToType(data['defaultCard'], 'Boolean');
      }
      if (data.hasOwnProperty('installmentTotalCount')) {
        obj['installmentTotalCount'] = ApiClient.convertToType(data['installmentTotalCount'], 'Number');
      }
      if (data.hasOwnProperty('marketingOptIn')) {
        obj['marketingOptIn'] = ApiClient.convertToType(data['marketingOptIn'], 'Boolean');
      }
      if (data.hasOwnProperty('marketingSource')) {
        obj['marketingSource'] = ApiClient.convertToType(data['marketingSource'], 'String');
      }
      if (data.hasOwnProperty('mcc')) {
        obj['mcc'] = ApiClient.convertToType(data['mcc'], 'String');
      }
      if (data.hasOwnProperty('messageCategory')) {
        obj['messageCategory'] = ApiClient.convertToType(data['messageCategory'], 'String');
      }
      if (data.hasOwnProperty('npaCode')) {
        obj['npaCode'] = ApiClient.convertToType(data['npaCode'], 'String');
      }
      if (data.hasOwnProperty('overridePaymentMethod')) {
        obj['overridePaymentMethod'] = ApiClient.convertToType(data['overridePaymentMethod'], 'String');
      }
      if (data.hasOwnProperty('productCode')) {
        obj['productCode'] = ApiClient.convertToType(data['productCode'], 'String');
      }
      if (data.hasOwnProperty('requestorId')) {
        obj['requestorId'] = ApiClient.convertToType(data['requestorId'], 'String');
      }
      if (data.hasOwnProperty('requestorName')) {
        obj['requestorName'] = ApiClient.convertToType(data['requestorName'], 'String');
      }
      if (data.hasOwnProperty('referenceId')) {
        obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
      }
      if (data.hasOwnProperty('transactionMode')) {
        obj['transactionMode'] = ApiClient.convertToType(data['transactionMode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Data that documents and supports a specific authentication process. 
   * @member {String} alternateAuthenticationData
   */
  exports.prototype['alternateAuthenticationData'] = undefined;
  /**
   * Date and time in UTC of the cardholder authentication. Format: YYYYMMDDHHMM 
   * @member {String} alternateAuthenticationDate
   */
  exports.prototype['alternateAuthenticationDate'] = undefined;
  /**
   * Mechanism used by the cardholder to authenticate to the 3D Secure requestor. Possible values: - `01`: No authentication occurred - `02`: Login using merchant system credentials - `03`: Login using Federated ID - `04`: Login using FIDO Authenticator 
   * @member {String} alternateAuthenticationMethod
   */
  exports.prototype['alternateAuthenticationMethod'] = undefined;
  /**
   * Payer authentication transaction identifier passed to link the check enrollment and validate authentication messages. **Note**: Required for Standard integration for enroll service. Required for Hybrid integration for validate service. 
   * @member {String} authenticationTransactionId
   */
  exports.prototype['authenticationTransactionId'] = undefined;
  /**
   * Possible values: - `01`: No preference - `02`: No challenge request - `03`: Challenge requested (3D Secure requestor preference) - `04`: Challenge requested (mandate) - `05-79`: Reserved for EMVCo future use (values invalid until defined by EMVCo) - `80-99`: Reserved for DS use  For details, see `pa_challenge_code` field description in [CyberSource Payer Authentication Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Payer_Authentication_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} challengeCode
   */
  exports.prototype['challengeCode'] = undefined;
  /**
   * An alias that uniquely identifies the customer's account and credit card on file. Note This field is required if Tokenization is enabled in the merchant profile settings. 
   * @member {String} customerCardAlias
   */
  exports.prototype['customerCardAlias'] = undefined;
  /**
   * Indicates that the card being used is the one designated as the primary payment card for purchase. Recommended for Discover ProtectBuy. 
   * @member {Boolean} defaultCard
   */
  exports.prototype['defaultCard'] = undefined;
  /**
   * An integer value greater than 1 indicating the max number of permitted authorizations for installment payments. **Note** This is required if the merchant and cardholder have agreed to installment payments. 
   * @member {Number} installmentTotalCount
   */
  exports.prototype['installmentTotalCount'] = undefined;
  /**
   * Indicates whether the customer has opted in for marketing offers. Recommended for Discover ProtectBuy. 
   * @member {Boolean} marketingOptIn
   */
  exports.prototype['marketingOptIn'] = undefined;
  /**
   * Indicates origin of the marketing offer. Recommended for Discover ProtectBuy. 
   * @member {String} marketingSource
   */
  exports.prototype['marketingSource'] = undefined;
  /**
   * Merchant category code. **Important** Required only for Visa Secure transactions in Brazil. Do not use this request field for any other types of transactions. 
   * @member {String} mcc
   */
  exports.prototype['mcc'] = undefined;
  /**
   * Category of the message for a specific use case. Possible values:  - `01`: PA- payment authentication - `02`: NPA- non-payment authentication - `03-79`: Reserved for EMVCo future use (values invalid until defined by EMVCo) - `80-99`: Reserved for DS use 
   * @member {String} messageCategory
   */
  exports.prototype['messageCategory'] = undefined;
  /**
   * Non-Payer Authentication Indicator. Possible values: - `01`: Add card - `02`: Maintain card information - `03`: Cardholder verification for EMV token - `04-80` Reserved for EMVCo - `80-90` Reserved DS 
   * @member {String} npaCode
   */
  exports.prototype['npaCode'] = undefined;
  /**
   * Specifies the Brazilian payment account type used for the transaction. This field overrides other payment types that might be specified in the request. Use one of the following values for this field: - `NA`: Not applicable. Do not override other payment types that are specified in the request. - `CR`: Credit card. - `DB`: Debit card. - `VSAVR`: Visa Vale Refeicao - `VSAVA`: Visa Vale Alimentacao **Important** Required only for Visa Secure transactions in Brazil. Do not use this request field for any other types of transactions. 
   * @member {String} overridePaymentMethod
   */
  exports.prototype['overridePaymentMethod'] = undefined;
  /**
   * Specifies the product code, which designates the type of transaction. Specify one of the following values for this field: - AIR: Airline purchase Important Required for American Express SafeKey (U.S.). - `ACC`: Accommodation Rental - `ACF`: Account funding - `CHA`: Check acceptance - `DIG`: Digital Goods - `DSP`: Cash Dispensing - `GAS`: Fuel - `GEN`: General Retail - `LUX`: Luxury Retail - `PAL`: Prepaid activation and load - `PHY`: Goods or services purchase - `QCT`: Quasi-cash transaction - `REN`: Car Rental - `RES`: Restaurant - `SVC`: Services - `TBD`: Other - `TRA`: Travel **Important** Required for Visa Secure transactions in Brazil. Do not use this request field for any other types of transactions. 
   * @member {String} productCode
   */
  exports.prototype['productCode'] = undefined;
  /**
   * Cardinal's directory server assigned 3DS Requestor ID value
   * @member {String} requestorId
   */
  exports.prototype['requestorId'] = undefined;
  /**
   * Cardinal's directory server assigned 3DS Requestor Name value
   * @member {String} requestorName
   */
  exports.prototype['requestorName'] = undefined;
  /**
   * Reference ID that corresponds to the device fingerprinting data that was collected previously. Note Required for Hybrid integration. 
   * @member {String} referenceId
   */
  exports.prototype['referenceId'] = undefined;
  /**
   * Transaction mode identifier. Identifies the channel from which the transaction originates. Possible values: - `MOTO` - MOTO (Mail Order Telephone Order) - `RETAIL` - Retail - `ECOMMERCE` - eCommerce - `MOBILE` - Mobile Device - `TABLET` - Tablet 
   * @member {String} transactionMode
   */
  exports.prototype['transactionMode'] = undefined;



  return exports;
}));


