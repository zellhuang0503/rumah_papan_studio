import { defineType } from 'sanity'

export default defineType({
    name: 'village',
    title: '走進新村',
    type: 'document',
    fields: [
        // --- 1. 活動體驗 (Activities) ---
        {
            name: 'activities',
            title: '活動體驗頁面',
            type: 'object',
            fields: [
                { name: 'heroTitle', type: 'string', title: 'Hero標題 (中文)' },
                { name: 'heroTitle_en', type: 'string', title: 'Hero Title (English)' },
                {
                    name: 'items',
                    title: '活動項目',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'title', type: 'string', title: '標題 (中文)' },
                            { name: 'title_en', type: 'string', title: 'Title (English)' },
                            { name: 'desc', type: 'text', title: '描述 (中文)' },
                            { name: 'desc_en', type: 'text', title: 'Description (English)' },
                            { name: 'image', type: 'image', title: '圖片' }
                        ]
                    }]
                },
                {
                    name: 'quote',
                    title: '引言',
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: '標題 (中文)' },
                        { name: 'title_en', type: 'string', title: 'Title (English)' },
                        { name: 'desc', type: 'text', title: '內容 (中文)' },
                        { name: 'desc_en', type: 'text', title: 'Content (English)' }
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
                            { name: 'title', type: 'string', title: '標題 (中文)' },
                            { name: 'title_en', type: 'string', title: 'Title (English)' },
                            { name: 'desc', type: 'text', title: '內容 (中文)' },
                            { name: 'desc_en', type: 'text', title: 'Content (English)' }
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
                { name: 'heroTitle', type: 'string', title: 'Hero標題 (中文)' },
                { name: 'heroTitle_en', type: 'string', title: 'Hero Title (English)' },
                {
                    name: 'rooms',
                    title: '房型介紹',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'title', type: 'string', title: '標題 (中文)' },
                            { name: 'title_en', type: 'string', title: 'Title (English)' },
                            { name: 'desc', type: 'text', title: '描述 (中文)' },
                            { name: 'desc_en', type: 'text', title: 'Description (English)' },
                            { name: 'image', type: 'image', title: '圖片' }
                        ]
                    }]
                },
                {
                    name: 'quote',
                    title: '引言',
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: '標題 (中文)' },
                        { name: 'title_en', type: 'string', title: 'Title (English)' },
                        { name: 'desc', type: 'text', title: '內容 (中文)' },
                        { name: 'desc_en', type: 'text', title: 'Content (English)' }
                    ]
                },
                {
                    name: 'booking',
                    title: '預約區塊',
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: '標題 (中文)' },
                        { name: 'title_en', type: 'string', title: 'Title (English)' },
                        { name: 'button', type: 'string', title: '按鈕文字 (中文)' },
                        { name: 'button_en', type: 'string', title: 'Button Text (English)' }
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
                            { name: 'title', type: 'string', title: '標題 (中文)' },
                            { name: 'title_en', type: 'string', title: 'Title (English)' },
                            { name: 'desc', type: 'text', title: '內容 (中文)' },
                            { name: 'desc_en', type: 'text', title: 'Content (English)' }
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
                { name: 'heroTitle', type: 'string', title: 'Hero標題 (中文)' },
                { name: 'heroTitle_en', type: 'string', title: 'Hero Title (English)' },
                {
                    name: 'items',
                    title: '換宿內容',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'title', type: 'string', title: '標題 (中文)' },
                            { name: 'title_en', type: 'string', title: 'Title (English)' },
                            { name: 'desc', type: 'text', title: '描述 (中文)' },
                            { name: 'desc_en', type: 'text', title: 'Description (English)' },
                            { name: 'image', type: 'image', title: '圖片' }
                        ]
                    }]
                },
                {
                    name: 'quote',
                    title: '引言',
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: '標題 (中文)' },
                        { name: 'title_en', type: 'string', title: 'Title (English)' },
                        { name: 'desc', type: 'text', title: '內容 (中文)' },
                        { name: 'desc_en', type: 'text', title: 'Content (English)' }
                    ]
                },
                {
                    name: 'booking',
                    title: '預約區塊',
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: '標題 (中文)' },
                        { name: 'title_en', type: 'string', title: 'Title (English)' },
                        { name: 'button', type: 'string', title: '按鈕文字 (中文)' },
                        { name: 'button_en', type: 'string', title: 'Button Text (English)' }
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
                            { name: 'title', type: 'string', title: '標題 (中文)' },
                            { name: 'title_en', type: 'string', title: 'Title (English)' },
                            { name: 'desc', type: 'text', title: '內容 (中文)' },
                            { name: 'desc_en', type: 'text', title: 'Content (English)' }
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
                { name: 'heroTitle', type: 'string', title: 'Hero標題 (中文)' },
                { name: 'heroTitle_en', type: 'string', title: 'Hero Title (English)' },
                {
                    name: 'map',
                    title: '地圖資訊',
                    type: 'object',
                    fields: [
                        { name: 'address', type: 'string', title: '地址 (中文)' },
                        { name: 'address_en', type: 'string', title: 'Address (English)' },
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
                            { name: 'type', type: 'string', title: '類型 (中文)' },
                            { name: 'type_en', type: 'string', title: 'Type (English)' },
                            { name: 'title', type: 'string', title: '標題 (中文)' },
                            { name: 'title_en', type: 'string', title: 'Title (English)' },
                            { name: 'note', type: 'string', title: '備註 (中文)' },
                            { name: 'note_en', type: 'string', title: 'Note (English)' },
                            {
                                name: 'steps',
                                title: '步驟',
                                type: 'array',
                                of: [{
                                    type: 'object',
                                    fields: [
                                        { name: 'id', type: 'string', title: '編號' },
                                        { name: 'action', type: 'string', title: '動作 (中文)' },
                                        { name: 'action_en', type: 'string', title: 'Action (English)' },
                                        { name: 'desc', type: 'text', title: '描述 (中文)' },
                                        { name: 'desc_en', type: 'text', title: 'Description (English)' }
                                    ]
                                }]
                            }
                        ]
                    }]
                }
            ]
        },

        // --- 5. 觀光地圖 (Map) ---
        {
            name: 'map',
            title: '觀光地圖頁面',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: '標題 (中文)' },
                { name: 'title_en', type: 'string', title: 'Title (English)' },
                { name: 'subtitle', type: 'string', title: '副標題 (中文)' },
                { name: 'subtitle_en', type: 'string', title: 'Subtitle (English)' },
                {
                    name: 'locations',
                    title: '景點列表',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'id', type: 'string', title: 'ID' },
                            { name: 'name', type: 'string', title: '名稱 (中文)' },
                            { name: 'name_en', type: 'string', title: 'Name (English)' },
                            { name: 'subName', type: 'string', title: '副名稱/店名 (中文)' },
                            { name: 'subName_en', type: 'string', title: 'Sub Name (English)' },
                            { name: 'address', type: 'string', title: '地址 (中文)' },
                            { name: 'address_en', type: 'string', title: 'Address (English)' },
                            { name: 'category', type: 'string', title: '分類', options: { list: ['food', 'temple', 'attraction'] } },
                            { name: 'featureTitle', type: 'string', title: '特色標題 (中文)' },
                            { name: 'featureTitle_en', type: 'string', title: 'Feature Title (English)' },
                            { name: 'featureDescription', type: 'array', title: '特色描述 (中文)', of: [{ type: 'string' }] },
                            { name: 'featureDescription_en', type: 'array', title: 'Feature Description (English)', of: [{ type: 'string' }] },
                            { name: 'distanceInfo', type: 'string', title: '距離資訊 (中文)' },
                            { name: 'distanceInfo_en', type: 'string', title: 'Distance Info (English)' },
                            { name: 'coordinateX', type: 'number', title: 'X 座標 (%)' },
                            { name: 'coordinateY', type: 'number', title: 'Y 座標 (%)' },
                            { name: 'image', type: 'image', title: '圖片' }
                        ]
                    }]
                }
            ]
        }
    ],
    preview: {
        prepare() {
            return {
                title: '村落頁面內容設定',
                subtitle: '包含活動、住宿、換宿、交通資訊'
            }
        }
    }
})

