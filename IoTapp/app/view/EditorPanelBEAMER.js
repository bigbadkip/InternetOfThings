
 // This is used by the NestedList to allow editing of an item in the Store
 
Ext.define('IoT.view.EditorPanelBEAMER', {
    extend: 'Ext.form.Panel',
    id: 'editorPanelBEAMER',
    config: {
        modal: true,
        hideOnMaskTap: false,
        centered: true,
        width: '90%',
        scrollable: null,
        items: [
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
                    label: 'Input',
                    minValue: 1,
                    maxValue: 4,
                    increment: 1,
                    cycle: true
        },
        {
                    xtype: 'togglefield',
                    name: 'power',
                    label: 'Power',
                    value: 1
        },,
         {
            docked: 'top',
            xtype: 'toolbar',
            title: 'Device Details'
        }, {
            docked: 'bottom',
            xtype: 'toolbar',
            items: [
                {
                    text: 'Cancel',
                    handler: function() {
                        Ext.getCmp('changeButton').setDisabled(false);
                        Ext.getCmp('editorPanelBEAMER').hide();
                    }
                }, {
                    xtype: 'spacer'
                }, {
                    text: 'Change',
                    id: 'changeButton',
                    ui: 'action',
                    handler: function() {
                        var formPanel = Ext.getCmp('editorPanelBEAMER'),
                            formRecord = formPanel.getRecord(),
                            values = formPanel.getValues();

                        if (formRecord) {
                            formRecord.set(values);
                            formRecord.commit();
                        }

                        formPanel.hide();
                    }
                }
            ]
        }]
    }
});
