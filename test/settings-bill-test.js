const assert = require('assert');
const moment = require('moment')
const SettingsBill = require('../settings-bill')

describe('settings-bills', function(){
    const settingsBill = SettingsBill(moment);

    context('Recording calls', function(){
        it('should be able to record calls', function(){
            settingsBill.recordAction('call');
            assert.equal(1, settingsBill.actionsFor('call').length);
        });
    });
    
    context('Recording smss', function(){
        it('should be able to record sms', function(){
            settingsBill.recordAction('sms');
            assert.deepEqual(1, settingsBill.actionsFor('sms').length);
        });
    });

    context('Setting the costs', function(){
        it('should be able to set call cost settings', function(){
            settingsBill.setCallCost(2.30);
            assert.equal(2.30, settingsBill.getCallCost());
        });
    
        it('should be able to set sms cost settings', function(){
            settingsBill.setSmsCost(1.30);
            assert.equal(1.30, settingsBill.getSmsCost());
        });
    
        it('should be able to set warning level settings', function(){
            settingsBill.setWarningLevel(10.00);
            assert.equal(10.00, settingsBill.getWarningLevel());
        });
    
        it('should be able to set critical level settings', function(){
            settingsBill.setCriticalLevel(20.00);
            assert.equal(20.00, settingsBill.getCriticalLevel());
        });
    });
    
    // context('Calculating the totals', function(){
    //     const settingsBill = SettingsBill(moment);
    // it('should be able to calculate the right totals from the setted settings', function(){
    //     settingsBill.setCallCost(2.40),
    //     settingsBill.setSmsCost(1.20),
    //     settingsBill.setWarningLevel(10.00),
    //     settingsBill.setCriticalLevel(20.00)
    // });
    //    settingsBill.recordAction('call');
    //    settingsBill.recordAction('sms');

    //     assert.equal(2.40, settingsBill.getCallCostTotal());
    //     assert.equal(1.20, settingsBill.getSmsCostTotal());
    //     assert.equal(3.60, settingsBill.getOverallTotalSettings());
    // });

    // context('NNotice warning level', function(){
    //     it('Notice when critical warning level is reached', function(){

    //     })
    // })
});