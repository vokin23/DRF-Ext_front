Ext.define('MyApp.model.work', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'name_work', type: 'string'}, // Для каждого поля воркера из сериализатора опишите его здесь
        {name: 'max_workers', type: 'number'},
        {name: 'zarplata', type: 'number'},
    ]
});
