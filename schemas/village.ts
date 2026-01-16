import { defineType } from 'sanity'

export default defineType({
    name: 'village',
    title: '村落',
    type: 'document',
    fields: [
        // --- 1. 活動體驗 (Activities) ---
        {
            name: 'activities',
            title: '活動體驗頁面',
            type: 'object',
            fields: [
                { name: 'heroTitle', type: 'string', title: 'Hero標題' },
                {
                    name: 'items',
                    title: '活動項目',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'title', type: 'string', title: '標題' },
                            { name: 'desc', type: 'text', title: '描述' },
                            { name: 'image', type: 'image', title: '圖片' }
                        ]
                    }]
                },
                {
                    name: 'quote',
                    title: '引言',
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: '標題' },
                        { name: 'desc', type: 'text', title: '內容' }
                    ]
                },
                {
                    name: 'notices',
                    title: '注意事項',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'id', type: 'string', title: '編號' },
                            { name: 'title', type: 'string', title: '標題' },
                            { name: 'desc', type: 'text', title: '內容' }
                        ]
                    }]
                }
            ]
        },

        // --- 2. 住宿體驗 (Stay) ---
        {
            name: 'stay',
            title: '住宿體驗頁面',
            type: 'object',
            fields: [
                { name: 'heroTitle', type: 'string', title: 'Hero標題' },
                {
                    name: 'rooms',
                    title: '房型介紹',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'title', type: 'string', title: '標題' },
                            { name: 'desc', type: 'text', title: '描述' },
                            { name: 'image', type: 'image', title: '圖片' }
                        ]
                    }]
                },
                {
                    name: 'quote',
                    title: '引言',
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: '標題' },
                        { name: 'desc', type: 'text', title: '內容' }
                    ]
                },
                {
                    name: 'booking',
                    title: '預約區塊',
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: '標題' },
                        { name: 'button', type: 'string', title: '按鈕文字' }
                    ]
                },
                {
                    name: 'notices',
                    title: '入住須知',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'id', type: 'string', title: '編號' },
                            { name: 'title', type: 'string', title: '標題' },
                            { name: 'desc', type: 'text', title: '內容' }
                        ]
                    }]
                }
            ]
        },

        // --- 3. 技能換宿 (Work Swap) ---
        {
            name: 'workSwap',
            title: '技能換宿頁面',
            type: 'object',
            fields: [
                { name: 'heroTitle', type: 'string', title: 'Hero標題' },
                {
                    name: 'items',
                    title: '換宿內容',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'title', type: 'string', title: '標題' },
                            { name: 'desc', type: 'text', title: '描述' },
                            { name: 'image', type: 'image', title: '圖片' }
                        ]
                    }]
                },
                {
                    name: 'quote',
                    title: '引言',
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: '標題' },
                        { name: 'desc', type: 'text', title: '內容' }
                    ]
                },
                {
                    name: 'booking',
                    title: '預約區塊',
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: '標題' },
                        { name: 'button', type: 'string', title: '按鈕文字' }
                    ]
                },
                {
                    name: 'notices',
                    title: '申請須知',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'id', type: 'string', title: '編號' },
                            { name: 'title', type: 'string', title: '標題' },
                            { name: 'desc', type: 'text', title: '內容' }
                        ]
                    }]
                }
            ]
        },

        // --- 4. 交通方式 (Traffic) ---
        {
            name: 'traffic',
            title: '交通方式頁面',
            type: 'object',
            fields: [
                { name: 'heroTitle', type: 'string', title: 'Hero標題' },
                {
                    name: 'map',
                    title: '地圖資訊',
                    type: 'object',
                    fields: [
                        { name: 'address', type: 'string', title: '地址' },
                        { name: 'googleMapLink', type: 'url', title: 'Google Map 連結' }
                    ]
                },
                {
                    name: 'methods',
                    title: '交通方式列表',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'type', type: 'string', title: '類型 (機場/車站...)' },
                            { name: 'title', type: 'string', title: '標題' },
                            { name: 'note', type: 'string', title: '備註' },
                            {
                                name: 'steps',
                                title: '步驟',
                                type: 'array',
                                of: [{
                                    type: 'object',
                                    fields: [
                                        { name: 'id', type: 'string', title: '編號' },
                                        { name: 'action', type: 'string', title: '動作' },
                                        { name: 'desc', type: 'text', title: '描述' }
                                    ]
                                }]
                            }
                        ]
                    }]
                }
            ]
        }
    ],
})
