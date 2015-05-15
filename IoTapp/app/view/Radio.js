
 // This is used by the NestedList to allow editing of an item in the Store
 
Ext.define('IoT.view.Radio', {
     extend: 'Ext.form.Panel',
    // id: 'Radio',
     alias : 'widget.Radio' ,
    // config: {
        
        items: [{
            html: 'TEST'
        },


        {
                    xtype: 'textfield',
                    name: 'text',
                    label: 'Name',
                    readOnly: true
        },
        {
                    xtype: 'spinnerfield',
                    label: 'Volume',
                    defaultValue: 26,
                    minValue: 0,
                    maxValue: 100,
                    increment: 1,
                    cycle: false
        },
        {
                    xtype: 'spinnerfield',
                    label: 'Zender',
                    minValue: 0,
                    maxValue: 100,
                    increment: 1,
                    cycle: false
        },
        {
                    xtype: 'togglefield',
                    name: 'power',
                    label: 'Power',
                    value: 1
        }


        ]
    // }
});
