Ext.define('IoT.model.Device', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'text', type: 'string'},
            {name: 'icon', type: 'string'},
            {name: 'temp', type: 'string'},
            {name: 'device', type: 'string'},
        ]
    }
});
