import { defineType } from 'sanity'

export default defineType({
    name: 'story',
    title: '故事 (Stories)',
    type: 'document',
    fields: [
        {
            name: 'title_zh',
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
            name: 'description_zh',
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
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title_zh',
                maxLength: 96,
            },
        },
        {
            name: 'category',
            title: '分類 (Category)',
            type: 'string',
            options: {
                list: [
                    { title: '全部 (All)', value: 'all' },
                    { title: '歷史 (History)', value: 'history' },
                    { title: '關於 (About)', value: 'about' },
                    { title: '交換 (Exchange)', value: 'exchange' },
                    { title: '美食 (Food)', value: 'food' },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'variant',
            title: '樣式 (Variant)',
            type: 'string',
            options: {
                list: [
                    { title: '橫幅 (Banner)', value: 'banner' },
                    { title: '標準 (Standard)', value: 'standard' },
                    { title: '文字高亮 (Text Highlight)', value: 'text-highlight' },
                    { title: '文字疊加 (Text Overlay)', value: 'text-overlay' },
                    { title: '緊湊 (Compact)', value: 'compact' },
                ],
            },
            initialValue: 'standard',
        },
        {
            name: 'size',
            title: '尺寸 (Size)',
            type: 'string',
            options: {
                list: [
                    { title: '全寬 (Full)', value: 'full' },
                    { title: '大 (Large)', value: 'large' },
                    { title: '中 (Medium)', value: 'medium' },
                    { title: '小 (Small)', value: 'small' },
                ],
            },
            initialValue: 'medium',
        },
        {
            name: 'tags',
            title: '標籤 (Tags)',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'coverImage',
            title: '封面圖片 (Cover Image)',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'extraImages',
            title: '更多圖片 (Extra Images)',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        },
        {
            name: 'author',
            title: '作者',
            type: 'string',
        },
        {
            name: 'publishedAt',
            title: '發布日期',
            type: 'datetime',
        },
    ],
})
