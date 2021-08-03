const assert = require('assert');
const moment = require('moment')
const SettingsBill = require('../settings-bill')

describe('settings-bill', function(){
    const settingsBill = SettingsBill(moment);

    it('should be able to record calls', function(){
        settingsBill.recordAction('call');
        assert.equal(1, settingsBill.actionsFor('call').length);
    });
});