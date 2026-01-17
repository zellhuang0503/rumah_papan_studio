import { defineType } from 'sanity'

export default defineType({
    name: 'about',
    title: '關於班厝',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: '標題 (中文)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'title_en',
            title: 'Title (English)',
            type: 'string',
        },
        {
            name: 'heroStory',
            title: 'About頁面: 主視覺故事卡片',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: '標題 (中文)' },
                { name: 'title_en', type: 'string', title: 'Title (English)' },
                { name: 'subtitle', type: 'string', title: '副標題 (中文)' },
                { name: 'subtitle_en', type: 'string', title: 'Subtitle (English)' },
                { name: 'tag', type: 'string', title: '標籤文字 (中文)' },
                { name: 'tag_en', type: 'string', title: 'Tag (English)' },
                { name: 'path', type: 'string', title: '連結路徑' },
                { name: 'image', type: 'image', title: '圖片' }
            ]
        },
        {
            name: 'heroCards',
            title: 'About頁面: 右側導航卡片',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: '標題 (中文)' },
                    { name: 'title_en', type: 'string', title: 'Title (English)' },
                    { name: 'subtitle', type: 'string', title: '副標題 (中文)' },
                    { name: 'subtitle_en', type: 'string', title: 'Subtitle (English)' },
                    { name: 'path', type: 'string', title: '連結路徑' },
                    { name: 'image', type: 'image', title: '圖片' }
                ]
            }]
        },
        {
            name: 'environment',
            title: '環境介紹',
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
            name: 'products',
            title: '好物介紹',
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
            name: 'rental',
            title: '場地租借',
            type: 'object',
            fields: [
                {
                    name: 'highlights',
                    title: '輪播亮點',
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
                    name: 'process',
                    title: '租借流程',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'step', type: 'string', title: '步驟編號 (例如: 01)' },
                            { name: 'title', type: 'string', title: '標題 (中文)' },
                            { name: 'title_en', type: 'string', title: 'Title (English)' },
                            { name: 'desc', type: 'text', title: '描述 (中文)' },
                            { name: 'desc_en', type: 'text', title: 'Description (English)' }
                        ]
                    }]
                },
                {
                    name: 'plans',
                    title: '方案',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'name', type: 'string', title: '方案名稱 (中文)' },
                            { name: 'name_en', type: 'string', title: 'Plan Name (English)' },
                            { name: 'sub', type: 'string', title: '副標題/價格 (中文)' },
                            { name: 'sub_en', type: 'string', title: 'Subtitle/Price (English)' },
                            { name: 'items', type: 'array', of: [{ type: 'string' }], title: '條目 (中文)' },
                            { name: 'items_en', type: 'array', of: [{ type: 'string' }], title: 'Items (English)' }
                        ]
                    }]
                },
                {
                    name: 'contact',
                    title: '聯絡資訊',
                    type: 'object',
                    fields: [
                        { name: 'desc', type: 'text', title: '描述 (中文)' },
                        { name: 'desc_en', type: 'text', title: 'Description (English)' }
                    ]
                }
            ]
        },
        {
            name: 'content',
            title: '內容 (預留)',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
})

