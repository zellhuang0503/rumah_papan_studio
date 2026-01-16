import { getCliClient } from 'sanity/cli'
import { createReadStream } from 'fs'

const client = getCliClient()
const IMAGES_DIR = 'e:\\CascadeProjects\\rumah_papan\\src\\assets\\images\\'

const slides = [
    { title: "雞公碗", desc: "馬來西亞最大的華人新村入口，用一碗白飯和雞公碗，向每個來訪的人打招呼。", filename: "Image_village_tour.jpg" },
    { title: "拜天公", desc: "神壇、供品和煙火，把幾代福建人對天公與祖先的心意都放在這一夜。", filename: "Image_pray_heaven.jpg" },
    { title: "班厝故事館", desc: "故事館裡收著新村記憶、展覽與飯桌，每次推門，都是班達馬蘭的新一頁。", filename: "Image_house_story_gallery.jpg" },
    { title: "班達馬蘭新村街景", desc: "海鮮店、肉骨茶與老招牌，把班達馬蘭最日常的生活節奏排成街景。", filename: "Image_pandamaran_daily.jpg" },
    { title: "技能換宿", desc: "帶著專長來幫忙，新村用飯桌、人情和故事，換給你一段住在這裡的日常。", filename: "Image_skill_swap.jpg" },
    { title: "新村市集", desc: "一攤攤新村美食與手作，把人情味和好味道一起打包，讓你帶回家。", filename: "Image_village_market.jpg" },
    { title: "漢白玉佛祖像", desc: "全馬最大漢白玉佛像立在蓮花清人寺，成了班達馬蘭最安定的祝福地標。", filename: "Image_guan_tian_gong.jpg" },
]

async function migrate() {
    try {
        console.log("Starting migration...")
        // Fetch home document
        const homeDoc = await client.fetch('*[_type == "home"][0]')
        if (!homeDoc) throw new Error("Home document not found")

        console.log("Found Home document:", homeDoc._id)
        const newSlides = []

        for (const slide of slides) {
            console.log(`Processing ${slide.title} (Image: ${slide.filename})...`)
            try {
                const asset = await client.assets.upload('image', createReadStream(IMAGES_DIR + slide.filename), {
                    filename: slide.filename
                })

                newSlides.push({
                    _key: Math.random().toString(36).substring(7),
                    _type: 'introSlide',
                    title: slide.title,
                    desc: slide.desc,
                    image: {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: asset._id
                        }
                    }
                })
            } catch (e) {
                console.error(`Failed to upload ${slide.filename}:`, e)
            }
        }

        if (newSlides.length > 0) {
            console.log(`Patching document with ${newSlides.length} slides...`)
            await client.patch(homeDoc._id)
                .set({ introSlides: newSlides })
                .commit()
            console.log("Migration successful! Please reload Sanity Studio.")
        } else {
            console.log("No slides to patch.")
        }

    } catch (err) {
        console.error("Migration failed:", err)
    }
}

migrate()
