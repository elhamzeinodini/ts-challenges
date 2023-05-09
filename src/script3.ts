// working with nested objects
interface Result {
    [key: number]: { id: number, label: string, key: string | string[] }
}

const results: Result = [
    {id: 0, label: 'CId', key: 'contentId'},
    {id: 1, label: 'Modified By', key: 'modifiedBy'},
    {id: 2, label: 'Modified Date', key: 'modified'},
    {id: 3, label: 'Status', key: 'contentStatusId'},
    {id: 4, label: 'Status > Type', key: ['contentStatusId', 'contentTypeId']},
    {id: 5, label: 'Title', key: 'title'},
    {id: 6, label: 'Type', key: 'contentTypeId'},
    {id: 7, label: 'Type > Status', key: ['contentTypeId', 'contentStatusId']}
]

/*
turning this nested object into sth that typescript likes
let test = {
    user_id: 5,
    restaurants: [
        {
            restaurant_id: 5,
            restaurant_rank: 5
        },
        {
            restaurant_id: 6,
            restaurant_rank: 6
        }
    ],
    timestamp: 'test'
};
*/

interface Resturants {
    restaurant_id: number,
    restaurant_rank: number
}

interface Info {
    user_id: number,
    restaurants: Array<Resturants>,
    timestamp: string,
}

let test: Info = {
    user_id: 5,
    restaurants: [
        {
            restaurant_id: 5,
            restaurant_rank: 5
        },
        {
            restaurant_id: 6,
            restaurant_rank: 6
        }
    ],
    timestamp: 'test'
};

/*
const data = {
    key: "1",
    label: "Folder 7",
    icon: "fa fa-folder",
    title: "Desktop Folder",
    children: [
      {
        key: "1-0",
        label: "Folder 8",
        icon: "fa fa-folder",
        title: "Documents Folder",
      },
      {
        key: "1-1",
        label: "Folder 9",
        icon: "fa fa-folder",
        title: "Documents Folder",
      },
    ],
}
*/

interface Infos {
    key: string,
    label : string,
    icon : string,
    title : string,
    children?: Infos[]
}

const data:Infos = {
    key: "1",
    label: "Folder 7",
    icon: "fa fa-folder",
    title: "Desktop Folder",
    children: [
        {
            key: "1-0",
            label: "Folder 8",
            icon: "fa fa-folder",
            title: "Documents Folder",
        },
        {
            key: "1-1",
            label: "Folder 9",
            icon: "fa fa-folder",
            title: "Documents Folder",
        },
    ],
}

// add ? to the children property in the interface to fix recursion.