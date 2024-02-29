Ext.define('MyApp.model.worker', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'first_name', type: 'string'}, // Для каждого поля воркера из сериализатора опишите его здесь
        {name: 'second_name', type: 'string'},
        {name: 'otchestvo', type: 'string'},
        {name: 'date_rojdenia', type: 'date'}, // Например, date для полей дат
        {name: 'work', type: 'string'},
        {name: 'stavka', type: 'number'}, // Например, number для числовых полей
        {name: 'salary', type: 'number'},
    ]
});