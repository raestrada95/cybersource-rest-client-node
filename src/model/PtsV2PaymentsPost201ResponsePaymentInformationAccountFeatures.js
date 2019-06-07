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
    root.CyberSource.PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures model module.
   * @module model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures} The populated <code>PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountType')) {
        obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
      }
      if (data.hasOwnProperty('accountStatus')) {
        obj['accountStatus'] = ApiClient.convertToType(data['accountStatus'], 'String');
      }
      if (data.hasOwnProperty('balanceAmount')) {
        obj['balanceAmount'] = ApiClient.convertToType(data['balanceAmount'], 'String');
      }
      if (data.hasOwnProperty('balanceAmountType')) {
        obj['balanceAmountType'] = ApiClient.convertToType(data['balanceAmountType'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('balanceSign')) {
        obj['balanceSign'] = ApiClient.convertToType(data['balanceSign'], 'String');
      }
      if (data.hasOwnProperty('affluenceIndicator')) {
        obj['affluenceIndicator'] = ApiClient.convertToType(data['affluenceIndicator'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('commercial')) {
        obj['commercial'] = ApiClient.convertToType(data['commercial'], 'String');
      }
      if (data.hasOwnProperty('group')) {
        obj['group'] = ApiClient.convertToType(data['group'], 'String');
      }
      if (data.hasOwnProperty('healthCare')) {
        obj['healthCare'] = ApiClient.convertToType(data['healthCare'], 'String');
      }
      if (data.hasOwnProperty('payroll')) {
        obj['payroll'] = ApiClient.convertToType(data['payroll'], 'String');
      }
      if (data.hasOwnProperty('level3Eligible')) {
        obj['level3Eligible'] = ApiClient.convertToType(data['level3Eligible'], 'String');
      }
      if (data.hasOwnProperty('pinlessDebit')) {
        obj['pinlessDebit'] = ApiClient.convertToType(data['pinlessDebit'], 'String');
      }
      if (data.hasOwnProperty('signatureDebit')) {
        obj['signatureDebit'] = ApiClient.convertToType(data['signatureDebit'], 'String');
      }
      if (data.hasOwnProperty('prepaid')) {
        obj['prepaid'] = ApiClient.convertToType(data['prepaid'], 'String');
      }
      if (data.hasOwnProperty('regulated')) {
        obj['regulated'] = ApiClient.convertToType(data['regulated'], 'String');
      }
    }
    return obj;
  }

  /**
   * Type of account. This value is returned only if you requested a balance inquiry. Possible values:   - `00`: Not applicable or not specified  - `10`: Savings account  - `20`: Checking account  - `30`: Credit card account  - `40`: Universal account 
   * @member {String} accountType
   */
  exports.prototype['accountType'] = undefined;
  /**
   * Possible values:   - `N`: Nonregulated  - `R`: Regulated  **Note** This field is returned only for CyberSource through VisaNet. 
   * @member {String} accountStatus
   */
  exports.prototype['accountStatus'] = undefined;
  /**
   * Remaining balance on the account. 
   * @member {String} balanceAmount
   */
  exports.prototype['balanceAmount'] = undefined;
  /**
   * Type of amount. This value is returned only if you requested a balance inquiry. The issuer determines the value that is returned. Possible values for deposit accounts:   - `01`: Current ledger (posted) balance.  - `02`: Current available balance, which is typically the ledger balance less outstanding authorizations.  Some depository institutions also include pending deposits and the credit or overdraft line associated with the account. Possible values for credit card accounts:   - `01`: Credit amount remaining for customer (open to buy).  - `02`: Credit limit. 
   * @member {String} balanceAmountType
   */
  exports.prototype['balanceAmountType'] = undefined;
  /**
   * Currency of the remaining balance on the account. For the possible values, see the [ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf)  For details, see `auth_account_balance_currency` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Sign for the remaining balance on the account. Returned only when the processor returns this value. Possible values:  Possible values:  - **+**  - **-** 
   * @member {module:model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures.BalanceSignEnum} balanceSign
   */
  exports.prototype['balanceSign'] = undefined;
  /**
   * **Chase Paymentech Solutions**  Indicates whether a customer has high credit limits. This information enables you to market high cost items to these customers and to understand the kinds of cards that high income customers are using.  This field is supported for Visa, Mastercard, Discover, and Diners Club. Possible values:   - **Y**: Yes  - **N**: No  - **X**: Not applicable / Unknown  **Litle**  Flag that indicates that a Visa cardholder or Mastercard cardholder is in one of the affluent categories. Possible values:   - **AFFLUENT**: High income customer with high spending pattern (>100k USD annual income and >40k USD annual    card usage).  - **MASS AFFLUENT**: High income customer (>100k USD annual income).  **Processor specific maximum length**:   - Chase Paymentech Solutions: 1  - Litle: 13 
   * @member {String} affluenceIndicator
   */
  exports.prototype['affluenceIndicator'] = undefined;
  /**
   * #### CyberSource through VisaNet Visa or Mastercard product ID that is associated with the primary account number (PAN). For descriptions of the Visa product IDs, see the Product ID table on the [Visa Request & Response Codes web page.](https://developer.visa.com/guides/request_response_codes)  Data Length: String (3)  #### GPN Visa or Mastercard product ID that is associated with the primary account number (PAN). For descriptions of the Visa product IDs, seepag the Product ID table on the Visa Request & Response Codes web page at https://developer.visa.com/guides/request_response_codes. For descriptions of the Mastercard product IDs, see \"Product IDs\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm)  Data Length: String (3)  #### Worldpay VAP **Important** Before using this field on Worldpay VAP, you must contact CyberSource Customer Support to have your account configured for this feature.  Type of card used in the transaction. The only possible value is: - `PREPAID`: Prepaid Card  Data Length: String (7)  #### RBS WorldPay Atlanta Type of card used in the transaction. Possible values: - `B`: Business Card - `O`: Noncommercial Card - `R`: Corporate Card - `S`: Purchase Card - `Blank`: Purchase card not supported  Data Length: String (1) 
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * Indicates whether the card is a commercial card, which enables you to include Level II data in your transaction requests. This field is supported for Visa and Mastercard on **Chase Paymentech Solutions**. Possible values:   - **Y**: Yes  - **N**: No  - **X**: Not applicable / Unknown  For details, see `auth_card_commercial` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} commercial
   */
  exports.prototype['commercial'] = undefined;
  /**
   * Type of commercial card. This field is supported only for CyberSource through VisaNet. Possible values:   - **B**: Business card  - **R**: Corporate card  - **S**: Purchasing card  - **0**: Noncommercial card 
   * @member {String} group
   */
  exports.prototype['group'] = undefined;
  /**
   * Indicates whether the card is a healthcare card. This field is supported for Visa and Mastercard on **Chase Paymentech Solutions**. Possible values:   - `Y`: Yes  - `N`: No  - `X`: Not applicable / Unknown  For details, see `auth_card_healthcare` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} healthCare
   */
  exports.prototype['healthCare'] = undefined;
  /**
   * Indicates whether the card is a payroll card. This field is supported for Visa, Discover, Diners Club, and JCB on **Chase Paymentech Solutions**. Possible values:   - `Y`: Yes  - `N`: No  - `X`: Not applicable / Unknown  For details, see `auth_card_payroll` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} payroll
   */
  exports.prototype['payroll'] = undefined;
  /**
   * Indicates whether the card is eligible for Level III interchange fees, which enables you to include Level III data in your transaction requests. This field is supported for Visa and Mastercard on **Chase Paymentech Solutions**. Possible values:   - `Y`: Yes  - `N`: No  - `X`: Not applicable / Unknown  For details, see `auth_card_level_3_eligible` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} level3Eligible
   */
  exports.prototype['level3Eligible'] = undefined;
  /**
   * Indicates whether the card is a PINless debit card. This field is supported for Visa and Mastercard on **Chase Paymentech Solutions**. Possible values:   - `Y`: Yes  - `N`: No  - `X`: Not applicable / Unknown  For details, see `auth_card_pinless_debit` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} pinlessDebit
   */
  exports.prototype['pinlessDebit'] = undefined;
  /**
   * Indicates whether the card is a signature debit card.  This information enables you to alter the way an order is processed. For example, you might not want to reauthorize a transaction for a signature debit card, or you might want to perform reversals promptly for a signature debit card. This field is supported for Visa, Mastercard, and Maestro (International) on Chase Paymentech Solutions. Possible values:   - `Y`: Yes  - `N`: No  - `X`: Not applicable / Unknown  For details, see `auth_card_signature_debit` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} signatureDebit
   */
  exports.prototype['signatureDebit'] = undefined;
  /**
   * Indicates whether the card is a prepaid card. This information enables you to determine when a gift card or prepaid card is presented for use when establishing a new recurring, installment, or deferred billing relationship.  This field is supported for Visa, Mastercard, Discover, Diners Club, and JCB on Chase Paymentech Solutions. Possible values:   - `Y`: Yes  - `N`: No  - `X`: Not applicable / Unknown  For details, see the `auth_card_prepaid` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} prepaid
   */
  exports.prototype['prepaid'] = undefined;
  /**
   * Indicates whether the card is regulated according to the Durbin Amendment. If the card is regulated, the card issuer is subject to price caps and interchange rules. This field is supported for Visa, Mastercard, Discover, Diners Club, and JCB on Chase Paymentech Solutions. Possible values:   - `Y`: Yes  - `N`: No  - `X`: Not applicable / Unknown  For details, see `auth_card_regulated` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} regulated
   */
  exports.prototype['regulated'] = undefined;


  /**
   * Allowed values for the <code>balanceSign</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BalanceSignEnum = {
    /**
     * value: "+"
     * @const
     */
    "PLUS": "+",
    /**
     * value: "-"
     * @const
     */
    "MINUS": "-"  };


  return exports;
}));


