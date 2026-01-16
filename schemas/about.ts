import { defineType } from 'sanity'

export default defineType({
    name: 'about',
    title: '關於我們',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: '標題',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'heroStory',
            title: 'About頁面: 主視覺故事卡片',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: '標題' },
                { name: 'subtitle', type: 'string', title: '副標題' },
                { name: 'tag', type: 'string', title: '標籤文字' },
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
                    { name: 'title', type: 'string', title: '標題' },
                    { name: 'subtitle', type: 'string', title: '副標題' },
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
                    { name: 'title', type: 'string', title: '標題' },
                    { name: 'desc', type: 'text', title: '描述' },
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
                    { name: 'title', type: 'string', title: '標題' },
                    { name: 'desc', type: 'text', title: '描述' },
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
                            { name: 'title', type: 'string', title: '標題' },
                            { name: 'desc', type: 'text', title: '描述' },
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
                            { name: 'title', type: 'string', title: '標題' },
                            { name: 'desc', type: 'text', title: '描述' }
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
                            { name: 'name', type: 'string', title: '方案名稱' },
                            { name: 'sub', type: 'string', title: '副標題/價格' },
                            { name: 'items', type: 'array', of: [{ type: 'string' }], title: '條目' }
                        ]
                    }]
                },
                {
                    name: 'contact',
                    title: '聯絡資訊',
                    type: 'object',
                    fields: [
                        { name: 'desc', type: 'text', title: '描述' }
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
