import { defineType } from 'sanity'

export default defineType({
    name: 'home',
    title: '首頁',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: '頁面標題 (中文)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'title_en',
            title: 'Page Title (English)',
            type: 'string',
        },
        {
            name: 'heroImage',
            title: '主視覺圖片',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'heroBubbles',
            title: 'Hero區塊氣泡內容',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'key', type: 'string', title: '識別碼(ID)', description: '例如: about, bkt' },
                    { name: 'title', type: 'string', title: '標題 (中文)' },
                    { name: 'title_en', type: 'string', title: 'Title (English)' },
                    { name: 'body', type: 'text', title: '內文 (中文)', rows: 3 },
                    { name: 'body_en', type: 'text', title: 'Body (English)', rows: 3 },
                    { name: 'bubbleText', type: 'string', title: '氣泡按鈕文字 (中文)' },
                    { name: 'bubbleText_en', type: 'string', title: 'Bubble Text (English)' },
                    { name: 'isLarge', type: 'boolean', title: '大尺寸氣泡?', initialValue: false },
                    {
                        name: 'image',
                        title: '背景圖片',
                        type: 'image',
                        options: { hotspot: true }
                    }
                ],
                preview: {
                    select: {
                        title: 'bubbleText',
                        subtitle: 'title'
                    }
                }
            }]
        },
        {
            name: 'introSlides',
            title: '新村大門輪播圖 (Intro Slides)',
            type: 'array',
            of: [{
                type: 'object',
                name: 'introSlide',
                fields: [
                    { name: 'title', type: 'string', title: '標題 (中文)' },
                    { name: 'title_en', type: 'string', title: 'Title (English)' },
                    { name: 'desc', type: 'text', title: '描述 (中文)', rows: 2 },
                    { name: 'desc_en', type: 'text', title: 'Description (English)', rows: 2 },
                    { name: 'image', type: 'image', title: '背景圖片', options: { hotspot: true } }
                ],
                preview: {
                    select: {
                        title: 'title',
                        media: 'image'
                    }
                }
            }]
        },
        {
            name: 'description',
            title: '描述 (中文)',
            type: 'text',
            rows: 4,
        },
        {
            name: 'description_en',
            title: 'Description (English)',
            type: 'text',
            rows: 4,
        },
        {
            name: 'content',
            title: '內容',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
})

