module.exports = function CalculateBillsSettings(){
    var callCost = 0.00;
    var smsCost = 0;
    var levelWarning = 0.00;
    var levelCritical = 0.00;
    var callCostTotal = 0.00;
    var smsCostTotal = 0.00;

    function calculateTotalBills(checkedBill) {
        var overallTotal = getOverallTotalSettings();
       // console.log(overallTotal);
        if (overallTotal < levelCritical){
            if (checkedBill === 'call'){
                callCostTotal += callCost;
            }
            else if(checkedBill === 'sms'){
                smsCostTotal += smsCost;
            }
        }
    }

    function setCallCost(callCostParam){
        var  callCostSettingsAmount = 0;
        
        if (callCostParam !== ''){
            callCostSettingsAmount = parseFloat(callCostParam);
        }
        callCost = callCostSettingsAmount;
    }

    function setSmsCost(smsCostParam) {
        var smsCostSettingsAmount = 0;
        if (smsCostParam !== ''){
            smsCostSettingsAmount = parseFloat(smsCostParam);
        }
       
        smsCost = smsCostSettingsAmount;
    }

    function setWarningLevel(warningLevelCost){
        var warningLevelAmount = 0;
        if (warningLevelCost !== ''){
            warningLevelAmount = parseFloat(warningLevelCost);
        }
        levelWarning = warningLevelAmount;
    }

    function setCriticalLevel(criticalLeveCost) {
        var criticalLevelAmount = 0;
        if (criticalLeveCost !== '') {
            criticalLevelAmount = parseFloat(criticalLeveCost);
        }
        levelCritical = criticalLevelAmount;
    }

    function getCallCost(){
        return callCost;
    }

    function getSmsCost() {
        return smsCost;
    }

    function getWarningLevel(){
        return levelWarning;
    }

    function getCriticalLevel(){
        return levelCritical;
    }

    function getSettedTotal() {
        return getCallCost() + getSmsCost();
    }
    function getClassNameLevel(totalOverall){
        // console.log(totalOverall);
        // console.log(levelCritical);
        if (totalOverall >= levelCritical){
            return 'danger';
        }else if (totalOverall >= levelWarning){
            return 'warning';
        }else {
            return 'totalSettings';
        }
    }

    function getCallCostTotal() {
        return callCostTotal;
    }

    function getSmsCostTotal() {
        return smsCostTotal;
    }

    function getOverallTotalSettings() {
        return getCallCostTotal() + getSmsCostTotal();
    }

    return {
        calculateTotalBills,
        getCallCostTotal,
        getSmsCostTotal,
        getOverallTotalSettings,
        getClassNameLevel,
        setCallCost,
        setSmsCost,
        setWarningLevel,
        setCriticalLevel,
        getSettedTotal,
        getCallCost,
        getSmsCost,
        getWarningLevel,
        getCriticalLevel
    }
}