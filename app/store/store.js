Ext.define('MyApp.store.Worker', {
    extend: 'Ext.data.Store',
    alias: 'store.workers',
    model: 'MyApp.model.worker',
    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/api/worker/get_data', // URL вашего Django API endpoint
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true
});
Ext.define('MyApp.store.Works', {
    extend: 'Ext.data.Store',
    alias: 'store.works',
    model: 'MyApp.model.work',
    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/api/work/get_data', // URL вашего Django API endpoint
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true
});
