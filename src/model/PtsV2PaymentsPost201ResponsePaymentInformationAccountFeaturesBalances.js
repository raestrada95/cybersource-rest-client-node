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
    root.CyberSource.PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances model module.
   * @module model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances} The populated <code>PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountType')) {
        obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('amountType')) {
        obj['amountType'] = ApiClient.convertToType(data['amountType'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
    }
    return obj;
  }

  /**
   * Type of account.  This value is returned only if you request a balance inquiry.  Possible values:   - `00`: Not applicable or not specified  - `10`: Savings account  - `20`: Checking account  - `30`: Credit card account  - `40`: Universal account  Balance Account Types returned on EBT Debit card transactions:   - `96`: Cash Benefits Account (PIN Debit Gateway EBT only)  - `98`: Food Stamp Account (PIN Debit Gateway EBT only) 
   * @member {String} accountType
   */
  exports.prototype['accountType'] = undefined;
  /**
   * Remaining balance on the account. If the processor returns the sign, positive or negative, this sign is prefixed to the amount value as (+/-). 
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Type of amount. This value is returned only if you request a balance inquiry. The issuer determines the value that is returned.  Possible values for deposit accounts:   - `01`: Current ledger (posted) balance.  - `02`: Current available balance, which is typically the ledger balance minus outstanding authorizations. Some  depository institutions also include pending deposits and the credit or overdraft line associated with the account.  Possible values for credit card accounts:   - `01`: Credit amount remaining for customer (open to buy).  - `02`: Credit limit. 
   * @member {String} amountType
   */
  exports.prototype['amountType'] = undefined;
  /**
   * Currency of the remaining balance on the account. 
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;



  return exports;
}));


