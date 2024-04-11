export class menuConfig{
    public static data =  {
        "Data Manager": {
            "icon": "fa-solid fa-circle-dot",
            "subModules": [
                {
                    "url": "/dm/dataService",
                    "resourceName": "dataService"
                },
                {
                    "url": "/dm/dataSource",
                    "resourceName": "dataSource"
                }
                // {
                //     "url": "/analytic/widgetlist",
                //     "resourceName": "WIDGET"

                // },
                // {
                //     "url": "/dm/dataSource",
                //     "resourceName": "dataSource"

                // }
            ]
        }
    };
}