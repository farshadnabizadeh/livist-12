const filtersDefinitions = [
    {
        id: 'yabanci-sagilik',
        categoryId: 'yabanci-sagilik',
        filters : [
            {
                title: 'Paket seçimi',
                fields: [
                    {
                        lable: 'EKO',
                        value: 'eko',
                        productRelationId: "2"
                    },
                    {
                        lable: 'Normal',
                        value: 'normal',
                        productRelationId: "0" 
                    },
                    {
                        lable: 'VIP',
                        value: 'vip',
                        productRelationId: "1" 
                    },

                ]
            },

]
            
        
    }

]

export {filtersDefinitions}