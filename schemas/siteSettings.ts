import { defineType } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: '網站設定 (Site Settings)',
    type: 'document',
    fields: [
        {
            name: 'title_zh',
            title: '網站標題 (中文)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'title_en',
            title: 'Site Title (English)',
            type: 'string',
        },
        {
            name: 'subtitle_zh',
            title: '網站副標題 (中文)',
            type: 'string',
        },
        {
            name: 'subtitle_en',
            title: 'Subtitle (English)',
            type: 'string',
        },
        {
            name: 'description_zh',
            title: '網站描述 (中文)',
            type: 'text',
            rows: 3,
        },
        {
            name: 'description_en',
            title: 'Description (English)',
            type: 'text',
            rows: 3,
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'contactEmail',
            title: '聯絡信箱 (Email)',
            type: 'string',
        },
        {
            name: 'phone',
            title: '聯絡電話',
            type: 'string',
        },
        {
            name: 'serviceRegion_zh',
            title: '服務區域 (中文)',
            type: 'string',
        },
        {
            name: 'serviceRegion_en',
            title: 'Service Region (English)',
            type: 'string',
        },
        {
            name: 'address_zh',
            title: '地址 (中文)',
            type: 'text',
            rows: 2,
        },
        {
            name: 'address_en',
            title: 'Address (English)',
            type: 'text',
            rows: 2,
        },
        {
            name: 'socialLinks',
            title: '社群連結',
            type: 'object',
            fields: [
                {
                    name: 'facebook',
                    title: 'Facebook',
                    type: 'url',
                },
                {
                    name: 'instagram',
                    title: 'Instagram',
                    type: 'url',
                },
                {
                    name: 'youtube',
                    title: 'YouTube',
                    type: 'url',
                },
            ],
        },
    ],
})
